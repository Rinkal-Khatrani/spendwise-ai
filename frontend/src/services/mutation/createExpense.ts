import { useMutation } from "@apollo/client/react";
import { CreateExpenseDocument, GetExpensesDocument } from "../../gql/graphql";

export const useCreateExpense = () => {
  return useMutation(CreateExpenseDocument, {
    refetchQueries: [{ query: GetExpensesDocument }],
  });
};
