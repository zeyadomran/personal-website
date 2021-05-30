import { Flex } from "@chakra-ui/react";
import React from "react";

const Container: React.FC = ({ children, ...props }) => {
	return (
		<Flex mb={8} w={"full"}>
			<Flex
				align="center"
				direction={"column"}
				w={["95%", "90%", "85%", "80%"]}
				mx="auto"
				py={{ base: 20, md: 36 }}
				{...props}
			>
				{children}
			</Flex>
		</Flex>
	);
};

export default Container;
