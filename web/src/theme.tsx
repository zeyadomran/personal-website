import { ColorMode, extendTheme } from "@chakra-ui/react";
import { colors } from "./theme/colors";
import { styles } from "./theme/styles";
import { breakpoints } from "./theme/breakpoints";

interface ChakraConfig {
	initialColorMode: ColorMode;
	useSystemColorMode: boolean;
}

const config: ChakraConfig = {
	initialColorMode: "light",
	useSystemColorMode: false,
};

const fonts = {
	heading: "Poppins, sans-serif",
	body: "Roboto, sans-serif",
};

const theme = extendTheme({
	colors,
	styles,
	fonts,
	breakpoints,
	config,
});

export default theme;
