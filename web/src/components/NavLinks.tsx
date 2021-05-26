import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import NavItem from "./NavItem";

interface NavLinksProps {
	isOpen: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({ isOpen }) => {
	return (
		<Box
			display={{ base: isOpen ? "block" : "none", md: "block" }}
			flexBasis={{ base: "100%", md: "auto" }}
		>
			<Stack
				spacing={1}
				align="center"
				justify={["center", "space-between", "flex-end", "flex-end"]}
				direction={["column", "row", "row", "row"]}
				mt={[2, 2, 0, 0]}
			>
				<NavItem to="/">Home</NavItem>
				<NavItem to="/about">About</NavItem>
				<NavItem to="/projects">Projects</NavItem>
				<NavItem to="/contact">Contact</NavItem>
			</Stack>
		</Box>
	);
};

export default NavLinks;
