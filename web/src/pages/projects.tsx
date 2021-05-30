import { Heading } from "@chakra-ui/layout";
import Head from "next/head";
import React from "react";
import Card from "../components/Card";
import CardContainer from "../components/CardContainer";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import UnderlineText from "../components/UnderlineText";
import { useProjectsQuery } from "../generated/graphql";

const Projects: React.FC = () => {
	const { data } = useProjectsQuery();

	if (!data) {
		return null;
	}

	const { projects } = data;

	return (
		<>
			<Head>
				<title>Zeyad Omran - Projects</title>
			</Head>
			<Main>
				<Navbar />
				<Container>
					<Heading as="h1" fontSize={{ base: "6xl", md: "8xl" }} mb={20}>
						<UnderlineText>Projects</UnderlineText>
					</Heading>
					<CardContainer>
						{projects.map((project) => (
							<Card key={project.id} data={project} />
						))}
					</CardContainer>
				</Container>
				<Footer />
			</Main>
		</>
	);
};

export default Projects;
