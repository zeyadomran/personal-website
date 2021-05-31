import { ApolloClient, InMemoryCache } from "@apollo/client";
import { NextPageContext } from "next";
import { createWithApollo } from "./createWithApollo";

const createClient = (ctx: NextPageContext) =>
	new ApolloClient({
		uri: "http://192.168.0.131:4000/graphql", //process.env.NEXT_PUBLIC_API_URL,
		credentials: "include",
		headers: {
			cookie:
				(typeof window === "undefined"
					? ctx?.req?.headers.cookie
					: undefined) || "",
		},
		cache: new InMemoryCache(),
	});

export const withApollo = createWithApollo(createClient);
