import React from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "./Projects";
import ProjectsCardContainer from "./ProjectsCardContainer";

interface ProjectsProps {
	projects: Project[];
}

const ProjectsContent: React.FC<ProjectsProps> = ({ projects }) => {
	return (
		<div className="flex flex-col items-center break-words w-full space-y-14">
			<h2 className="text-center font-heading text-2xl md:text-4xl text-black font-bold">
				Some of my projects
			</h2>
			<ProjectsCardContainer>
				{projects.map((project, index) => (
					<ProjectCard key={index} project={project} />
				))}
			</ProjectsCardContainer>
		</div>
	);
};

export default ProjectsContent;
