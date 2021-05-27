import {
	Button,
	Container,
	Flex,
	Heading,
	Icon,
	Text,
	Stack,
	useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import React from "react";
import Logo from "../resources/logo/logo-dark.svg";

const Custom500: React.FC = () => {
	return (
		<>
			<Head>
				<title>Zeyad Omran - 404 Page Not Found</title>
			</Head>
			<Flex align={"center"} justify={"center"} h={"100vh"} w={"full"}>
				<Stack
					as={Container}
					bg={useColorModeValue("gray.50", "gray.900")}
					rounded={"xl"}
					p={8}
					spacing={6}
					maxW={"lg"}
					align={"center"}
					textAlign={"center"}
				>
					<Icon
						as={Logo}
						w={["35px", "40px", "45px", "50px"]}
						h={["35px", "40px", "45px", "50px"]}
					/>
					<Stack spacing={2}>
						<Heading>An Error Occurred</Heading>
						<Text>Please try again later!</Text>
					</Stack>
					<Flex>
						<NextLink href={"/"} passHref>
							<Button
								as={"a"}
								colorScheme={"blue"}
								rounded={"lg"}
								bg={"blue.400"}
								color={"white.100"}
								_hover={{ bg: "blue.700" }}
							>
								Take me home
							</Button>
						</NextLink>
					</Flex>
				</Stack>
			</Flex>
		</>
	);
};

export default Custom500;
