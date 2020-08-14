#commentaire

'''
tout est objet : une variable peut contenir une référence vers tous les éléments manipulés par le langage : nombres, méthodes, modules, etc

'''
#encodage UTF8, par défaut dans python 3
# -*- coding: utf-8 -*-
# coding: utf-8

print("toto")


#saisir
age = input("Quel est votre age? : ")
print("Vous avez %d ans" % age)


#importer
from func import *


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


#module et package
#-module = ensemble de fonctions
#-package = ensemble de modules
from package.module import fonction
from package.module import *


#classes
class Personne:
    def __init__(self, nom, prenom):
        self.nom = nom
        self.prenom = prenom
    def presenter(self):
        return self.nom + " " + self.prenom

class Etudiant(Personne):
    def __init__(self, niveau, nom, prenom):
        Personne.__init__(self, nom, prenom)
        self.niveau = niveau
    def presenter(self):
        return self.niveau + " " + Personne.presenter(self)

e = Etudiant("Licence INFO", "Dupontel", "Albert")
assert e.nom == "Dupontel"