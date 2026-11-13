

import graphene
from graphene_django import DjangoObjectType
from .models import Expense


class ExpenseType(DjangoObjectType):

    class Meta:
        model = Expense
        fields = (
            "id",
            "merchant",
            "amount_minor",
            "currency",
            "description",
            "expense_date",
            "created_at",
        )