import React from "react";
import CTAButton from "../CTAButton";
import Link from "next/link";

const HeroContent: React.FC = () => {
	return (
		<div className="flex flex-col items-center break-words w-full md:w-3/4">
			<h1 className="text-center font-heading text-4xl md:text-7xl mb-2 text-black font-bold">
				Hi, I'm Zeyad Omran
			</h1>
			<h2 className="text-center font-body text-md md:text-xl mb-4 text-gray-500">
				A Full Stack Developer & Computer Science Student.
			</h2>
			<CTAButton href="/contact">Contact Me</CTAButton>
			<Link href="/about">
				<a className="font-body text-blue-800 hover:text-blue text-base underline mt-2 transition-all duration-200 ease-in-out">
					About Me
				</a>
			</Link>
		</div>
	);
};

export default HeroContent;
