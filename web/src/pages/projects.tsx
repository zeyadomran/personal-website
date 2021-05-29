import { List, Text, ListItem, Link } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import { useProjectsQuery } from "../generated/graphql";

const Projects: React.FC = () => {
	const { data } = useProjectsQuery({
		notifyOnNetworkStatusChange: true,
	});

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
				<List my={20} py={{ base: 24, md: 32 }} textAlign={"center"}>
					{projects.map((project: any) => (
						<ListItem key={project.id}>
							<Text>{project.title}</Text>
							<Text>{project.description}</Text>
							<Text>{project.technologies}</Text>
							<Text>{project.completionDate}</Text>
							<Link href={project.url} isExternal>
								Link
							</Link>
						</ListItem>
					))}
				</List>
				<Footer />
			</Main>
		</>
	);
};

export default Projects;
