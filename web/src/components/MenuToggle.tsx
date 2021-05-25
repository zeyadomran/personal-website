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
				<CloseIcon w="22px" height="22px" />
			) : (
				<HamburgerIcon w="30px" height="30px" />
			)}
		</Box>
	);
};

export default MenuToggle;
