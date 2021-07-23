import { CgArrowLongDown } from "react-icons/cg";
const NavCTA: React.FC = ({ children }) => {
	return (
		<li>
			<button className="">
				<a
					href="https://zeyadomran.com/Zeyad_Omran_CV.pdf"
					target="_blank"
					className="group flex items-center font-body text-base font-medium text-blue hover:text-white rounded py-2 px-4 border-blue active:border-blue-800 border-2 bg-transparent hover:bg-blue active:bg-blue-800 transition-all duration-300 ease-in-out"
				>
					{children}
					<CgArrowLongDown className="text-blue group-hover:text-white transition-all duration-200 ease-in-out" />
				</a>
			</button>
		</li>
	);
};

export default NavCTA;
