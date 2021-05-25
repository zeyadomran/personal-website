import { Box, Stack, Switch, useColorMode } from "@chakra-ui/react";
import React from "react";
import NavItem from "./NavItem";

interface NavLinksProps {
	isOpen: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({ isOpen }) => {
	const { colorMode, toggleColorMode } = useColorMode();
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
			>
				<NavItem to="/">Home</NavItem>
				<NavItem to="/about">About</NavItem>
				<NavItem to="/projects">Projects</NavItem>
				<NavItem to="/contact">Contact</NavItem>
				<Switch
					colorScheme="green"
					size="md"
					px={2}
					isChecked={colorMode === "dark"}
					onChange={() => toggleColorMode()}
					isLast
				/>
			</Stack>
		</Box>
	);
};

export default NavLinks;
