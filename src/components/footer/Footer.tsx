import React from "react";
import Logo from "../Logo";
import CopyrightFooter from "./CopyrightFooter";
import FooterContainer from "./FooterContainer";
import SocialFooter from "./SocialFooter";

const Footer: React.FC = () => {
	return (
		<FooterContainer>
			<Logo />
			<CopyrightFooter />
			<SocialFooter />
		</FooterContainer>
	);
};

export default Footer;
