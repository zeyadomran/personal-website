import { Arg, Mutation, Query, Resolver, UseMiddleware } from "type-graphql";
import { isAuth } from "../middleware/isAuth";
import CertificateModel, { Certificate } from "../models/Certificate";
import {
	AddCertificateType,
	UpdateCertificateType,
} from "../types/CertificateTypes";

@Resolver(() => Certificate)
class CertificateResolver {
	@Query(() => [Certificate], {
		description: "Gets all the certificates in the database.",
	})
	async certificates() {
		return CertificateModel.find().sort({ completionDate: -1 });
	}

	@Query(() => Certificate, { description: "Gets a certificate by its ID." })
	@UseMiddleware(isAuth)
	async certificate(@Arg("id", () => String) id: string) {
		return CertificateModel.findById(id);
	}

	@Mutation(() => Certificate, { description: "Creates a new certificate." })
	@UseMiddleware(isAuth)
	async addCertificate(
		@Arg("data", () => AddCertificateType) data: AddCertificateType
	) {
		return CertificateModel.create(data);
	}

	@Mutation(() => Boolean, { description: "Deletes a certificate by its ID." })
	@UseMiddleware(isAuth)
	async deleteCertificate(@Arg("id", () => String) id: string) {
		await CertificateModel.deleteOne({ _id: id });
		return true;
	}

	@Mutation(() => Certificate, {
		description: "Updates a a specific certificate by its ID.",
	})
	@UseMiddleware(isAuth)
	async updateCertificate(
		@Arg("data", () => UpdateCertificateType) data: UpdateCertificateType
	) {
		return CertificateModel.findByIdAndUpdate(data.id, data, { new: true });
	}
}

export default CertificateResolver;
