const ProjectsCardContainer: React.FC = ({ children }) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-8 w-full">
			{children}
		</div>
	);
};

export default ProjectsCardContainer;
