/* eslint-disable */
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
import type { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type CreateExpenseMutationVariables = Exact<{
  merchant: string;
  amountMinor: number;
  currency?: string | null | undefined;
  description?: string | null | undefined;
  expenseDate: string;
}>;

export type CreateExpenseMutation = {
  createExpense: {
    expense: {
      id: string;
      merchant: string;
      amountMinor: number;
      currency: string;
      expenseDate: string;
    } | null;
  } | null;
};

export type GetExpensesQueryVariables = Exact<{ [key: string]: never }>;

export type GetExpensesQuery = {
  expenses: Array<{
    id: string;
    merchant: string;
    amountMinor: number;
    currency: string;
    description: string;
    expenseDate: string;
  } | null> | null;
};

export type HelloQueryVariables = Exact<{ [key: string]: never }>;

export type HelloQuery = { hello: string | null };

export const CreateExpenseDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateExpense" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "merchant" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "amountMinor" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "currency" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "description" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "expenseDate" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Date" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createExpense" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "merchant" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "merchant" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "amountMinor" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "amountMinor" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "currency" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "currency" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "description" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "description" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "expenseDate" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "expenseDate" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "expense" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "merchant" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amountMinor" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "currency" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "expenseDate" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateExpenseMutation,
  CreateExpenseMutationVariables
>;
export const GetExpensesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetExpenses" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "expenses" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "merchant" } },
                { kind: "Field", name: { kind: "Name", value: "amountMinor" } },
                { kind: "Field", name: { kind: "Name", value: "currency" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "expenseDate" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetExpensesQuery, GetExpensesQueryVariables>;
export const HelloDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "hello" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "Field", name: { kind: "Name", value: "hello" } }],
      },
    },
  ],
} as unknown as DocumentNode<HelloQuery, HelloQueryVariables>;
