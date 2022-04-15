from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=250)
    description = models.TextField(default='')
    city = models.CharField(max_length=100)
    address = models.TextField(default='')

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address
        }


class Vacancy(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(default='')
    salary = models.FloatField(default='')
    company = models.ForeignKey(Company, on_delete=models.CASCADE, null=True, blank=True)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
            'company': self.company.id
        }
