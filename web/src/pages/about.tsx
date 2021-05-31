import { useColorMode } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar";
import { withApollo } from "../utils/withApollo";

const About: React.FC = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<>
			<Head>
				<title>Zeyad Omran - About</title>
			</Head>
			<main>
				<Navbar />
				About
				<button onClick={() => toggleColorMode()}>
					<img src={`/images/favicon/favicon-${colorMode}-32x32.png`} />
				</button>
			</main>
		</>
	);
};

export default withApollo({ ssr: true })(About);
