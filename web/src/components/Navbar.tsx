import { Box } from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";
import MenuToggle from "./MenuToggle";
import NavBarContainer from "./NavBarContainer";
import NavLinks from "./NavLinks";

const Navbar: React.FC = (props) => {
	const [isOpen, setIsOpen] = React.useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<nav>
			<Box zIndex={1} position="sticky" top={0} /* shadow={"md"} */>
				<NavBarContainer {...props}>
					<Logo />
					<MenuToggle toggle={toggle} isOpen={isOpen} />
					<NavLinks isOpen={isOpen} />
				</NavBarContainer>
			</Box>
		</nav>
	);
};

export default Navbar;
