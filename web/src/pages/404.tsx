import Head from "next/head";
import React from "react";
import Error404 from "../components/Error404";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

const Custom404: React.FC = () => {
	return (
		<>
			<Head>
				<title>Zeyad Omran - 404 Page Not Found</title>
			</Head>
			<Main>
				<Navbar />
				<Error404 />
				<Footer position="absolute" bottom={0} />
			</Main>
		</>
	);
};

export default Custom404;
