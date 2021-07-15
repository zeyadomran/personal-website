interface NavLinkProps {
	href: string;
	children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ children, href }) => {
	return (
		<li className="font-body text-base text-black hover:text-blue cursor-pointer">
			<button
				onClick={() =>
					document.getElementById(href)?.scrollIntoView({ behavior: "smooth" })
				}
			>
				{children}
			</button>
		</li>
	);
};

export default NavLink;
