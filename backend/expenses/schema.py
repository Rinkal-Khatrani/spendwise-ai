import graphene

from .models import Expense
from .types import ExpenseType

class ExpenseQuery(graphene.ObjectType):

    expenses = graphene.List(ExpenseType)

    def resolve_expenses(root, info):
        user = info.context.user

        if not user.is_authenticated:
            raise Exception("Authentication required")

        return Expense.objects.filter(user=user)