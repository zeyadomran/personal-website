import React from "react";
import useAnimate from "../../hooks/useAnimate";

interface DetailCardProps {
	icon: React.ReactNode;
}

const DetailCard: React.FC<DetailCardProps> = ({ children, icon }) => {
	const ref = React.useRef(null);
	useAnimate(ref, "motion-safe:animate-fadeIn");

	return (
		<div
			ref={ref}
			className="flex flex-col items-center p-4 w-full rounded-lg bg-white space-y-4 hover:-translate-y-1 transition duration-300 ease-in-out"
		>
			{icon}
			<div>
				<p className="text-center text-black text-lg font-body">{children}</p>
			</div>
		</div>
	);
};

export default DetailCard;
