import { useColorMode } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar";

const Index: React.FC = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<>
			<Head>
				<title>Zeyad Omran - Developer</title>
			</Head>
			<main>
				<Navbar />
				My website
				<button onClick={() => toggleColorMode()}>
					<img src={`/images/favicon/favicon-${colorMode}-32x32.png`} />
				</button>
			</main>
		</>
	);
};

export default Index;
