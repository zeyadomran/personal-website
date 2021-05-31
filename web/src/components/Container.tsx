import { Flex, Stack } from "@chakra-ui/react";
import React from "react";

const Container: React.FC = ({ children, ...props }) => {
	return (
		<Flex my={8} w={"full"}>
			<Stack
				align="center"
				w={["95%", "90%", "85%", "80%"]}
				mx="auto"
				py={{ base: 20, md: 36 }}
				spacing={20}
				{...props}
			>
				{children}
			</Stack>
		</Flex>
	);
};

export default Container;
