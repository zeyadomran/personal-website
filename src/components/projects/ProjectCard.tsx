import React from "react";
import Badge from "../Badge";
import CTAButton from "../CTAButton";
import { Project } from "./Projects";

interface ProjectCardProps {
	project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
	return (
		<div className="flex flex-col justify-between p-8 w-full rounded-lg bg-black text-white space-y-6">
			<div className="flex items-center justify-between">
				<h3 className="font-heading text-3xl text-white font-bold">
					{project.name}
				</h3>
				<Badge>{project.year}</Badge>
			</div>
			<p className="text-xl text-white text-left">{project.description}</p>
			<div className="flex flex-col items-center space-y-4">
				<CTAButton href={project.url}>View Source Code</CTAButton>
				<div className="flex flex-row items-center justify-start flex-wrap">
					{project.technologies.map((name, index) => (
						<Badge key={index}>{name}</Badge>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
