import {
	Stack,
	useColorModeValue,
	WrapItem,
	Text,
	Heading,
	StackItem,
	Flex,
	Badge,
	Center,
	Link,
} from "@chakra-ui/react";
import React from "react";
import { Certificate } from "../generated/graphql";
import UnderlineText from "./UnderlineText";

interface CardProps {
	data: Certificate;
}

const CertificateCard: React.FC<CardProps> = ({ data }) => {
	return (
		<WrapItem>
			<Stack
				bg={useColorModeValue("white.100", "black.800")}
				borderRadius={"xl"}
				p={8}
				w={"sm"}
				spacing={6}
				borderColor={useColorModeValue("white.100", "black.700")}
				borderWidth={"2px"}
				_hover={{
					borderColor: useColorModeValue("white.300", "black.600"),
				}}
			>
				<StackItem textAlign="center" w="full">
					<Flex align="center" justify="center" mb={5}>
						<Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }}>
							<UnderlineText>{data.issuer}</UnderlineText>
						</Heading>
						<Badge ml={3} variant="outline" colorScheme={"blue"}>
							{data.completionDate}
						</Badge>
					</Flex>
					<Text as="h3" fontFamily="Roboto" fontSize={{ base: "md", md: "lg" }}>
						{data.title}
					</Text>
				</StackItem>
				<StackItem>
					<Center>
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
							View Credential!
						</Link>
					</Center>
				</StackItem>
				<StackItem textAlign="center" w="full">
					<Text
						fontSize="xs"
						color={useColorModeValue("white.400", "black.500")}
					>
						Credential ID: {data.certificateID}
					</Text>
				</StackItem>
			</Stack>
		</WrapItem>
	);
};

export default CertificateCard;
