import React from "react";
import { Box } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

interface MenuToggleProps {
	toggle: () => void;
	isOpen: boolean;
}

const MenuToggle: React.FC<MenuToggleProps> = ({ toggle, isOpen }) => {
	return (
		<Box
			display={{ base: "block", md: "none" }}
			onClick={toggle}
			cursor="pointer"
		>
			{isOpen ? (
				<CloseIcon h="25px" w="25px" />
			) : (
				<HamburgerIcon h="25px" w="25px" />
			)}
		</Box>
	);
};

export default MenuToggle;
