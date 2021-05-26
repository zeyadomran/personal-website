import {
	Box,
	Container,
	Stack,
	useColorModeValue,
	Text,
	Icon,
} from "@chakra-ui/react";
import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import Logo from "./Logo";
import NavItem from "./NavItem";
import SocialButton from "./SocialButton";

const Footer: React.FC = () => {
	return (
		<Box
			as="footer"
			bg={useColorModeValue("gray.50", "gray.900")}
			color={useColorModeValue("gray.700", "gray.200")}
			position="absolute"
			bottom={0}
			width="100%"
		>
			<Container
				as={Stack}
				maxW={"6xl"}
				py={4}
				spacing={4}
				justify={"center"}
				align={"center"}
			>
				<Logo />
				<Stack direction={"row"} spacing={6}>
					<NavItem to={"/"}>Home</NavItem>
					<NavItem to={"/about"}>About</NavItem>
					<NavItem to={"/projects"}>Projects</NavItem>
					<NavItem to={"/contact"}>Contact</NavItem>
				</Stack>
			</Container>

			<Box
				borderTopWidth={1}
				borderStyle={"solid"}
				borderColor={useColorModeValue("gray.200", "gray.700")}
			>
				<Container
					as={Stack}
					maxW={"6xl"}
					py={4}
					direction={{ base: "column", md: "row" }}
					spacing={4}
					justify={{ base: "center", md: "space-between" }}
					align={{ base: "center", md: "center" }}
				>
					<Text>© 2021 Zeyad Omran. All rights reserved</Text>
					<Stack direction={"row"} spacing={6}>
						<SocialButton
							label={"Github"}
							href={"https://github.com/zeyadomran"}
						>
							<Icon as={FaGithub} />
						</SocialButton>
						<SocialButton
							label={"LinkedIn"}
							href={"https://www.linkedin.com/in/zeyadomran/"}
						>
							<Icon as={FaLinkedin} />
						</SocialButton>
						<SocialButton
							label={"Instagram"}
							href={"https://www.instagram.com/zeyadomran/"}
						>
							<Icon as={FaInstagram} />
						</SocialButton>
					</Stack>
				</Container>
			</Box>
		</Box>
	);
};

export default Footer;
