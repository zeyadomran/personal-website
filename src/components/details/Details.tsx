import React from "react";
import DetailsContent from "./DetailsContent";

const Details: React.FC = () => {
	return (
		<section
			id="details"
			className="flex flex-col items-center justify-center py-24 md:py-32 px-6 md:px-12 bg-black"
		>
			<DetailsContent />
		</section>
	);
};

export default Details;
