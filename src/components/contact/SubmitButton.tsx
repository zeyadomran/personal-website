import React from "react";

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
			className="font-body text-xl text-white rounded py-3 w-full border-blue hover:border-blue-800 border-2 bg-blue hover:bg-blue-800 disabled:bg-blue-800 transition-all duration-200 ease-in-out"
		>
			{children}
		</button>
	);
};

export default SubmitButton;
