import React from "react";
import Logo from "./Logo";
import MenuToggle from "./MenuToggle";
import NavBarContainer from "./NavBarContainer";
import NavLinks from "./NavLinks";

const Navbar: React.FC = (props) => {
	const [isOpen, setIsOpen] = React.useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<NavBarContainer {...props}>
			<Logo />
			<MenuToggle toggle={toggle} isOpen={isOpen} />
			<NavLinks isOpen={isOpen} />
		</NavBarContainer>
	);
};

export default Navbar;
