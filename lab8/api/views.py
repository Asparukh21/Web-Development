from django.shortcuts import render
from api.models import Product, Category
from django.http.response import JsonResponse
from api.models import Product
from api.models import Category


def product_list(request):
    products = Product.objects.all()
    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)


def product_detail(request, product_id):
    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist as e:
        return JsonResponse({'message': str(e)})
    return JsonResponse(product.to_json())


def category_list(request):
    categories = Category.objects.all()
    categories_json = [category.to_json1() for category in categories]
    return JsonResponse(categories_json, safe=False)


def category_detail(request, category_id):
    try:
        category: Category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as e:
        return JsonResponse({'message': str(e)})
    return JsonResponse(category.to_json1())


def category_detail2(request, category_id):
    try:
        products = Product.objects.all().filter(cat=category_id)
    except products.DoesNotExist as e:
        return JsonResponse({'message': str(e)})
    products_json = [each.to_json() for each in products]
    return JsonResponse(products_json, safe=False, json_dumps_params={'indent': '4'})
