import React from "react";
import NavItem from "./NavItem";
import { Box, Stack } from "@chakra-ui/react";

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
				spacing={4}
				align="center"
				justify={["center", "space-between", "flex-end", "flex-end"]}
				direction={["column", "row", "row", "row"]}
				pt={[4, 4, 0, 0]}
			>
				<NavItem to="/">Home</NavItem>
				<NavItem to="/about">About</NavItem>
				<NavItem to="/projects">Projects</NavItem>
				<NavItem to="/contact" isLast>
					Contact
				</NavItem>
			</Stack>
		</Box>
	);
};

export default NavLinks;
