import React from "react";

interface SocialButtonProps {
	children: React.ReactNode;
	label: string;
	href: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({
	children,
	label,
	href,
}) => {
	return (
		<a
			className="inline-flex items-center justify-center w-10 h-10 hover:text-blue hover:-translate-y-1 text-white rounded-full cursor-pointer transition duration-300 ease-in-out"
			target={"_blank"}
			href={href}
		>
			<label className="hidden">{label}</label>
			{children}
		</a>
	);
};

export default SocialButton;
