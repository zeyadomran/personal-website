import "reflect-metadata";
import path from "path";
require("dotenv").config({ path: path.join(__dirname, "../.env") });
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema, Resolver, Query } from "type-graphql";
import { mongoose } from "@typegoose/typegoose";

@Resolver()
class HelloResolver {
	@Query(() => String)
	hello() {
		return "Hello World!";
	}
}

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
			resolvers: [HelloResolver],
			validate: false,
		}),
	});

	apolloServer.applyMiddleware({ app });

	app.listen(port, () =>
		console.log(`Listening on https://localhost:${port}! 🚀`)
	);
};

main();
