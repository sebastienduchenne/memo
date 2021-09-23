'''
-framework python open-source consacré au développement web 2.0
-Tout est pensé de base. Inutile de réinventer la roue à chaque projet web: les bases sont déjà présentes
-modèle MVC
-tous les projets Django ont la même structure
-un projet Django est composé d'applications


*** créer un projet
django-admin startproject eboutique

*** structure d'un projet
/home/compte/eboutique

├── eboutique
│   ├── __init__.py     -> indique que le projet est un package
│   ├── settings.py     -> fichier de config : déclarer les variables d'env (BD, app à ajouter, ...)
│   ├── urls.py         -> table de routage : rediriger une URL vers une fonction
│   ├── wsgi.py         -> plate-forme principale de déploiement Django
├── backoffice
│   ├── admin.py
│   ├── __init__.py
│   ├── models.py       -> ORM
│   ├── tests.py
│   └── views.py        -> vue, renvoit de l'HTML
└── manage.py           -> point d'entrée de commande de management du projet

*** Lancer le serveur de développement 
python ./manage.py runserver
python ./manage.py runserver 5555


*** settings.py
*mode debug
DEBUG = True

* bd
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql', 
        'OPTIONS' : { "init_command": "SET foreign_key_checks = 0;" },
        'NAME': 'eboutique',
        'USER': 'root',
        'PASSWORD': 'MOTDEPASSE',
        'HOST': '127.0.0.1',                     
        'PORT': '',
    }
}

* fichiers statiques
STATIC_URL = '/static/'
STATICFILES_DIRS = (
    BASE_DIR + '/static/',
)

*dossiers templates
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [ '', 'test'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]





'''