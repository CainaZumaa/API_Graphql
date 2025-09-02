import express from "express";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import helmet from "helmet";
import { typeDefs } from "./schemas/typeDefs";
import { resolvers } from "./resolvers";

async function startServer() {
  const app = express();

  // Configuração mais permissiva do helmet para desenvolvimento
  app.use(
    helmet({
      contentSecurityPolicy: false, // Desabilita CSP para permitir playground
      crossOriginEmbedderPolicy: false,
      crossOriginResourcePolicy: false,
    })
  );

  app.use(cors());
  app.use(express.json());
  app.use(express.static("public"));

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req }),
    formatError: (error) => {
      console.error("GraphQL Error:", error);
      return error;
    },
    introspection: true,
    plugins: [
      {
        requestDidStart: async () => ({
          willSendResponse: async ({ response }) => {
            // Adiciona headers para permitir playground
            if (response.http) {
              response.http.headers.set("Access-Control-Allow-Origin", "*");
              response.http.headers.set(
                "Access-Control-Allow-Headers",
                "Content-Type"
              );
            }
          },
        }),
      },
    ],
  });

  await server.start();
  server.applyMiddleware({ app: app as any, path: "/graphql" });

  const PORT = process.env.PORT || 4000;

  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    console.log(
      `📊 GraphQL endpoint: http://localhost:${PORT}${server.graphqlPath}`
    );
  });
}

startServer().catch(console.error);
