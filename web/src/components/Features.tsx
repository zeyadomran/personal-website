import {
	Container,
	SimpleGrid,
	Image,
	Flex,
	Heading,
	Text,
	Stack,
	Icon,
	useColorModeValue,
} from "@chakra-ui/react";
import {
	IoBulbSharp,
	IoCheckmarkDoneSharp,
	IoPeopleSharp,
} from "react-icons/io5";
import React, { ReactElement } from "react";

interface FeatureProps {
	text: string;
	iconBg: string;
	icon?: ReactElement;
}

const Feature: React.FC<FeatureProps> = ({ text, icon, iconBg }) => {
	return (
		<Stack direction={"row"} align={"center"}>
			<Flex
				w={8}
				h={8}
				align={"center"}
				justify={"center"}
				rounded={"full"}
				bg={iconBg}
			>
				{icon}
			</Flex>
			<Text fontWeight={600}>{text}</Text>
		</Stack>
	);
};

export default function SplitWithImage() {
	return (
		<Container maxW={"5xl"} py={6}>
			<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
				<Stack spacing={4}>
					<Text
						textTransform={"uppercase"}
						color={useColorModeValue("blue.900", "blue.100")}
						fontWeight={600}
						fontSize={"sm"}
						bg={useColorModeValue("blue.200", "blue.800")}
						p={2}
						alignSelf={"flex-start"}
						rounded={"md"}
					>
						Who am i?
					</Text>
					<Heading>A full stack developer</Heading>
					<Text color={"gray.500"} fontSize={"lg"}>
						I am a 3rd year student at the University of Calgary, with a passion
						for Human-Computer Interaction.
					</Text>
					<Stack spacing={4}>
						<Feature
							icon={
								<Icon
									as={IoBulbSharp}
									color={useColorModeValue("blue.800", "blue.100")}
									w={5}
									h={5}
								/>
							}
							iconBg={useColorModeValue("blue.100", "blue.800")}
							text={"Creative Thinker"}
						/>
						<Feature
							icon={
								<Icon
									as={IoCheckmarkDoneSharp}
									color={useColorModeValue("green.800", "green.400")}
									w={5}
									h={5}
								/>
							}
							iconBg={useColorModeValue("green.400", "green.800")}
							text={"Organized"}
						/>
						<Feature
							icon={
								<Icon
									as={IoPeopleSharp}
									color={useColorModeValue("purple.800", "purple.100")}
									w={5}
									h={5}
								/>
							}
							iconBg={useColorModeValue("purple.100", "purple.800")}
							text={"Leader"}
						/>
					</Stack>
				</Stack>
				<Flex>
					<Image
						rounded={"md"}
						alt={"feature image"}
						src={"/images/illustrations/04Illustration.png"}
					/>
				</Flex>
			</SimpleGrid>
		</Container>
	);
}
