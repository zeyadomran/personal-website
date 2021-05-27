import { Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const NavBarContainer: React.FC = ({ children, ...props }) => {
	return (
		<Flex
			as="header"
			boxShadow={"sm"}
			mb={8}
			pos="fixed"
			top="0"
			w={"full"}
			minH={"60px"}
			zIndex="999"
			css={{
				backdropFilter: "saturate(180%) blur(5px)",
				backgroundColor: useColorModeValue(
					"rgba(250, 250, 250, 0.8)",
					"rgba(30, 30, 30, 0.8)"
				),
			}}
		>
			<Flex
				align="center"
				justify="space-between"
				wrap="wrap"
				w={["95%", "90%", "85%", "80%"]}
				mx="auto"
				p={4}
				flexShrink={0}
				{...props}
			>
				{children}
			</Flex>
		</Flex>
	);
};

export default NavBarContainer;
