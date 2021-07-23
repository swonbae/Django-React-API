# DjangoReactAPI
Full Stack in Python and ReactJS Practice (Back-end API using Django REST Framework + Front-end using ReactJS)

## Setup

Install the dependencies
```sh
pip install django
pip install djangorestframework
```

Data migration
```sh
python manage.py migrate
```

Create admin user
```sh
python manage.py createsuperuser
```

Run server
```sh
cd
python manage.py runserver
```
Admin Page URL: `http://localhost:8000/admin`\
Articles List API or View URL: `http://localhost:8000/api/articles`\
User List API or View URL: `http://localhost:8000/api/users`
