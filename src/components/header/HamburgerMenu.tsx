import React from "react";
import { Spiral as Hamburger } from "hamburger-react";

interface HamburgerMenuProps {
	isOpen: boolean;
	setIsOpen: (value: boolean) => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, setIsOpen }) => {
	return (
		<div className="block md:hidden z-50">
			<Hamburger
				color="#070707"
				size={32}
				toggled={isOpen}
				toggle={setIsOpen}
			/>
		</div>
	);
};

export default HamburgerMenu;
