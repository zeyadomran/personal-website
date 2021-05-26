import { mode, Styles } from "@chakra-ui/theme-tools";

export const styles: Styles = {
	global: (props: any) => ({
		html: {
			height: "100%",
		},
		body: {
			minHeight: "100%",
			color: mode("black.800", "white.100")(props),
			bg: mode("white.200", "black.700")(props),
			lineHeight: "base",
			display: "flex",
			flexDirection: "column",
		},
	}),
};
