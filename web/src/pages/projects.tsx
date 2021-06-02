import { Heading } from "@chakra-ui/layout";
import Head from "next/head";
import React from "react";
import ProjectCard from "../components/ProjectCard";
import CardContainer from "../components/CardContainer";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import UnderlineText from "../components/UnderlineText";
import { useProjectsQuery } from "../generated/graphql";
import { withApollo } from "../utils/withApollo";

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
				<meta property="og:title" content="Zeyad Omran - Projects" />
			</Head>
			<Main>
				<Navbar />
				<Container>
					<Heading as="h1" fontSize={{ base: "6xl", md: "8xl" }}>
						<UnderlineText>Projects</UnderlineText>
					</Heading>
					<CardContainer>
						{projects.map((project) => (
							<ProjectCard key={project.id} data={project} />
						))}
					</CardContainer>
				</Container>
				<Footer />
			</Main>
		</>
	);
};

export default withApollo({ ssr: true })(Projects);
