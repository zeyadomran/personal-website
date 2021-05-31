import {
	Button,
	FormControl,
	FormLabel,
	Input,
	Box,
	useColorModeValue,
	FormErrorMessage,
	Alert,
	AlertIcon,
	CloseButton,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import React from "react";
import { useContactMeMutation } from "../generated/graphql";

const ContactForm: React.FC = () => {
	const [contactMe] = useContactMeMutation();
	const [success, setSuccess] = React.useState(false);

	return (
		<Box
			w={{ base: "xs", md: "md" }}
			p={10}
			rounded={"lg"}
			bg={useColorModeValue("white.100", "black.800")}
		>
			{success && (
				<Alert status="success" mb={5}>
					<AlertIcon />
					Success!
					<CloseButton
						position="absolute"
						right="8px"
						top="8px"
						onClick={() => setSuccess(false)}
					/>
				</Alert>
			)}
			<Formik
				initialValues={{ email: "", subject: "", message: "" }}
				validate={(values) => {
					const errors: any = {};
					if (!values.email) {
						errors.email = "You must include an email!";
					} else if (
						!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
					) {
						errors.email = "The email address provided is invalid!";
					}
					if (!values.subject) {
						errors.subject = "You must include a subject!";
					}
					if (!values.message) {
						errors.message = "You must include a message!";
					}
					return errors;
				}}
				onSubmit={async ({ email, subject, message }, actions) => {
					const response = await contactMe({
						variables: {
							from: email,
							subject,
							message,
						},
					});
					if (response?.data?.contactMe) {
						setSuccess(true);
					}
					actions.setSubmitting(false);
				}}
			>
				{(props) => (
					<Form>
						<Field name="email">
							{({ field, form }: any) => (
								<FormControl
									mb={5}
									isInvalid={form.errors.email && form.touched.email}
								>
									<FormLabel htmlFor="email">Your email</FormLabel>
									<Input {...field} id="email" placeholder="email" />
									<FormErrorMessage>{form.errors.email}</FormErrorMessage>
								</FormControl>
							)}
						</Field>
						<Field name="subject">
							{({ field, form }: any) => (
								<FormControl
									mb={5}
									isInvalid={form.errors.subject && form.touched.subject}
								>
									<FormLabel htmlFor="subject">Subject</FormLabel>
									<Input {...field} id="subject" placeholder="subject" />
									<FormErrorMessage>{form.errors.subject}</FormErrorMessage>
								</FormControl>
							)}
						</Field>
						<Field name="message">
							{({ field, form }: any) => (
								<FormControl
									mb={5}
									isInvalid={form.errors.message && form.touched.message}
								>
									<FormLabel htmlFor="message">Message</FormLabel>
									<Input {...field} id="message" placeholder="message" />
									<FormErrorMessage>{form.errors.message}</FormErrorMessage>
								</FormControl>
							)}
						</Field>
						<Button
							colorScheme={"blue"}
							bg={"blue.400"}
							rounded={"lg"}
							color={"white.100"}
							px={6}
							_hover={{
								bg: "blue.700",
							}}
							isDisabled={props.isSubmitting}
							isLoading={props.isSubmitting}
							type="submit"
						>
							Submit
						</Button>
					</Form>
				)}
			</Formik>
		</Box>
	);
};

export default ContactForm;
