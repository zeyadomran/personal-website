import { useColorMode } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar";

const Custom404: React.FC = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<>
			<Head>
				<title>Zeyad Omran - 404 Error</title>
			</Head>
			<main>
				<Navbar />
				404, page not found
				<button onClick={() => toggleColorMode()}>
					<img src={`/images/favicon/favicon-${colorMode}-32x32.png`} />
				</button>
			</main>
		</>
	);
};

export default Custom404;
