import React from "react";
import { Link } from "react-scroll";

const HeroContent: React.FC = () => {
	return (
		<div className="flex flex-col items-center break-words w-full z-10 motion-safe:animate-fadeIn">
			<h1 className="text-center font-heading text-4xl md:text-7xl mb-1 md:mb-2 text-black font-bold">
				Zeyad Omran
			</h1>
			<h2 className="text-center font-body font-medium text-md md:text-xl mb-4 md:mb-8 text-black">
				Software Engineer & Computer Science Student
			</h2>
			<Link
				to="contact"
				smooth="easeInOutQuart"
				duration={100}
				ignoreCancelEvents={false}
			>
				<button className="font-body text-xl text-white rounded py-2 px-4 border-blue hover:border-blue-800 border-2 bg-blue hover:bg-blue-800 transition-all duration-300 ease-in-out">
					Contact Me
				</button>
			</Link>
			<Link
				to="about"
				smooth="easeInOutQuart"
				duration={100}
				ignoreCancelEvents={false}
			>
				<button className="font-body text-black hover:text-blue text-base font-medium underline mt-2 transition-all duration-200 ease-in-out">
					About Me
				</button>
			</Link>
		</div>
	);
};

export default HeroContent;
