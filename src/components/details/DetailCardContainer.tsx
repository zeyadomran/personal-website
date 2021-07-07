const DetailCardContainer: React.FC = ({ children }) => {
	return (
		<div className="flex flex-col md:flex-row items-stretch justify-around space-y-8 md:space-y-0 space-x-0 md:space-x-8 w-full xl:w-9/12">
			{children}
		</div>
	);
};

export default DetailCardContainer;
