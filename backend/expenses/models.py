from django.db import models

from django.conf import settings

# Create your models here.


class Expense(models.Model):
    user = models.ForeignKey(
       settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="expenses"
    )
    merchant = models.CharField(max_length=255)

    amount_minor = models.PositiveBigIntegerField()

    currency = models.CharField(
        max_length=3,
        default="INR"
    )

    description = models.TextField(blank=True)

    expense_date = models.DateField()

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.merchant