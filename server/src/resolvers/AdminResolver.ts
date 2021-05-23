import bcrypt from "bcrypt";
import {
	Arg,
	Ctx,
	Mutation,
	Query,
	Resolver,
	UseMiddleware,
} from "type-graphql";
import { COOKIE_NAME } from "../Constants";
import { isAuth } from "../middleware/isAuth";
import AdminModel, { Admin } from "../models/Admin";
import { MyContext } from "../types/MyContext";

@Resolver(() => Admin)
class AdminResolver {
	@Query(() => Admin, { nullable: true, description: "Get logged in admin" })
	async me(@Ctx() { req }: MyContext) {
		if (!req.session.adminId) return null;
		return AdminModel.findById(req.session.adminId);
	}

	@Mutation(() => Admin, { description: "Register an admin." })
	@UseMiddleware(isAuth)
	async registerAdmin(
		@Arg("username") username: string,
		@Arg("password") password: string,
		@Ctx() { req }: MyContext
	) {
		const admin = await AdminModel.create({ username, password });
		req.session.adminId = admin.id;
		return admin;
	}

	@Mutation(() => Admin, { nullable: true, description: "Login an admin." })
	async loginAdmin(
		@Arg("username") username: string,
		@Arg("password") password: string,
		@Ctx() { req }: MyContext
	) {
		const admin = await AdminModel.findOne({ username });
		if (!admin) throw new Error("Admin not found!");

		const valid = await bcrypt.compare(password, admin.password);
		if (!valid) throw new Error("Password is not correct!");

		req.session.adminId = admin.id;
		return admin;
	}
	@Mutation(() => Boolean, { description: "Logs out an admin." })
	async logout(@Ctx() { req, res }: MyContext) {
		return new Promise((resolve) =>
			req.session.destroy((err) => {
				res.clearCookie(COOKIE_NAME);
				if (err) {
					console.log(err);
					resolve(false);
					return;
				}
				resolve(true);
			})
		);
	}
}

export default AdminResolver;
