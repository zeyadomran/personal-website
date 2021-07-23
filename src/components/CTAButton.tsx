import React from "react";

interface CTAButtonProps {
	href: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ children, href }) => {
	return (
		<a href={href} target={"_blank"}>
			<button className="font-body text-xl text-white rounded py-2 px-4 border-blue hover:border-blue-800 border-2 bg-blue hover:bg-blue-800 transition duration-300 ease-in-out">
				{children}
			</button>
		</a>
	);
};

export default CTAButton;
