import React from "react";
import { Link } from "react-scroll";
import LogoSVG from "../resources/logo.svg";

const Logo: React.FC = () => {
	return (
		<Link
			to="hero"
			smooth="easeInOutQuart"
			duration={100}
			ignoreCancelEvents={false}
		>
			<div className="flex items-center text-xl md:text-2xl font-bold font-heading cursor-pointer hover:text-blue transition duration-300 ease-in-out">
				<div className="flex items-center w-4 h-10 z-10 mr-2">
					<LogoSVG />
				</div>{" "}
				Zeyad
			</div>
		</Link>
	);
};

export default Logo;
