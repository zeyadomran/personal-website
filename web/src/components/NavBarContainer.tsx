import { Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const NavBarContainer: React.FC = ({ children, ...props }) => {
	return (
		<Flex
			as="nav"
			bg={useColorModeValue("white.100", "black.800")}
			shadow="sm"
			mb={8}
		>
			<Flex
				align="center"
				justify="space-between"
				wrap="wrap"
				w={["95%", "90%", "85%", "80%"]}
				mx="auto"
				p={4}
				{...props}
			>
				{children}
			</Flex>
		</Flex>
	);
};

export default NavBarContainer;
