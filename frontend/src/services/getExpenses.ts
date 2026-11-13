import { useQuery } from "@apollo/client/react";
import { GetExpensesDocument } from "../gql/graphql";

export const useGetExpenses = () => {
  return useQuery(GetExpensesDocument);
};
