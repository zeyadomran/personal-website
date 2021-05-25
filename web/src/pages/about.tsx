import { useColorMode } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const About: React.FC = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<main>
			<Navbar />
			About
			<button onClick={() => toggleColorMode()}>
				<img src={`/images/favicon/favicon-${colorMode}-32x32.png`} />
			</button>
		</main>
	);
};

export default About;
