import React from "react";
import NavCTA from "./NavCTA";
import NavLink from "./NavLink";

interface NavLinksProps {
	isOpen: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({ isOpen }) => {
	return (
		<nav className={`${isOpen ? "block" : "hidden"} md:block`}>
			<ul className="flex flex-1 md:flex-auto flex-col md:flex-row w-full md:w-auto list-none items-center justify-center md:justify-between lg:justify-end mt-2 md:mt-0 space-y-4 md:space-y-0 md:space-x-8">
				<NavLink href="/about">About</NavLink>
				<NavLink href="/projects">Projects</NavLink>
				<NavLink href="/contact">Contact</NavLink>
				<NavCTA>Download CV</NavCTA>
			</ul>
		</nav>
	);
};

export default NavLinks;
