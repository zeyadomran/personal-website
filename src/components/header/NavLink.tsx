import React from "react";
import { Link } from "react-scroll";

interface NavLinkProps {
	href: string;
	children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ children, href }) => {
	return (
		<li className="font-body text-lg font-bold text-black hover:text-blue cursor-pointer">
			<Link
				to={href}
				smooth="easeInOutQuart"
				duration={100}
				ignoreCancelEvents={false}
			>
				{children}
			</Link>
		</li>
	);
};

export default NavLink;
