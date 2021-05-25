import { useColorMode, Flex, Icon, Box, Heading } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import LogoDark from "../resources/logo/logo-dark.svg";
import LogoLight from "../resources/logo/logo-light.svg";

const Logo: React.FC = (props) => {
	const { colorMode } = useColorMode();
	const isDark = colorMode === "dark";
	return (
		<Link href="/">
			<Flex align="center" cursor="pointer" {...props}>
				<Icon
					w={["35px", "40px", "45px", "50px"]}
					h={["35px", "40px", "45px", "50px"]}
					as={!isDark ? LogoLight : LogoDark}
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
							background: `${isDark ? "cyan.500" : "cyan.100"}`,
							zIndex: -1,
							transition: "width 0.5s",
						}}
						color={`${isDark ? "cyan.100" : "cyan.500"}`}
						_hover={{ _after: { width: "100%" } }}
						as="span"
					>
						Zeyad{" "}
						<Box as="span" color={isDark ? "white.100" : "black.800"}>
							Omran
						</Box>
					</Box>
				</Heading>
			</Flex>
		</Link>
	);
};

export default Logo;
