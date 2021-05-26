import NextDocument, { Html, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import Head from "../components/Head";
import theme from "../theme";

export default class Document extends NextDocument {
	render() {
		return (
			<Html>
				<Head />
				<body>
					{/* Make Color mode to persists when you refresh the page. */}
					<ColorModeScript initialColorMode={theme.config.initialColorMode} />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}