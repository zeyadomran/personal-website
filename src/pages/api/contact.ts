import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {
	// Generate test SMTP service account from ethereal.email
	// Only needed if you don't have a real mail account for testing
	// let testAccount = await nodemailer.createTestAccount();
	// console.log("testAccount", testAccount);

	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.EMAIL_USER as string,
			pass: process.env.EMAIL_PASS as string,
		},
	});

	const { name, email, subject, message } = req.body;

	const text = `Name:\n${name}\n\nEmail:\n${email}\n\nMessage:\n${message}`;

	// send mail with defined transport object
	await transporter.sendMail({
		from: '"Zeyad Omran" <ziomran@gmail.com>', // sender address
		to: '"Zeyad Omran" <ziomran@gmail.com>', // list of receivers
		subject, // Subject line
		text,
	});

	res.status(200).send("Message sent");
}
