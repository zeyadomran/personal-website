import Head from "next/head";

const Meta: React.FC = () => (
	<Head>
		<meta charSet="UTF-8" />
		<title>Zeyad Omran :: Software Engineer</title>
		<meta name="author" content="Zeyad Omran" />
		<meta
			name="keywords"
			content="student, uofc, university of calgary, developer, software, engineer, computer science, UI, UX, Human Computer Interaction"
		/>

		<meta
			name="description"
			content="I am a 3rd year student at the University of Calgary and a passionate full stack developer."
		/>
		<meta property="og:title" content="Zeyad Omran" />
		<meta
			property="og:description"
			content="A 3rd year computer science undergraduate student with over 5 years of programming experience with various technologies. A passionate developer & skilled leader with experience in leading small & medium sized teams from the start of a project to its completion. Proficient in multiple programming languages and familiar with various full stack technologies that aid me in building complex web applications and mentor other developers that are looking to learn new things."
		/>

		<meta property="og:url" content="https://zeyadomran.com/" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="canonical" href="https://zeyadomran.com/" />

		<meta property="og:image" content="https://zeyadomran.com/Logo_Cover.png" />
		<meta
			property="og:image:secure_url"
			content="https://zeyadomran.com/Logo_Cover.png"
		/>
		<meta property="og:image:type" content="image/png" />
		<meta property="og:image:alt" content="Zeyad Omran Cover Image" />
		<meta property="og:site_name" content="Zeyad Omran :: Software Engineer" />

		<meta name="twitter:card" content="Logo_Cover.png" />
		<meta name="twitter:image:alt" content="Zeyad Omran Logo" />

		<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
		<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
		<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
		<link rel="manifest" href="/site.webmanifest" />
		<meta name="msapplication-TileColor" content="#01001f" />
		<meta name="theme-color" content="#01001f" />
	</Head>
);

export default Meta;
