import { graphqlHTTP } from "express-graphql";
import AppGraphQLSchema from "../services/graphql/AppGraphQLSchema";
import express from 'express'

const app = express();

const run = ({port = 4000}) => {
   //https://graphql.org/graphql-js/
   app.use(
      '/graphql',
      graphqlHTTP({
         schema: AppGraphQLSchema,
         graphiql: true,
      }),
   );

   app.listen(port);
}

export default run
