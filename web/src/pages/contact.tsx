import { Flex, Heading, Stack } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import UnderlineText from "../components/UnderlineText";
import { withApollo } from "../utils/withApollo";

const Contact: React.FC = () => {
	return (
		<>
			<Head>
				<title>Zeyad Omran - Contact</title>
				<meta property="og:title" content="Zeyad Omran - Contact" />
			</Head>
			<Main>
				<Navbar />
				<Flex my={8} w={"full"}>
					<Stack
						align="center"
						w={["95%", "90%", "85%", "80%"]}
						mx="auto"
						py={{ base: 20, md: 36 }}
						spacing={10}
					>
						<Heading as="h1" fontSize={{ base: "5xl", md: "8xl" }}>
							<UnderlineText>Contact Me</UnderlineText>
						</Heading>
						<ContactForm />
					</Stack>
				</Flex>
				<Footer />
			</Main>
		</>
	);
};

export default withApollo({ ssr: false })(Contact);
