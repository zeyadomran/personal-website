import { Button, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

interface NavItemProps {
	children?: React.ReactNode;
	to: string;
}

const NavItem: React.FC<NavItemProps> = ({ children, to, ...rest }) => {
	return (
		<NextLink href={to}>
			<Button
				textDecoration="none"
				cursor="pointer"
				bg="transparent"
				fontWeight="bold"
				fontFamily="Poppins"
				px="2"
				position="relative"
				_hover={{ bg: useColorModeValue("white.200", "black.700") }}
				{...rest}
			>
				{children}
			</Button>
		</NextLink>
	);
};

export default NavItem;
