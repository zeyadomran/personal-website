const Container: React.FC = ({ children }) => {
	return (
		<main className="grid grid-cols-12 gap-8 min-h-screen">{children}</main>
	);
};
export default Container;
