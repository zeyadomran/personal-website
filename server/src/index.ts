import { mongoose } from "@typegoose/typegoose";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import path from "path";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import ProjectResolver from "./resolvers/ProjectResolver";
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const main = async () => {
	// Connecting to MongoDB
	await mongoose
		.connect(process.env.MONGO_URL!, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
		})
		.then(() => console.log("🚀 DB successfully connected!"));

	// Creating instance of express server
	const app = express();

	// Creating GraphQL Schema
	const schema = await buildSchema({
		resolvers: [ProjectResolver],
		validate: false,
	});

	// Creating instance of Apollo Server
	const apolloServer = new ApolloServer({
		schema,
	});

	// Applying app as middleware to Apollo Server
	apolloServer.applyMiddleware({ app });

	// Start Server
	const port = process.env.PORT || 4000;
	app.listen(Number(port), () =>
		console.log(`🚀 Listening on https://localhost:${port}!`)
	);
};

main();
