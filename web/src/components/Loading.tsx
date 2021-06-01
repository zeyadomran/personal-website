import {
	CircularProgress,
	Container,
	Flex,
	Stack,
	StackItem,
	useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";

const Loading: React.FC = () => {
	return (
		<Flex align="center" justify="center" w="100vw" h="100vh" m="auto">
			<Stack
				as={Container}
				w={{ base: "xs", md: "md" }}
				p={10}
				spacing={10}
				rounded={"lg"}
				alignItems={"center"}
				bg={useColorModeValue("white.100", "black.800")}
			>
				<StackItem>
					<Logo hideText={false} />
				</StackItem>
				<StackItem>
					<CircularProgress
						isIndeterminate
						color="blue.300"
						capIsRound
						thickness="12px"
					/>
				</StackItem>
			</Stack>
		</Flex>
	);
};

export default Loading;
