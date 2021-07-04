interface HeaderContainerProps {
	isOpen: boolean;
}

const HeaderContainer: React.FC<HeaderContainerProps> = ({
	children,
	isOpen,
}) => {
	return (
		<header className={`fixed top-0 z-50 h-16 w-full p-1 bg-white `}>
			<div
				className={`flex flex-shrink-0 flex-col md:flex-row mx-auto justify-between items-center ${
					isOpen ? "border-gray-200 shadow" : "border-white shadow-none"
				} p-3 md:shadow-none md:border-white border-2 md:border-0 rounded-md md:rounded-none w-11/12 md:w-9/12 lg:w-8/12`}
			>
				{children}
			</div>
		</header>
	);
};
export default HeaderContainer;
