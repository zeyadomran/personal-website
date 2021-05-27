import { FaMoon, FaSun } from "react-icons/fa";
import { Icon, useColorMode, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const ColorModeSwitch: React.FC<any> = (props) => {
	const { toggleColorMode } = useColorMode();
	return (
		<Icon
			onClick={() => toggleColorMode()}
			cursor="pointer"
			w="20px"
			h="20px"
			as={useColorModeValue(FaMoon, FaSun)}
			{...props}
		/>
	);
};

export default ColorModeSwitch;
