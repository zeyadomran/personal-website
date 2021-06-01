import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Router from "next/router";
import Head from "next/head";
import React from "react";
import theme from "../theme";
import Loading from "../components/Loading";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
	const [loading, setLoading] = React.useState(false);
	React.useEffect(() => {
		const start = () => {
			setLoading(true);
		};
		const end = () => {
			setLoading(false);
		};
		Router.events.on("routeChangeStart", start);
		Router.events.on("routeChangeComplete", end);
		Router.events.on("routeChangeError", end);
		return () => {
			Router.events.off("routeChangeStart", start);
			Router.events.off("routeChangeComplete", end);
			Router.events.off("routeChangeError", end);
		};
	}, []);
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
				{loading ? <Loading /> : <Component {...pageProps} />}
			</ChakraProvider>
		</>
	);
};

export default App;
