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
			className="flex flex-col items-center p-6 w-full rounded-lg bg-white space-y-4"
		>
			{icon}
			<div>
				<p className="text-left text-black text-xl">{children}</p>
			</div>
		</div>
	);
};

export default DetailCard;
