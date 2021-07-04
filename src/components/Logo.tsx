import LogoSVG from "../resources/logo.svg";
import Link from "next/link";

const Logo: React.FC = () => {
	return (
		<Link href="/">
			<div className="w-10 md:w-14 h-10 md:h-14 cursor-pointer">
				<LogoSVG />
			</div>
		</Link>
	);
};

export default Logo;
