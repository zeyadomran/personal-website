import { Flex } from "@chakra-ui/react";
import React from "react";

const NavBarContainer: React.FC = ({ children, ...props }) => {
	return (
		<Flex
			zIndex={1}
			position="sticky"
			top={0}
			as="nav"
			align="center"
			justify="space-between"
			wrap="wrap"
			w={["95%", "90%", "85%", "80%"]}
			mb={8}
			mx="auto"
			p={4}
			{...props}
		>
			{children}
		</Flex>
	);
};

export default NavBarContainer;
