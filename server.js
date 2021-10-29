const { ApolloServer } = require("apollo-server-express");

const express = require("express");
const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.listen({ port: 3001 }, () => {
  console.log("Server Running on port 3001");
});
