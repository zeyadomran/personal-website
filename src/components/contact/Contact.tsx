import React from "react";
import ContactContent from "./ContactContent";

interface ContactProps {
	setIsOpen: (isOpen: boolean) => void;
}

const Contact: React.FC<ContactProps> = ({ setIsOpen }) => {
	return (
		<section
			id="contact"
			className="flex flex-col items-center justify-center py-20 px-2 bg-black w-full"
		>
			<div className="w-11/12 md:w-9/12 lg:w-8/12">
				<ContactContent setIsOpen={setIsOpen} />
			</div>
		</section>
	);
};

export default Contact;
