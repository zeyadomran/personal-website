const FooterContainer: React.FC = ({ children }) => {
	return (
		<footer className="z-10 w-full p-1 bg-black">
			<div className="flex flex-shrink-0 flex-col md:flex-row mx-auto justify-between items-center p-1 space-y-2 md:space-y-0 w-11/12 md:w-9/12 lg:w-8/12">
				{children}
			</div>
		</footer>
	);
};

export default FooterContainer;
