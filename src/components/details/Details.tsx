import React from "react";
import DetailsContent from "./DetailsContent";

const Details: React.FC = () => {
	return (
		<section
			id="about"
			className="flex flex-col items-center justify-center py-20 px-2 bg-dark-blue"
		>
			<div className="w-11/12 md:w-9/12 lg:w-8/12">
				<DetailsContent />
			</div>
		</section>
	);
};

export default Details;
