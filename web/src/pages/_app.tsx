import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import theme from "../theme";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="author" content="Zeyad Omran" />
				<meta
					name="keywords"
					content="Student, uofc, University of Calgary, full stack, developer, UI/UX, UI, UX, Human Computer Interaction"
				/>
				<meta
					name="description"
					content="I am a 3rd year student at the University of Calgary and a passionate full stack developer."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="msapplication-TileColor" content="#2d89ef" />
				<meta name="theme-color" content="#ededed" />
			</Head>
			<ChakraProvider resetCSS theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</>
	);
};

export default App;
