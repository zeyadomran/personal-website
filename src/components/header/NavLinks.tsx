import React from "react";
import NavCTA from "./NavCTA";
import NavLink from "./NavLink";

const NavLinks: React.FC = () => {
	return (
		<nav className="hidden md:block">
			<ul className="flex flex-1 md:flex-auto flex-col md:flex-row w-screen md:w-auto h-screen md:h-auto list-none items-center justify-start md:justify-between lg:justify-end mt-16 md:mt-0 space-y-4 md:space-y-0 md:space-x-8">
				<NavLink href="about">About</NavLink>
				<NavLink href="projects">Projects</NavLink>
				<NavLink href="contact">Contact</NavLink>
				<NavCTA>Download CV</NavCTA>
			</ul>
		</nav>
	);
};

export default NavLinks;
