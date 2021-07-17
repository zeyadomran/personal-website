import React from "react";
import NavCTA from "./NavCTA";
import NavLink from "./NavLink";

interface MobileMenuProps {
	isOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
	return (
		<nav className={`${isOpen ? "block" : "hidden"} md:hidden`}>
			<ul className="flex flex-1 flex-col w-screen h-screen z-20 bg-white list-none items-center justify-start mt-10 space-y-4 md:space-y-0 md:space-x-8 transition-height duration-1000 ease-in-out">
				<NavLink href="about">About</NavLink>
				<NavLink href="projects">Projects</NavLink>
				<NavLink href="contact">Contact</NavLink>
				<NavCTA>Download CV</NavCTA>
			</ul>
		</nav>
	);
};

export default MobileMenu;
