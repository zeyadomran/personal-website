import { Stack } from "@chakra-ui/react";
import React from "react";
import ColorModeToggle from "./ColorModeToggle";
import Logo from "./Logo";
import MenuToggle from "./MenuToggle";
import NavBarContainer from "./NavBarContainer";
import NavLinks from "./NavLinks";

const Navbar: React.FC = (props) => {
	const [isOpen, setIsOpen] = React.useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<NavBarContainer {...props}>
			<MenuToggle toggle={toggle} isOpen={isOpen} />
			<Logo />
			<ColorModeToggle display={{ base: "block", md: "none" }} />
			<Stack
				align="center"
				justify={["center", "space-between", "flex-end", "flex-end"]}
				direction={["column", "row", "row", "row"]}
				width={{ base: "100%", md: "auto" }}
			>
				<NavLinks isOpen={isOpen} />
				<ColorModeToggle display={{ base: "none", md: "block" }} />
			</Stack>
		</NavBarContainer>
	);
};

export default Navbar;
