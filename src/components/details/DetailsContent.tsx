import React from "react";
import { BsFillLightningFill, BsLaptop, BsPencil } from "react-icons/bs";
import CTAButton from "../CTAButton";
import DetailCard from "./DetailCard";
import DetailCardContainer from "./DetailCardContainer";

const HeroContent: React.FC = () => {
	return (
		<div className="flex flex-col items-center break-words w-full space-y-8">
			<h2 className="text-center font-heading text-2xl md:text-4xl text-white font-bold">
				A little bit about me.
			</h2>
			<CTAButton href="/about">More Detail</CTAButton>
			<DetailCardContainer>
				<DetailCard icon={<BsPencil className="w-8 h-8 text-blue-700" />}>
					I'm studying Computer Science at the University of Calgary. I've
					learnt a lot of valuable skills such as problem solving, analyzing
					efficiency, and how to effectively work with others as well as giving
					me the opportunity to creatively solve problems.
				</DetailCard>
				<DetailCard
					icon={<BsFillLightningFill className="w-8 h-8 text-blue-700" />}
				>
					BSc. Computer Science with a concentration in Human-Computer
					Interactions student at the University of Calgary. Always looking for
					opportunities to apply my 5-years of programming experience, and
					knowledge learnt throughout my studies.
				</DetailCard>
				<DetailCard icon={<BsLaptop className="w-8 h-8 text-blue-700" />}>
					I've learnt and worked with a variety of technologies and practiced
					using best practices as much as possible. As well as working with
					various teams of people, the largest had 11 different teammates!
				</DetailCard>
			</DetailCardContainer>
		</div>
	);
};

export default HeroContent;
