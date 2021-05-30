import { SimpleGrid } from "@chakra-ui/react";
import React from "react";

const CardContainer: React.FC = ({ children, ...props }) => {
	return (
		<SimpleGrid columns={[1, 2, 2, 3]} spacing={5} {...props}>
			{children}
		</SimpleGrid>
	);
};

export default CardContainer;
