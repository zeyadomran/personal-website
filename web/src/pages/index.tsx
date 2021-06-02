import Head from "next/head";
import React from "react";
import Container from "../components/Container";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

const Index: React.FC = () => {
	return (
		<>
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
					rel="stylesheet"
				/>
				<title>Zeyad Omran - Developer</title>
				<meta property="og:title" content="Zeyad Omran - Developer" />
			</Head>
			<Main>
				<Navbar />
				<Container>
					<Hero />
					<Features />
				</Container>
				<Footer />
			</Main>
		</>
	);
};

export default Index;
