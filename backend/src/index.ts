const AppGraphQLSchema = require("./graphql/AppGraphQLSchema")
const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const app = express();
const PORT = 4000

app.use(
    '/graphql',
    graphqlHTTP({
        schema: AppGraphQLSchema,
        graphiql: true,
    }),
);

app.listen(PORT);

console.log(`Backend server started on port ${PORT}`)
