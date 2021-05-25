import { Button } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

interface NavItemProps {
	children?: React.ReactNode;
	isLast?: boolean;
	to: string;
}

const NavItem: React.FC<NavItemProps> = ({ children, isLast, to, ...rest }) => (
	<NextLink href={to}>
		<Button
			textDecoration="none"
			cursor="pointer"
			bg="transparent"
			fontWeight="bold"
			fontFamily="Poppins"
			px="2"
			_hover={{ color: "red" }}
			{...rest}
		>
			{children}
		</Button>
	</NextLink>
);

export default NavItem;
