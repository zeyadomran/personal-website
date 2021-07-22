import React from "react";
import CopyrightFooter from "./CopyrightFooter";
import FooterContainer from "./FooterContainer";
import SocialFooter from "./SocialFooter";

const Footer: React.FC = () => {
	return (
		<FooterContainer>
			<CopyrightFooter />
			<SocialFooter />
		</FooterContainer>
	);
};

export default Footer;
