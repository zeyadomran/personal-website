import React from "react";
import Logo from "../Logo";
import HamburgerMenu from "./HamburgerMenu";
import HeaderContainer from "./HeaderContainer";
import NavLinks from "./NavLinks";

const Header: React.FC = () => {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<HeaderContainer isOpen={isOpen}>
			<div className="flex items-center justify-between w-full md:w-auto">
				<Logo />
				<HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
			</div>
			<NavLinks isOpen={isOpen} />
		</HeaderContainer>
	);
};
export default Header;
