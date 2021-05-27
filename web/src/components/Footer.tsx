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
import SocialButton from "./SocialButton";

const Footer: React.FC<any> = (props) => {
	return (
		<Box
			as="footer"
			css={{
				backdropFilter: "saturate(180%) blur(5px)",
				backgroundColor: useColorModeValue(
					"rgba(250, 250, 250, 0.8)",
					"rgba(30, 30, 30, 0.8)"
				),
			}}
			color={useColorModeValue("gray.700", "gray.200")}
			shadow="sm"
			flexShrink={0}
			{...props}
		>
			<Container
				as={Stack}
				maxW={"7xl"}
				py={4}
				direction={{ base: "column", md: "row" }}
				spacing={4}
				justify={{ base: "center", md: "space-between" }}
				align={{ base: "center", md: "center" }}
			>
				<Logo />
				<Text>
					© {new Date().getFullYear()} Zeyad Omran. All rights reserved
				</Text>
				<Stack direction={"row"} spacing={6}>
					<SocialButton label={"Github"} href={"https://github.com/zeyadomran"}>
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
	);
};

export default Footer;
