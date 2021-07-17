import React from "react";
import { Link } from "react-scroll";
import useAnimate from "../../hooks/useAnimate";

const HeroContent: React.FC = () => {
	const ref = React.useRef(null);
	useAnimate(ref, "motion-safe:animate-fadeIn");
	return (
		<div
			ref={ref}
			className="flex flex-col items-center break-words w-full md:w-3/4"
		>
			<h1 className="text-center font-heading text-4xl md:text-7xl mb-2 text-black font-bold">
				Hi, I'm Zeyad Omran
			</h1>
			<h2 className="text-center font-body text-md md:text-xl mb-4 text-gray-500">
				A Full Stack Developer & Computer Science Student.
			</h2>
			<Link
				to="contact"
				smooth="easeInOutQuart"
				duration={100}
				ignoreCancelEvents={false}
			>
				<button className="font-body text-xl text-white rounded py-2 px-4 border-blue hover:border-blue-800 border-2 bg-blue hover:bg-blue-800 transition-all duration-200 ease-in-out">
					Contact Me
				</button>
			</Link>
			<Link
				to="about"
				smooth="easeInOutQuart"
				duration={100}
				ignoreCancelEvents={false}
			>
				<button className="font-body text-blue-800 hover:text-blue text-base underline mt-2 transition-all duration-200 ease-in-out">
					About Me
				</button>
			</Link>
		</div>
	);
};

export default HeroContent;
