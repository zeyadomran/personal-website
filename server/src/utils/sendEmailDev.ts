import nodemailer from "nodemailer";

// async..await is not allowed in global scope, must use a wrapper
export async function sendEmail(from: string, subject: string, html: string) {
	// Generate test SMTP service account from ethereal.email
	// Only needed if you don't have a real mail account for testing
	// let testAccount = await nodemailer.createTestAccount();
	// console.log("testAccount", testAccount);

	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
		host: "smtp.ethereal.email",
		port: 587,
		auth: {
			user: "friedrich54@ethereal.email",
			pass: "h3vgt1bEh1gMqAmKM9",
		},
	});

	// send mail with defined transport object
	let info = await transporter.sendMail({
		from, // sender address
		to: '"Fred Foo 👻" <ziomran@gmail.com>', // list of receivers
		subject, // Subject line
		html,
	});

	console.log("Message sent: %s", info.messageId);
	console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
