import graphene

from expenses.schema import ExpenseQuery
from expenses.mutations import ExpenseMutation

class Query(ExpenseQuery, graphene.ObjectType):   
    
    # Define your query fields here
    hello = graphene.String()

    def resolve_hello(self, info):
        return "Welcome to SpendWise AI!"
    
    
class WelcomeMutation(graphene.Mutation):
    message = graphene.String()

    def mutate(self, info):
        return WelcomeMutation(
            message="Welcome to SpendWise AI Mutations!"
        )

class Mutation(ExpenseMutation, graphene.ObjectType):    
    
    # Define your mutation fields here
    welcome = WelcomeMutation.Field()

schema = graphene.Schema(
    query=Query,
    mutation=Mutation
)

