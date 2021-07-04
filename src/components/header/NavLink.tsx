import Link from "next/link";

interface NavLinkProps {
	href: string;
	children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ children, href }) => {
	return (
		<Link href={href}>
			<li className="font-heading text-sm md:text-base font-bold text-black hover:text-blue cursor-pointer">
				{children}
			</li>
		</Link>
	);
};

export default NavLink;
