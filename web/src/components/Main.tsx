const Main: React.FC = ({ children, ...props }) => {
	return (
		<main
			style={{
				minHeight: "100vh",
				overflow: "hidden",
				display: "block",
				position: "relative",
				paddingBottom: "100px",
			}}
			{...props}
		>
			{children}
		</main>
	);
};

export default Main;
