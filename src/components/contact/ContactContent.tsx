import { Form, Formik, ErrorMessage } from "formik";
import React from "react";
import { MdEmail } from "react-icons/Md";
import InputArea from "./InputArea";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";

interface ContactContentProps {
	setIsOpen: (isOpen: boolean) => void;
}

const ContactContent: React.FC<ContactContentProps> = ({ setIsOpen }) => {
	return (
		<div className="flex flex-col items-center break-words w-full space-y-8">
			<div className="space-y-4">
				<h2 className="text-center font-heading text-2xl md:text-4xl text-white font-bold">
					Get in touch
				</h2>
				<div className="group flex space-x-2 items-center justify-start text-white text-xl w-72 sm:w-80 md:w-96">
					<MdEmail className="group-hover:text-blue transition-all duration-200 ease-in-out" />
					<a href="mailto:ziomran@gmail.com" target="_blank">
						ziomran@gmail.com
					</a>
				</div>
			</div>
			<Formik
				initialValues={{ email: "", name: "", subject: "", message: "" }}
				validate={(values) => {
					let errors: any = {};
					if (!values.email) {
						errors.email = "Please provide an email.";
					} else if (
						!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
					) {
						errors.email = "Invalid email address.";
					}
					if (!values.name) {
						errors.name = "Please provide your name.";
					}
					if (!values.subject) {
						errors.subject = "Please provide a subject.";
					}
					if (!values.message) {
						errors.message = "Please provide a message.";
					}
					return errors;
				}}
				onSubmit={async (values, { setSubmitting, resetForm }) => {
					setSubmitting(true);
					await fetch("/api/contact", {
						method: "POST",
						headers: {
							Accept: "application/json, text/plain, */*",
							"Content-Type": "application/json",
						},
						body: JSON.stringify(values),
					});
					setSubmitting(false);
					setIsOpen(true);
					resetForm();
				}}
			>
				{(props) => (
					<Form className="flex flex-col justify-between items-left space-y-4 text-orange text-base font-body">
						<InputField type="email" name="email" placeholder="Email" />
						<ErrorMessage name="email" />
						<InputField type="text" name="name" placeholder="Name" />
						<ErrorMessage name="name" />
						<InputField type="text" name="subject" placeholder="Subject" />
						<ErrorMessage name="subject" />
						<InputArea type="text" name="message" placeholder="Message" />
						<ErrorMessage name="message" />
						<SubmitButton isSubmitting={props.isSubmitting}>
							Submit
						</SubmitButton>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default ContactContent;
