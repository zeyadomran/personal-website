import nodemailer from "nodemailer";

// async..await is not allowed in global scope, must use a wrapper
export async function sendEmail(subject: string, html: string) {
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

	// send mail with defined transport object
	let info = await transporter.sendMail({
		from: '"Zeyad Omran" <ziomran@gmail.com>', // sender address
		to: '"Zeyad Omran" <ziomran@gmail.com>', // list of receivers
		subject, // Subject line
		html,
	});

	console.log("Message sent: %s", info.messageId);
	console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
