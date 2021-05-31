import { Center, Heading } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import CardContainer from "../components/CardContainer";
import CertificateCard from "../components/CertificateCard";
import Container from "../components/Container";
import EducationCard from "../components/EducationCard";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import UnderlineText from "../components/UnderlineText";
import { useCertificatesQuery } from "../generated/graphql";
import { withApollo } from "../utils/withApollo";

const About: React.FC = () => {
	const { data } = useCertificatesQuery();

	if (!data) {
		return null;
	}

	const { certificates } = data;

	return (
		<>
			<Head>
				<title>Zeyad Omran - About</title>
			</Head>
			<Main>
				<Navbar />
				<Container>
					<Heading as="h1" fontSize={{ base: "6xl", md: "8xl" }}>
						<UnderlineText>Education</UnderlineText>
					</Heading>
					<Center mb={20}>
						<EducationCard
							data={{
								school: "University of Calgary",
								duration: "2019 - 2023",
								degree:
									"B.Sc Computer Science with a concentration on Human-Computer Interaction",
							}}
						/>
					</Center>
					<Heading as="h1" fontSize={{ base: "6xl", md: "8xl" }} mb={20}>
						<UnderlineText>Credentials</UnderlineText>
					</Heading>
					<CardContainer>
						{certificates.map((certificate) => (
							<CertificateCard key={certificate.id} data={certificate} />
						))}
					</CardContainer>
				</Container>
				<Footer />
			</Main>
		</>
	);
};

export default withApollo({ ssr: true })(About);
