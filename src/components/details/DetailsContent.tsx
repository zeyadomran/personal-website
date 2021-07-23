import React from "react";
import { BsFillLightningFill, BsLaptop, BsPencil } from "react-icons/bs";
import DetailCard from "./DetailCard";
import DetailCardContainer from "./DetailCardContainer";

const DetailsContent: React.FC = () => {
	return (
		<div className="flex flex-col items-center break-words w-full space-y-14">
			<h2 className="text-center font-heading text-2xl md:text-4xl text-white font-bold">
				A little bit about me
			</h2>
			<DetailCardContainer>
				<DetailCard
					icon={<BsFillLightningFill className="w-10 h-10 text-blue-700" />}
				>
					I'm an aspiring software engineer and talented developer with over 5
					years of programming experience. I've worked on a variety of projects
					in a few different fields such as full stack web development, desktop
					development, and low level programming with ARM64.
				</DetailCard>
				<DetailCard icon={<BsPencil className="w-10 h-10 text-blue-700" />}>
					I'm a 3rd year Computer Science student at the University of Calgary.
					Throughout my time there I've learnt a lot of the fundamentals that
					would help me succeed in my professional career and I'm actively
					applying them on my projects! I've also learnt how to work with others
					effectively and succeed while being out of my comfort zone.
				</DetailCard>
				<DetailCard icon={<BsLaptop className="w-10 h-10 text-blue-700" />}>
					I've learnt and worked with a variety of technologies and applied my
					knowledge into my current portfolio of projects. As well as working
					with various teams of people, the largest had 11 different teammates!
				</DetailCard>
			</DetailCardContainer>
		</div>
	);
};

export default DetailsContent;
