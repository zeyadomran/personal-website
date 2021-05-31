import {
	Badge,
	Flex,
	Heading,
	Stack,
	Text,
	useColorModeValue,
	WrapItem,
} from "@chakra-ui/react";
import React from "react";
import UnderlineText from "./UnderlineText";

interface CardProps {
	data: {
		school: string;
		duration: string;
		degree: string;
	};
}

const EducationCard: React.FC<CardProps> = ({ data }) => {
	return (
		<WrapItem>
			<Stack
				bg={useColorModeValue("white.100", "black.800")}
				borderRadius={"xl"}
				p={8}
				maxW={{ base: "sm", md: "lg" }}
				spacing={6}
				borderColor={useColorModeValue("white.100", "black.700")}
				borderWidth={"2px"}
				_hover={{
					borderColor: useColorModeValue("white.300", "black.600"),
				}}
			>
				<Flex align="center" justify="space-between" w="full">
					<Heading as="h2" fontSize={{ base: "xl", md: "3xl" }}>
						<UnderlineText>{data.school}</UnderlineText>
					</Heading>
					<Badge ml={3} variant="outline" colorScheme={"blue"}>
						{data.duration}
					</Badge>
				</Flex>
				<Text as="h3" fontFamily="Roboto" fontSize={{ base: "md", md: "lg" }}>
					{data.degree}
				</Text>
			</Stack>
		</WrapItem>
	);
};

export default EducationCard;
