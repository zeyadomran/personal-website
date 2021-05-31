import { Arg, Mutation, Resolver } from "type-graphql";
import { __prod__ } from "../Constants";
import { sendEmail as dev } from "../utils/sendEmailDev";
import { sendEmail as prod } from "../utils/sendEmailProd";

@Resolver()
class ContactResolver {
	@Mutation(() => Boolean, {
		description: "Send an email from the user to me.",
	})
	async contactMe(
		@Arg("from") from: string,
		@Arg("subject") subject: string,
		@Arg("message") message: string
	) {
		if (!__prod__) {
			await dev(from, subject, `<p>${message}</p>`);
		} else {
			await prod(subject, `<p>From: ${from}<br/>${message}</p>`);
		}
		return true;
	}
}
export default ContactResolver;
