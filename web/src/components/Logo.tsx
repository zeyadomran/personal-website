import { Flex, Icon, Heading } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import LogoDark from "../resources/logo/logo-dark.svg";
import UnderlineText from "./UnderlineText";

const Logo: React.FC = (props) => {
	return (
		<Link href="/">
			<Flex align="center" cursor="pointer" {...props}>
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
					display={{ base: "none", md: "block" }}
				>
					<UnderlineText>Zeyad</UnderlineText> Omran
				</Heading>
			</Flex>
		</Link>
	);
};

export default Logo;
