import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import React from "react";
import Meta from "../components/Meta";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Meta />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
