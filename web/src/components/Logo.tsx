import { Flex, Icon, Box, Heading, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import LogoDark from "../resources/logo/logo-dark.svg";
import LogoLight from "../resources/logo/logo-light.svg";

const Logo: React.FC = (props) => {
	return (
		<Link href="/">
			<Flex align="center" cursor="pointer" {...props}>
				<Icon
					w={["35px", "40px", "45px", "50px"]}
					h={["35px", "40px", "45px", "50px"]}
					as={useColorModeValue(LogoLight, LogoDark)}
				/>
				<Heading
					as="h1"
					fontFamily="Poppins"
					size={"lg"}
					fontWeight="Bold"
					ml={3}
					position="relative"
					zIndex={10}
				>
					<Box
						_after={{
							content: '""',
							position: "absolute",
							left: 0,
							bottom: 0,
							width: "45%",
							height: "30%",
							background: `${useColorModeValue("cyan.100", "cyan.500")}`,
							zIndex: -1,
							transition: "width 0.5s",
						}}
						color={`${useColorModeValue("cyan.500", "cyan.100")}`}
						_hover={{ _after: { width: "100%" } }}
						as="span"
					>
						Zeyad{" "}
						<Box
							as="span"
							color={`${useColorModeValue("black.800", "white.100")}`}
						>
							Omran
						</Box>
					</Box>
				</Heading>
			</Flex>
		</Link>
	);
};

export default Logo;
