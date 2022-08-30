import reflectMetadata from 'reflect-metadata'
import AppGraphQLSchema from "./services/graphql/AppGraphQLSchema"
import express from 'express'
import { graphqlHTTP } from 'express-graphql'

const app = express();
const PORT = 4000

//https://graphql.org/graphql-js/
app.use(
    '/graphql',
    graphqlHTTP({
        schema: AppGraphQLSchema,
        graphiql: true,
    }),
);

app.listen(PORT);

console.log(`Backend server started on port ${PORT}`)
