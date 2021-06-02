import Head from "next/head";
import { useRouter } from "next/router";

const Meta: React.FC = () => (
	<Head>
		<meta charSet="UTF-8" />
		<meta name="author" content="Zeyad Omran" />
		<meta
			name="keywords"
			content="Student, uofc, University of Calgary, full stack, developer, UI/UX, UI, UX, Human Computer Interaction"
		/>
		<meta
			name="description"
			content="I am a 3rd year student at the University of Calgary and a passionate full stack developer."
		/>
		<meta property="og:title" content="Zeyad Omran" />
		<meta
			property="og:description"
			content="I am a 3rd year student at the University of Calgary and a passionate full stack developer."
		/>
		<meta property="og:image" content="/images/favicon/mstile-310x310.png" />
		<meta name="twitter:card" content="/images/favicon/mstile-310x310.png" />
		<meta property="og:url" content="https://zeyadomran.com/" />
		<meta property="og:site_name" content="Zeyad Omran" />
		<meta name="twitter:image:alt" content="Zeyad Omran Logo" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta name="msapplication-TileColor" content="#2d89ef" />
		<meta name="theme-color" content="#ededed" />
		<link
			rel="canonical"
			href={`https://zeyadomran.com/${useRouter().pathname}`}
		/>
	</Head>
);

export default Meta;
