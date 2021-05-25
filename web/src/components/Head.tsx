import { Head as NextHead } from "next/document";

const Head = () => {
	return (
		<NextHead>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/images/favicon/favicon-light-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/images/favicon/favicon-light-16x16.png"
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
