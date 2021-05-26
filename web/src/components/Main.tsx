import { Box } from "@chakra-ui/react";
import React from "react";

const Main: React.FC = ({ children, ...props }) => {
	return (
		<Box as="main" flex="1 0 auto" {...props}>
			{children}
		</Box>
	);
};

export default Main;
