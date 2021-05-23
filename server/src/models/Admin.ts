import {
	getModelForClass,
	ModelOptions,
	Prop,
	pre,
} from "@typegoose/typegoose";
import { Field, ID, ObjectType } from "type-graphql";
import bcrypt from "bcrypt";

@pre<Admin>("save", async function () {
	/* Only run if password was modified */
	if (!this.isModified("password")) return;
	/* Hash the password with cost of 12 */
	this.password = await bcrypt.hash(this.password, 12);
})
@ObjectType({ description: "The Admin Model." })
@ModelOptions({ options: { allowMixed: 0 } })
export class Admin {
	@Field(() => ID, { description: "The Admin's ID." })
	id: string;

	@Field({ description: "The Admin's username." })
	@Prop({ required: true, unique: true })
	username: string;

	@Prop({ required: true })
	password: string;
}

export default getModelForClass(Admin);
