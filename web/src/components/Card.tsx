import {
	Badge,
	Center,
	Flex,
	Heading,
	Kbd,
	Link,
	Stack,
	StackItem,
	Stat,
	StatNumber,
	Text,
	useColorModeValue,
	Wrap,
	WrapItem,
} from "@chakra-ui/react";
import React from "react";
import { Project } from "../generated/graphql";
import UnderlineText from "./UnderlineText";

interface CardProps {
	data: Project;
}

const Card: React.FC<CardProps> = ({ data }) => {
	return (
		<WrapItem>
			<Stack
				bg={useColorModeValue("white.100", "black.800")}
				borderRadius={"xl"}
				p={8}
				w={"sm"}
				align={"center"}
				spacing={10}
				boxShadow={"md"}
				_hover={{ boxShadow: "lg" }}
			>
				<StackItem textAlign="center" w="full">
					<Flex align="center" justify="center" mb={5}>
						<Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }}>
							<UnderlineText>{data.title}</UnderlineText>
						</Heading>
						<Badge ml={5} variant="outline" colorScheme={"blue"}>
							{data.completionDate}
						</Badge>
					</Flex>
					<Text as="h3" fontFamily="Roboto" fontSize={{ base: "md", md: "lg" }}>
						{data.description}
					</Text>
				</StackItem>
				{data.url && (
					<StackItem>
						<Link
							px={4}
							py={3}
							colorScheme={"blue"}
							bg={"blue.400"}
							rounded={"md"}
							color={"white.100"}
							_hover={{
								bg: "blue.700",
							}}
							href={data.url}
							isExternal
						>
							Check it out!
						</Link>
					</StackItem>
				)}
				<StackItem>
					<Center>
						<Wrap justify="center" px={5}>
							{data.technologies.map((tech, i) => (
								<WrapItem key={i}>
									<Badge variant="solid" colorScheme={"blue"}>
										{tech.toUpperCase()}
									</Badge>
								</WrapItem>
							))}
						</Wrap>
					</Center>
				</StackItem>
			</Stack>
		</WrapItem>
	);
};

export default Card;
