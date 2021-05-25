import { ColorMode, extendTheme } from "@chakra-ui/react";
import { createBreakpoints, mode } from "@chakra-ui/theme-tools";

interface ChakraConfig {
	initialColorMode: ColorMode;
	useSystemColorMode: boolean;
}

const config: ChakraConfig = {
	initialColorMode: "dark",
	useSystemColorMode: false,
};

const fonts = { sans: "'Poppins', 'Roboto'" };

const breakpoints = createBreakpoints({
	sm: "40em",
	md: "52em",
	lg: "64em",
	xl: "80em",
});

const colors = {
	white: "#fafafa",
	black: "#1e1e1e",
	navy: "#022340",
	blue: "#07598C",
	green: "#027368",
	cyan: "#A7D9D4",
	red: "#F2360C",
};

const styles = {
	global: (props: any) => ({
		body: {
			fontFamily: "body",
			color: mode("black", "white")(props),
			bg: mode("white", "black")(props),
			lineHeight: "base",
		},
	}),
};

const theme = extendTheme({
	colors,
	styles,
	fonts,
	breakpoints,
	config,
});

export default theme;
