import { Arg, Mutation, Query, Resolver } from "type-graphql";
import ProjectModel, { Project } from "../models/Project";

@Resolver(() => Project)
class ProjectResolver {
	@Query(() => [Project])
	async projects() {
		return ProjectModel.find();
	}

	@Mutation(() => Project)
	async addProject(
		@Arg("title", () => String) title: string,
		@Arg("description", () => String) description: string,
		@Arg("technologies", () => [String]) technologies: string[],
		@Arg("completionDate", () => String) completionDate: string,
		@Arg("url", () => String, { nullable: true }) url?: string
	) {
		return ProjectModel.create({
			title,
			description,
			technologies,
			url,
			completionDate,
		});
	}

	@Mutation(() => Boolean)
	async deleteProject(@Arg("id", () => String) id: string) {
		await ProjectModel.deleteOne({ _id: id });
		return true;
	}
}

export default ProjectResolver;
