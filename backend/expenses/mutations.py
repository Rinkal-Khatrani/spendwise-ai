import graphene

from .models import Expense
from .types import ExpenseType

class CreateExpense(graphene.Mutation):

    class Arguments:
        merchant = graphene.String(required=True)
        amount_minor = graphene.Int(required=True)
        currency = graphene.String(default_value="INR")
        description = graphene.String()
        expense_date = graphene.Date(required=True)

    expense = graphene.Field(ExpenseType)

    @classmethod
    def mutate(
        cls,
        self,
        info,
        merchant,
        amount_minor,
        expense_date,
        currency="INR",
        description=""
    ):

        user = info.context.user

        if not user.is_authenticated:
            raise Exception("Authentication required")

        if amount_minor <= 0:
            raise Exception("Amount must be positive")

        expense = Expense.objects.create(
            user=user,
            merchant=merchant,
            amount_minor=amount_minor,
            currency=currency,
            description=description,
            expense_date=expense_date
        )

        return CreateExpense(expense=expense)


class ExpenseMutation(graphene.ObjectType):
    create_expense = CreateExpense.Field()