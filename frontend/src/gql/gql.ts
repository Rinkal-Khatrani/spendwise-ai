/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "mutation CreateExpense($merchant: String!, $amountMinor: Int!, $currency: String, $description: String, $expenseDate: Date!) {\n  createExpense(\n    merchant: $merchant\n    amountMinor: $amountMinor\n    currency: $currency\n    description: $description\n    expenseDate: $expenseDate\n  ) {\n    expense {\n      id\n      merchant\n      amountMinor\n      currency\n      expenseDate\n    }\n  }\n}": typeof types.CreateExpenseDocument,
    "query GetExpenses {\n  expenses {\n    id\n    merchant\n    amountMinor\n    currency\n    description\n    expenseDate\n  }\n}": typeof types.GetExpensesDocument,
    "query hello {\n  hello\n}": typeof types.HelloDocument,
    "\n  query GetExpenses {\n    expenses {\n      id\n      merchant\n      amountMinor\n      currency\n      description\n      expenseDate\n    }\n  }\n": typeof types.GetExpensesDocument,
    "\n  query Hello {\n    hello\n  }\n": typeof types.HelloDocument,
};
const documents: Documents = {
    "mutation CreateExpense($merchant: String!, $amountMinor: Int!, $currency: String, $description: String, $expenseDate: Date!) {\n  createExpense(\n    merchant: $merchant\n    amountMinor: $amountMinor\n    currency: $currency\n    description: $description\n    expenseDate: $expenseDate\n  ) {\n    expense {\n      id\n      merchant\n      amountMinor\n      currency\n      expenseDate\n    }\n  }\n}": types.CreateExpenseDocument,
    "query GetExpenses {\n  expenses {\n    id\n    merchant\n    amountMinor\n    currency\n    description\n    expenseDate\n  }\n}": types.GetExpensesDocument,
    "query hello {\n  hello\n}": types.HelloDocument,
    "\n  query GetExpenses {\n    expenses {\n      id\n      merchant\n      amountMinor\n      currency\n      description\n      expenseDate\n    }\n  }\n": types.GetExpensesDocument,
    "\n  query Hello {\n    hello\n  }\n": types.HelloDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateExpense($merchant: String!, $amountMinor: Int!, $currency: String, $description: String, $expenseDate: Date!) {\n  createExpense(\n    merchant: $merchant\n    amountMinor: $amountMinor\n    currency: $currency\n    description: $description\n    expenseDate: $expenseDate\n  ) {\n    expense {\n      id\n      merchant\n      amountMinor\n      currency\n      expenseDate\n    }\n  }\n}"): (typeof documents)["mutation CreateExpense($merchant: String!, $amountMinor: Int!, $currency: String, $description: String, $expenseDate: Date!) {\n  createExpense(\n    merchant: $merchant\n    amountMinor: $amountMinor\n    currency: $currency\n    description: $description\n    expenseDate: $expenseDate\n  ) {\n    expense {\n      id\n      merchant\n      amountMinor\n      currency\n      expenseDate\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetExpenses {\n  expenses {\n    id\n    merchant\n    amountMinor\n    currency\n    description\n    expenseDate\n  }\n}"): (typeof documents)["query GetExpenses {\n  expenses {\n    id\n    merchant\n    amountMinor\n    currency\n    description\n    expenseDate\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query hello {\n  hello\n}"): (typeof documents)["query hello {\n  hello\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetExpenses {\n    expenses {\n      id\n      merchant\n      amountMinor\n      currency\n      description\n      expenseDate\n    }\n  }\n"): (typeof documents)["\n  query GetExpenses {\n    expenses {\n      id\n      merchant\n      amountMinor\n      currency\n      description\n      expenseDate\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Hello {\n    hello\n  }\n"): (typeof documents)["\n  query Hello {\n    hello\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;