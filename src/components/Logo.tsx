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
			<div className="flex items-center w-4 h-10 z-10 mr-2">
				<LogoSVG />
			</div>{" "}
		</Link>
	);
};

export default Logo;
