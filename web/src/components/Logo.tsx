import { Box, useColorMode, Text, Flex, Icon } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import LogoDark from "../resources/logo/logo-dark.svg";
import LogoLight from "../resources/logo/logo-light.svg";

const Logo: React.FC = (props) => {
	const { colorMode } = useColorMode();
	return (
		<Box as={Link} href="/" {...props}>
			<Flex align="center" cursor="pointer">
				{colorMode === "light" ? (
					<Icon
						w={["35px", "40px", "45px", "50px"]}
						h={["35px", "40px", "45px", "50px"]}
						as={LogoLight}
					/>
				) : (
					<Icon
						w={["35px", "40px", "45px", "50px"]}
						h={["35px", "40px", "45px", "50px"]}
						as={LogoDark}
					/>
				)}
				<Text
					fontFamily="Poppins"
					fontSize={["lg", "xl", "2xl", "3xl"]}
					fontWeight="Bold"
					ml={3}
				>
					Zeyad Omran
				</Text>
			</Flex>
		</Box>
	);
};

export default Logo;
