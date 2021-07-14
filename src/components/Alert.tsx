import React from "react";
import { AiFillCheckCircle } from "react-icons/Ai";

interface AlertProps {
	isOpen: boolean;
	setIsOpen: () => void;
}

const Alert: React.FC<AlertProps> = ({ isOpen, setIsOpen }) => {
	return (
		<div
			className={`${
				isOpen ? "block" : "hidden"
			} flex items-center justify-between fixed rounded-lg top-16 min-h-16 py-2 px-4 z-50 w-full md:w-11/12 bg-green-500`}
		>
			<AiFillCheckCircle className="w-8 h-8 text-green-700" />
			<h4 className="text-white font-body text-base md:text-xl font-bold">
				Success, your message has been sent!
			</h4>
			<button
				className="text-4xl p-1 rounded-full bg-green-500 text-white hover:text-green-700 transition-all duration-200 ease-in-out"
				onClick={setIsOpen}
			>
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
	);
};

export default Alert;
