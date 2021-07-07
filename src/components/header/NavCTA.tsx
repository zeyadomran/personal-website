import { CgArrowLongDown } from "react-icons/cg";

const NavCTA: React.FC = ({ children }) => {
	return (
		<li>
			<button className="group flex items-center font-body text-base text-blue hover:text-white rounded py-2 px-4 border-blue active:border-blue-800 border-2 bg-transparent hover:bg-blue active:bg-blue-800 transition-all duration-200 ease-in-out">
				{children}
				<CgArrowLongDown className="text-blue group-hover:text-white transition-all duration-200 ease-in-out" />
			</button>
		</li>
	);
};

export default NavCTA;
