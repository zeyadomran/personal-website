import Link from "next/link";

interface NavLinkProps {
	href: string;
	children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ children, href }) => {
	return (
		<Link href={href}>
			<li className="font-body text-base text-black hover:text-blue cursor-pointer">
				<a>{children}</a>
			</li>
		</Link>
	);
};

export default NavLink;
