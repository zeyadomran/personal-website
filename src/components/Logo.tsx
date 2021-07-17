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
			<div className="w-10 md:w-12 h-10 md:h-12 cursor-pointer z-10">
				<LogoSVG />
			</div>
		</Link>
	);
};

export default Logo;
