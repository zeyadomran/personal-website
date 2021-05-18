import { InputType, Field, ID } from "type-graphql";

@InputType({ description: "The InputType for creating a project." })
export class AddProjectType {
	@Field({ description: "The title of the project." })
	title: string;

	@Field({ description: "The description of the project." })
	description: string;

	@Field(() => [String], {
		description: "The technologies used in this project.",
	})
	technologies: string[];

	@Field({
		nullable: true,
		description: "The project's source code or website.",
	})
	url?: string;

	@Field({ description: "The year the project was completed." })
	completionDate: string;
}

@InputType({ description: "The InputType for updating a project." })
export class UpdateProjectType {
	@Field(() => ID, { description: "The project's ID." })
	id: string;

	@Field({ nullable: true, description: "The title of the project." })
	title?: string;

	@Field({ nullable: true, description: "The description of the project." })
	description?: string;

	@Field(() => [String], {
		nullable: true,
		description: "The technologies used in this project.",
	})
	technologies?: string[];

	@Field({
		nullable: true,
		description: "The project's source code or website.",
	})
	url?: string;

	@Field({ nullable: true, description: "The year the project was completed." })
	completionDate?: string;
}
