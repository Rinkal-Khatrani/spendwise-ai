export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * The `BigInt` scalar type represents non-fractional whole numeric values.
   * `BigInt` is not constrained to 32-bit like the `Int` type and thus is a less
   * compatible type.
   */
  BigInt: { input: number; output: number; }
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: { input: string; output: string; }
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: { input: string; output: string; }
};

export type CreateExpense = {
  __typename?: 'CreateExpense';
  expense?: Maybe<ExpenseType>;
};

export type ExpenseType = {
  __typename?: 'ExpenseType';
  amountMinor: Scalars['BigInt']['output'];
  createdAt: Scalars['DateTime']['output'];
  currency: Scalars['String']['output'];
  description: Scalars['String']['output'];
  expenseDate: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  merchant: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createExpense?: Maybe<CreateExpense>;
  welcome?: Maybe<WelcomeMutation>;
};


export type MutationCreateExpenseArgs = {
  amountMinor: Scalars['Int']['input'];
  currency?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  expenseDate: Scalars['Date']['input'];
  merchant: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  expenses?: Maybe<Array<Maybe<ExpenseType>>>;
  hello?: Maybe<Scalars['String']['output']>;
};

export type WelcomeMutation = {
  __typename?: 'WelcomeMutation';
  message?: Maybe<Scalars['String']['output']>;
};
