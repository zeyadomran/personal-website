import React from "react";
import Container from "../components/Container";
import Details from "../components/details/Details";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";

const Index: React.FC = () => {
	return (
		<Container>
			<Header />
			<Hero />
			<Details />
			<Hero />
			<Footer />
		</Container>
	);
};

export default Index;
