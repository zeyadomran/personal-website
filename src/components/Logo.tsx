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
			<div className="w-9 h-10 z-10 mr-2 cursor-pointer text-blue hover:-translate-y-1 transition duration-300 ease-in-out">
				<LogoSVG />
			</div>
		</Link>
	);
};

export default Logo;
