import { NextPage } from "next";
import { promises as fs } from "fs";
import path from "path";
import React from "react";
import Container from "../components/Container";
import Details from "../components/details/Details";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Projects, { Project } from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import Alert from "../components/Alert";

interface IndexProps {
	data: Project[];
}

const Index: NextPage<IndexProps> = ({ data }) => {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<Container>
			<Header />
			<Alert isOpen={isOpen} setIsOpen={setIsOpen} />
			<Hero />
			<Details />
			<Projects projects={data} />
			<Contact setIsOpen={setIsOpen} />
			<Footer />
		</Container>
	);
};

export async function getStaticProps() {
	const data = await fs.readFile(
		path.join(process.cwd(), "data/projects.json"),
		"utf8"
	);
	return {
		props: {
			data: await Promise.all(JSON.parse(data)),
		},
	};
}

export default Index;
