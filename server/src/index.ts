import { mongoose } from "@typegoose/typegoose";
import { ApolloServer } from "apollo-server-express";
import MongoStore from "connect-mongo";
import cors from "cors";
import "dotenv-safe/config";
import express from "express";
import session from "express-session";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { COOKIE_NAME, MONGO_OPTIONS, __prod__ } from "./Constants";
import AdminResolver from "./resolvers/AdminResolver";
import CertificateResolver from "./resolvers/CertificateResolver";
import ContactResolver from "./resolvers/ContactResolver";
import ProjectResolver from "./resolvers/ProjectResolver";

const main = async () => {
	// Connecting to MongoDB
	await mongoose
		.connect(process.env.MONGO_URL as string, MONGO_OPTIONS)
		.then(() => console.log("🚀 DB successfully connected!"));

	// Creating instance of express server
	const app = express();

	app.set("trust proxy", 1);
	app.use(
		cors({
			origin: process.env.CORS_ORIGIN as string,
			credentials: true,
		})
	);

	app.use(
		session({
			name: COOKIE_NAME,
			store: MongoStore.create({
				mongoUrl: (process.env.MONGO_URL as string).replace(
					"website",
					"session"
				),
				mongoOptions: MONGO_OPTIONS,
			}),
			cookie: {
				maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days.
				httpOnly: true,
				sameSite: "lax", // csrf.
				secure: __prod__, // cookie only works in https.
			},
			secret: process.env.SESSION_SECRET as string,
			saveUninitialized: false,
			resave: false,
		})
	);

	// Creating instance of Apollo Server
	const apolloServer = new ApolloServer({
		schema: await buildSchema({
			resolvers: [
				ProjectResolver,
				CertificateResolver,
				AdminResolver,
				ContactResolver,
			],
			validate: false,
		}),
		context: ({ req, res }) => ({
			req,
			res,
		}),
	});

	// Applying app as middleware to Apollo Server
	apolloServer.applyMiddleware({
		app,
		cors: false,
	});

	// Start Server
	const port = process.env.PORT as string;
	app.listen(parseInt(port), () =>
		console.log(`🚀 Listening on https://localhost:${port}!`)
	);
};

main();
