import React from "react";
import HeroContent from "./HeroContent";
import { FaChevronDown } from "react-icons/fa";

const Hero: React.FC = () => {
	return (
		<section
			id="hero"
			className="relative flex flex-col items-center justify-center px-12 h-screen bg-white"
		>
			<HeroContent />
			<div
				onClick={() =>
					document
						.getElementById("about")
						?.scrollIntoView({ behavior: "smooth" })
				}
				className="absolute bottom-32 flex flex-col items-center cursor-pointer"
			>
				<p className="text-black text-lg font-bold font-heading mb-1">
					Scroll Down
				</p>
				<FaChevronDown className="text-black w-7 h-7 motion-safe:animate-bounce" />
			</div>
		</section>
	);
};

export default Hero;
