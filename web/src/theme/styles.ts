import { mode } from "@chakra-ui/theme-tools";

export const styles = {
	global: (props: any) => ({
		body: {
			fontFamily: "body",
			color: mode("black.800", "white.100")(props),
			bg: mode("white.200", "black.700")(props),
			lineHeight: "base",
		},
	}),
};
