import React from "react";
import Container from "../components/Container";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";

const Index: React.FC = () => {
	return (
		<Container>
			<Header />
			<Hero />
			<Footer />
		</Container>
	);
};

export default Index;
