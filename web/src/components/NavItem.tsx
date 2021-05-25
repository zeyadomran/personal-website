import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import React from "react";

interface NavItemProps {
	children?: React.ReactNode;
	isLast?: boolean;
	to: string;
}

const NavItem: React.FC<NavItemProps> = ({ children, isLast, to }) => {
	const router = useRouter();
	const isActive = router.pathname === to;
	return (
		<NextLink href={to}>
			<Button
				isActive={isActive}
				textDecoration="none"
				cursor="pointer"
				bg="transparent"
				fontWeight="bold"
				fontFamily="Poppins"
				borderRadius="0"
				px="2"
				_hover={{ color: "red" }}
				_active={{ borderBottom: "2px solid red" }}
			>
				{children}
			</Button>
		</NextLink>
	);
};

export default NavItem;
