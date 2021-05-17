import { mongoose } from "@typegoose/typegoose";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import path from "path";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import ProjectResolver from "./resolvers/ProjectResolver";
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const main = async () => {
	const port = process.env.PORT || 4000;

	await mongoose
		.connect(process.env.MONGO_URL!, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
		})
		.then(() => console.log("DB successfully connected! 🚀"));

	const app = express();

	const apolloServer = new ApolloServer({
		schema: await buildSchema({
			resolvers: [ProjectResolver],
			validate: false,
		}),
	});

	apolloServer.applyMiddleware({ app });

	app.listen(port, () =>
		console.log(`Listening on https://localhost:${port}! 🚀`)
	);
};

main();
