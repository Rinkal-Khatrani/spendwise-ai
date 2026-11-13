import { useQuery } from "@apollo/client/react";
import { graphql } from "../gql";

const HELLO_QUERY = graphql(`
  query Hello {
    hello
  }
`);

export const useHello = () => {
  return useQuery(HELLO_QUERY);
};
