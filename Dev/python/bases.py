'''
-tout est objet : une variable peut contenir une référence vers tous les éléments manipulés par le langage : nombres, méthodes, modules, etc

-variable "__name__" : nom du module, vaut "__main__" lorsqu'il vient de l'entrée standart

-encodage UTF8, par défaut dans python 3
- -*- coding: utf-8 -*-
- coding: utf-8
'''

#saisir
age = input("Quel est votre age? : ")
print("Vous avez %d ans" % age)


#types
int i
long l
float f
complex c
str name1 = 'engel'  # str
unicode name2 = u'engel' # unicode, préférable, par défaut dans python 3
 

#boucle
i = 0
while i < 10:
    print("titi")
    i = i +1

v = "Bonjour toi"
for lettre in v:
    print(lettre)


for i in range(0,100):
    print(i)


#####################################################################################""

None # type null

'''
dunder variable = variable entourées de '__' (double under, double souligné)
__name__ : 
__file__ : chemin du fichier
magic method : __init__, __add__, __len__, __repr__
'''

def my_function(default = "a"):                 # paramètre par défaut
    print(default)

def my_function(*param):                        # "*" avant si nombre d'arguments inconnus
    print(param[2])

def my_function(c, b, a):
    print(b)

my_function(a = "a", b = "b", c = "c")          # pour ne pas respecter l'ordre des arguments

def my_function(**kid):                         # "**" si nombre d'arguments keywords inconnus
    print(kid["a"])

my_function(a = "a", a = "a")

def myfunction():
    pass                                       # "pass" permet de ne pas mettre d'instruction


### import

#module et package
#-module = ensemble de fonctions
#-package = ensemble de modules
from package.module import fonction
from package.module import *


# Module1.py
  
def hello(): 
    print("This is imported from JustMyModule") 


# Module2.py

import Module1 as m

# Calling the method created inside the module 
m.hello() 


# générateurs
'''
-une fonction génératrice renvoie un générateur
-yield x : retourne 'x'
-next() : exécuter les instructions jusqu'à 'yield'
'''
def firstn(n):      # fonction génératrice
    num = 0
    while num < n:
        yield num   # retourne num
        num += 1

sum_of_first_n = sum(firstn(1000000))


# try ... except
try:
  print(x)
except:
  print("An exception occurred")
except:
  print("Something else went wrong")
finally:
  print("The 'try except' is finished")

# finaly
try:
  print("Hello")
except:
  print("Something went wrong")
else:
  print("Nothing went wrong")   # exécuté s'il n'y a pas eu d'erreur


# lever une exception
x = -1

if x < 0:
  raise Exception("Sorry, no numbers below zero") 