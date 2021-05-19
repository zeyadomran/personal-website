import { InputType, Field, ID } from "type-graphql";

@InputType({ description: "The InputType for creating a certificate." })
export class AddCertificateType {
	@Field({ description: "The title of the certificate." })
	title: string;

	@Field({ description: "The issuer of the certificate." })
	issuer: string;

	@Field({ description: "The certification's ID." })
	certificateID: string;

	@Field({
		nullable: true,
		description: "The certificate's website.",
	})
	url: string;

	@Field({ description: "The year the certificate was completed." })
	completionDate: string;
}

@InputType({ description: "The InputType for updating a certificate." })
export class UpdateCertificateType {
	@Field(() => ID, { description: "The certificate's ID." })
	id: string;

	@Field({ nullable: true, description: "The title of the certificate." })
	title?: string;

	@Field({ nullable: true, description: "The issuer of the certificate." })
	issuer?: string;

	@Field({ description: "The certification's ID.", nullable: true })
	certificateID?: string;

	@Field({
		nullable: true,
		description: "The certificate's website.",
	})
	url?: string;

	@Field({
		nullable: true,
		description: "The year the certificate was completed.",
	})
	completionDate?: string;
}
