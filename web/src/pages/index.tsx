import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
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
			</Head>
			<main
				style={{
					display: "flex",
					minHeight: "100vh",
					flexDirection: "column",
				}}
			>
				<Navbar />
				<Hero style={{ flex: 1 }} />
				<Footer />
			</main>
		</>
	);
};

export default Index;
