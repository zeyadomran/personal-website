import { mongoose } from "@typegoose/typegoose";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import path from "path";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import CertificateResolver from "./resolvers/CertificateResolver";
import ProjectResolver from "./resolvers/ProjectResolver";
require("dotenv").config({ path: path.join(__dirname, "../.env") });
import session from "express-session";
import MongoStore from "connect-mongo";
import { COOKIE_NAME, MONGO_OPTIONS, __prod__ } from "./Constants";
import AdminResolver from "./resolvers/AdminResolver";
import cors from "cors";

const main = async () => {
	// Connecting to MongoDB
	await mongoose
		.connect(process.env.MONGO_URL!, MONGO_OPTIONS)
		.then(() => console.log("🚀 DB successfully connected!"));

	// Creating instance of express server
	const app = express();

	app.set("trust proxy", 1);
	app.use(cors({ origin: "http://192.168.0.131:3000" }));

	app.use(
		session({
			name: COOKIE_NAME,
			store: MongoStore.create({
				mongoUrl: process.env.MONGO_URL!.replace("website", "session"),
				mongoOptions: MONGO_OPTIONS,
			}),
			cookie: {
				maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days.
				httpOnly: true,
				sameSite: "lax", // csrf.
				secure: __prod__, // cookie only works in https.
			},
			secret: process.env.SESSION_SECRET!,
			saveUninitialized: false,
			resave: false,
		})
	);

	// Creating instance of Apollo Server
	const apolloServer = new ApolloServer({
		schema: await buildSchema({
			resolvers: [ProjectResolver, CertificateResolver, AdminResolver],
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
	const port = process.env.PORT || 4000;
	app.listen(Number(port), () =>
		console.log(`🚀 Listening on https://localhost:${port}!`)
	);
};

main();
