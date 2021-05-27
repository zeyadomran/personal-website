import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const UnderlineText: React.FC = ({ children }) => {
	return (
		<Box
			as={"span"}
			color={useColorModeValue("navy.300", "navy.100")}
			position={"relative"}
			zIndex={10}
			_after={{
				content: '""',
				position: "absolute",
				left: 0,
				bottom: 1,
				w: "full",
				h: "30%",
				bg: useColorModeValue("blue.100", "blue.900"),
				zIndex: -1,
			}}
		>
			{children}
		</Box>
	);
};

export default UnderlineText;
