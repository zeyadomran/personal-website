import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { Router } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import React from "react";
import Meta from "../components/Meta";
import theme from "../theme";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
	Router.events.on("routeChangeStart", () => NProgress.start());
	Router.events.on("routeChangeComplete", () => NProgress.done());
	Router.events.on("routeChangeError", () => NProgress.done());

	return (
		<>
			<Meta />
			<ChakraProvider resetCSS theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</>
	);
};

export default App;
