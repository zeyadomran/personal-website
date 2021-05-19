import { getModelForClass, ModelOptions, Prop } from "@typegoose/typegoose";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType({ description: "The Project Model." })
@ModelOptions({ options: { allowMixed: 0 } })
export class Project {
	@Field(() => ID, { description: "The project's ID." })
	id: string;

	@Field({ description: "The title of the project." })
	@Prop({ required: true })
	title: string;

	@Field({ description: "The description of the project." })
	@Prop({ required: true })
	description: string;

	@Field(() => [String], {
		description: "The technologies used in this project.",
	})
	@Prop()
	technologies: string[];

	@Field({
		nullable: true,
		description: "The project's source code or website.",
	})
	@Prop()
	url?: string;

	@Field({ description: "The year the project was completed." })
	@Prop({ required: true })
	completionDate: string;
}

export default getModelForClass(Project);
