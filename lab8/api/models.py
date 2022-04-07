from django.db import models


# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=250)

    def to_json1(self):
        return {
            'id': self.id,
            'name': self.name
        }


class Product(models.Model):
    name = models.CharField(max_length=250)
    price = models.FloatField(max_length=100)
    description = models.TextField(max_length=250)
    count = models.IntegerField()
    is_active = models.BooleanField(max_length=100)
    cat = models.ForeignKey(Category, on_delete=models.CASCADE, null=True, blank=True)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count,
            'is_active': self.is_active,
            'cat': self.cat.id
        }
