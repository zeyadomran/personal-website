const DetailCardContainer: React.FC = ({ children }) => {
	return (
		// <div className="flex flex-col md:flex-row items-stretch justify-around space-y-8 md:space-y-0 space-x-0 md:space-x-8 w-full xl:w-9/12">
		<div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-8 w-full">
			{children}
		</div>
	);
};

export default DetailCardContainer;
