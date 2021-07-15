import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/Ai";
interface SubmitButtonProps {
	isSubmitting: boolean;
}
const SubmitButton: React.FC<SubmitButtonProps> = ({
	children,
	isSubmitting,
}) => {
	return (
		<button
			type="submit"
			disabled={isSubmitting}
			className="font-body text-xl text-white rounded py-3 w-full border-blue hover:border-blue-800 border-2 bg-blue hover:bg-blue-800 disabled:bg-blue-800 disabled:border-blue-800 disabled:cursor-wait transition-all duration-200 ease-in-out"
		>
			{isSubmitting ? (
				<AiOutlineLoading3Quarters className="mx-auto motion-safe:animate-spin text-white w-8 h-8" />
			) : (
				children
			)}
		</button>
	);
};

export default SubmitButton;
