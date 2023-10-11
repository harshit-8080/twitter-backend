import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { json } from "body-parser";

export async function initServer() {
  const app = express();
  app.use(json());

  const graphQlServer = new ApolloServer({
    typeDefs: `
    type Query{
      sayHello: String
    }`,
    resolvers: {
      Query: {
        sayHello: () => "Hey",
      },
    },
  });

  await graphQlServer.start();
  app.use("/graphql", expressMiddleware(graphQlServer));

  return app;
}
