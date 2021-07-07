interface HeaderContainerProps {
	isOpen: boolean;
}

const HeaderContainer: React.FC<HeaderContainerProps> = ({
	children,
	isOpen,
}) => {
	return (
		<header className="fixed top-0 z-50 w-full p-1 bg-white">
			<div className="flex flex-shrink-0 flex-col md:flex-row mx-auto bg-white justify-between min-h-12 items-center p-2 w-11/12 md:w-9/12 lg:w-8/12 transition-transform duration-500 ease-out">
				{children}
			</div>
		</header>
	);
};
export default HeaderContainer;
