const Container: React.FC = ({ children }) => {
	return (
		// grid grid-cols-12 gap-8
		<main className="min-h-screen">{children}</main>
	);
};
export default Container;
