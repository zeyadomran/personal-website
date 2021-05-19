import { Arg, Mutation, Query, Resolver } from "type-graphql";
import ProjectModel, { Project } from "../models/Project";
import { AddProjectType, UpdateProjectType } from "../types/ProjectTypes";

@Resolver(() => Project)
class ProjectResolver {
	@Query(() => [Project], {
		description: "Gets all the projects in the database.",
	})
	async projects() {
		return ProjectModel.find();
	}

	@Query(() => Project, { description: "Gets a project by its ID." })
	async project(@Arg("id", () => String) id: string) {
		return ProjectModel.findById(id);
	}

	@Mutation(() => Project, { description: "Creates a new project." })
	async addProject(@Arg("data", () => AddProjectType) data: AddProjectType) {
		return ProjectModel.create(data);
	}

	@Mutation(() => Boolean, { description: "Deletes a project by its ID." })
	async deleteProject(@Arg("id", () => String) id: string) {
		await ProjectModel.deleteOne({ _id: id });
		return true;
	}

	@Mutation(() => Project, {
		description: "Updates a a specific project by its ID.",
	})
	async updateProject(
		@Arg("data", () => UpdateProjectType) data: UpdateProjectType
	) {
		return ProjectModel.findByIdAndUpdate(data.id, data, { new: true });
	}
}

export default ProjectResolver;
