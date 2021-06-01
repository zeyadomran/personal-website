import { Flex, Heading, Icon } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import LogoDark from "../resources/logo/logo-dark.svg";
import UnderlineText from "./UnderlineText";

interface LogoProps {
	hideText: boolean;
}

const Logo: React.FC<LogoProps> = ({ hideText = true }) => {
	return (
		<Link href="/">
			<Flex align="center" cursor="pointer">
				<Icon
					w={["35px", "40px", "45px", "50px"]}
					h={["35px", "40px", "45px", "50px"]}
					as={LogoDark}
				/>
				<Heading
					as="h1"
					fontFamily="Poppins"
					size={"lg"}
					fontWeight="Bold"
					ml={3}
					position="relative"
					zIndex={10}
					display={{ base: `${!hideText ? "block" : "none"}`, md: "block" }}
				>
					<UnderlineText>Zeyad</UnderlineText> Omran
				</Heading>
			</Flex>
		</Link>
	);
};

export default Logo;
