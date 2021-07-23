import React from "react";
import useAnimate from "../../hooks/useAnimate";
import Badge from "../Badge";
import CTAButton from "../CTAButton";
import { Project } from "./Projects";

interface ProjectCardProps {
	project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
	const ref = React.useRef(null);
	useAnimate(ref, "motion-safe:animate-fadeIn");
	return (
		<div
			ref={ref}
			className="flex flex-col justify-between items-center p-6 w-full rounded-lg bg-dark-blue text-white hover:-translate-y-1 transition duration-300 ease-in-out"
		>
			<div className="flex items-center justify-between w-full mb-1">
				<h3 className="font-heading text-3xl text-white font-bold">
					{project.name}
				</h3>
				<Badge>{project.year}</Badge>
			</div>
			<div className="flex flex-row items-left justify-start flex-wrap w-full mb-2">
				{project.technologies.map((name, index) => (
					<Badge key={index}>{name}</Badge>
				))}
			</div>
			<p className="text-xl text-white text-left mb-2">{project.description}</p>
			<CTAButton href={project.url}>View Source Code</CTAButton>{" "}
		</div>
	);
};

export default ProjectCard;
