import { Switch, useColorMode } from "@chakra-ui/react";
import React from "react";

const ColorModeSwitch: React.FC<any> = (props) => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Switch
			colorScheme="green"
			size="md"
			px={2}
			isChecked={colorMode === "dark"}
			onChange={() => toggleColorMode()}
			{...props}
		/>
	);
};

export default ColorModeSwitch;
