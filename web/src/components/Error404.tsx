import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

const Error404: React.FC<any> = (props) => {
	return (
		<Container maxW={"3xl"} {...props}>
			<Stack
				as={Box}
				textAlign={"center"}
				spacing={{ base: 4, md: 7 }}
				py={{ base: 20, md: 36 }}
			>
				<Heading
					fontWeight={"bold"}
					fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
					fontFamily={"Poppins"}
					lineHeight={"110%"}
				>
					Page Not Found! <br />
					<Text as={"span"} color={"blue.400"}>
						404
					</Text>
				</Heading>
				<Stack
					direction={"column"}
					spacing={3}
					align={"center"}
					alignSelf={"center"}
					position={"relative"}
				>
					<NextLink href="/">
						<Button
							colorScheme={"blue"}
							bg={"blue.400"}
							rounded={"lg"}
							color={"white.100"}
							px={6}
							_hover={{
								bg: "blue.500",
							}}
						>
							Go to Home
						</Button>
					</NextLink>
					<NextLink href="/about">
						<Button variant={"link"} colorScheme={"navy"} size={"sm"}>
							About Me
						</Button>
					</NextLink>
				</Stack>
			</Stack>
		</Container>
	);
};

export default Error404;
