import type { ExpenseType } from "../../gql/schema-types";
import { useGetExpenses } from "../../services/getExpenses";

const formatCurrency = (amountMinor: number, currency: string) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
  }).format(amountMinor / 100);
};

export function ExpenseList() {
  const { loading, error, data } = useGetExpenses();

  if (loading) {
    return <p>Loading expenses...</p>;
  }

  if (error) {
    return <p>Failed to load expenses: {error.message}</p>;
  }

  const expenses: ExpenseType[] = (data?.expenses as ExpenseType[]) ?? [];

  if (expenses.length === 0) {
    return <p>No expenses found.</p>;
  }

  return (
    <div>
      <h2>My Expenses</h2>

      {expenses.map((expense: ExpenseType) => (
        <div key={expense.id}>
          <h3>{expense?.merchant}</h3>

          <p>{formatCurrency(expense?.amountMinor, expense?.currency)}</p>

          <p>{expense?.description ?? "No description"}</p>

          <p>{expense?.expenseDate}</p>
        </div>
      ))}
    </div>
  );
}
