import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import SocialButton from "../Social/SocialButton";

const SocialFooter: React.FC = () => {
	return (
		<div className="flex space-x-6">
			<SocialButton
				label="Instagram"
				href="https://www.instagram.com/zeyadomran/"
			>
				<FaInstagram className="w-6 h-6" />
			</SocialButton>
			<SocialButton label="Github" href="https://github.com/zeyadomran">
				<FaGithub className="w-6 h-6" />
			</SocialButton>
			<SocialButton
				label="LinkedIn"
				href="https://www.linkedin.com/in/zeyadomran/"
			>
				<FaLinkedin className="w-6 h-6" />
			</SocialButton>
		</div>
	);
};

export default SocialFooter;
