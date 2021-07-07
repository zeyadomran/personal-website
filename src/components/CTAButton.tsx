import React from "react";
import Link from "next/link";

interface CTAButtonProps {
	href: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ children, href }) => {
	return (
		<Link href={href}>
			<button className="font-body text-xl text-white rounded py-2 md:py-3 px-4 md:px-6 border-blue hover:border-blue-800 border-2 bg-blue hover:bg-blue-800 transition-all duration-200 ease-in-out">
				{children}
			</button>
		</Link>
	);
};

export default CTAButton;
