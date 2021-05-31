import { Head as NextHead } from "next/document";

const Head = () => {
	return (
		<NextHead>
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="images/favicon/apple-touch-icon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="images/favicon/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="images/favicon/favicon-16x16.png"
			/>
			<link rel="manifest" href="images/favicon/site.webmanifest" />
			<link
				rel="mask-icon"
				href="images/favicon/safari-pinned-tab.svg"
				color="#1fa2f4"
			/>

			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Roboto&display=swap"
				rel="stylesheet"
			/>
		</NextHead>
	);
};

export default Head;
