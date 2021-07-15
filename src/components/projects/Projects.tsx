import ProjectsContent from "./ProjectsContent";

export interface Project {
	name: string;
	description: string;
	year: number;
	url: string;
	technologies: string[];
}

interface ProjectsProps {
	projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
	return (
		<section
			id="projects"
			className="flex flex-col items-center justify-center py-20 px-2 bg-white"
		>
			<div className="w-11/12 md:w-9/12 lg:w-8/12">
				<ProjectsContent projects={projects} />
			</div>
		</section>
	);
};

export default Projects;
