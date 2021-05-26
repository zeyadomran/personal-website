import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";

interface UnderlineTextProps {
	text1: React.ReactNode;
	text2?: string;
}

const UnderlineText: React.FC<UnderlineTextProps> = ({ text1, text2 }) => {
	return (
		<Box
			_after={{
				content: '""',
				position: "absolute",
				left: 0,
				bottom: 0.5,
				width: "45%",
				height: "30%",
				background: `${useColorModeValue("blue.100", "blue.900")}`,
				zIndex: -1,
				transition: "width 0.5s",
			}}
			color={`${useColorModeValue("navy.300", "navy.100")}`}
			_hover={{ _after: { width: "100%" } }}
			as="span"
		>
			{text1}
			{text2 ? " " : ""}
			<Box as="span" color={`${useColorModeValue("black.800", "white.100")}`}>
				{text2}
			</Box>
		</Box>
	);
};

export default UnderlineText;
