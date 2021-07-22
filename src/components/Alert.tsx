import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

interface AlertProps {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}

const Alert: React.FC<AlertProps> = ({ isOpen, setIsOpen }) => {
	React.useEffect(() => {
		const timeId = setTimeout(() => {
			setIsOpen(false);
		}, 5000);
		return () => clearTimeout(timeId);
	}, [isOpen]);
	return (
		<div
			className={`${
				isOpen ? "opacity-100 scale-100" : "opacity-0 scale-50"
			} flex items-center space-x-4 fixed rounded-lg top-20 md:right-20 min-h-16 p-4 z-50 bg-green-500 transition duration-300 ease-in-out`}
		>
			<AiFillCheckCircle className="w-8 h-8 text-green-700" />
			<h4 className="text-white font-body text-base md:text-xl">
				Success, your message has been sent!
			</h4>
		</div>
	);
};

export default Alert;
