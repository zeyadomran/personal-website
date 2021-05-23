import { MiddlewareFn } from "type-graphql";
import { MyContext } from "../types/MyContext";

export const isAuth: MiddlewareFn<MyContext> = ({ context }, next) => {
	if (!context.req.session.adminId) {
		throw new Error("not authenticated");
	}

	return next();
};
