import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-scroll";
import HeroContent from "./HeroContent";

const Hero: React.FC = () => {
	return (
		<section
			id="hero"
			className="relative flex flex-col items-center justify-center px-12 h-screen w-screen"
		>
			<HeroContent />
			<div className="absolute bottom-32 flex flex-col items-center cursor-pointer">
				<Link
					className="flex flex-col items-center"
					to="about"
					smooth="easeInOutQuart"
					duration={100}
					ignoreCancelEvents={false}
				>
					<p className="text-black text-lg font-medium font-heading mb-1">
						Scroll Down
					</p>
					<FaChevronDown className="text-black w-7 h-7 motion-safe:animate-bounce" />
				</Link>
			</div>
		</section>
	);
};

export default Hero;
