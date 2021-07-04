const NavCTA: React.FC = ({ children }) => {
	return (
		<li>
			<button className="font-heading text-sm md:text-base text-white md:text-black md:hover:text-white font-bold rounded p-1 md:p-2 border-blue active:border-blue-800 border-4 bg-blue md:bg-transparent md:hover:bg-blue active:bg-blue-800 transition-all duration-200">
				{children}
			</button>
		</li>
	);
};

export default NavCTA;
