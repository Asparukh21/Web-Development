from django.urls import path

from api.views import Company, Vacancy, companies_list, companies_detail, vacancies_list, vacancies_detail, top_ten


urlpatterns = [
    path('companies/', companies_list),
    path('companies/<int:company_id>', companies_detail),
    path('vacancies/', vacancies_list),
    path('vacancies/<int:vacancy_id>', vacancies_detail),
    path('vacancies/top_ten', top_ten)
]