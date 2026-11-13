import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "../backend/schema.graphql",

  documents: ["src/**/*.{ts,tsx,graphql}", "!src/gql/**"],

  generates: {
    // Generate reusable GraphQL schema types
    "./src/gql/schema-types.ts": {
      plugins: ["typescript"],
      config: {
        scalars: {
          BigInt: "number",
          Date: "string",
          DateTime: "string",
        },
      },
    },

    // Generate typed GraphQL operations and documents
    "./src/gql/": {
      preset: "client",
      config: {
        useTypeImports: true,
        documentMode: "documentNode",
        scalars: {
          BigInt: "number",
          Date: "string",
          DateTime: "string",
        },
      },
    },
  },
};

export default config;
