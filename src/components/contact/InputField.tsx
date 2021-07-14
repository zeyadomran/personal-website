import { Field } from "formik";

interface InputFieldProps {
	type: string;
	name: string;
	placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ type, name, placeholder }) => {
	return (
		<Field
			type={type}
			name={name}
			placeholder={placeholder}
			className="p-3 font-body text-xl text-black bg-white rounded-sm w-72 sm:w-80 md:w-96 outline-none ring-blue ring-0 focus:ring-4"
		/>
	);
};

export default InputField;
