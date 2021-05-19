import { getModelForClass, ModelOptions, Prop } from "@typegoose/typegoose";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType({ description: "The Certificate Model." })
@ModelOptions({ options: { allowMixed: 0 } })
export class Certificate {
	@Field(() => ID, { description: "The certificate's ID." })
	id: string;

	@Field({ description: "The title of the certificate." })
	@Prop({ required: true })
	title: string;

	@Field({ description: "The issuer of the certificate." })
	@Prop({ required: true })
	issuer: string;

	@Field({ description: "The certificate's URL." })
	@Prop({ required: true })
	url: string;

	@Field({ description: "The certification's ID." })
	@Prop({ required: true })
	certificateID: string;

	@Field({ description: "The year the certificate was received." })
	@Prop({ required: true })
	completionDate: string;
}

export default getModelForClass(Certificate);
