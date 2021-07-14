import { ErrorMessage as Error } from "formik";

interface ErrorMessageProps {
	name: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ name }) => {
	return (
		<Error name={name} className="text-orange text-base font-body font-bold" />
	);
};

export default ErrorMessage;
