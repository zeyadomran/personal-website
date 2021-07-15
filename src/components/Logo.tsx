import LogoSVG from "../resources/logo.svg";

const Logo: React.FC = () => {
	return (
		<div
			onClick={() =>
				document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })
			}
			className="w-10 md:w-12 h-10 md:h-12 cursor-pointer"
		>
			<LogoSVG />
		</div>
	);
};

export default Logo;
