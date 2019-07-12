from func import *
from utils.op import ajoute_deux

#__init__.py indique que c'est un package

age = input("Quel est votre age? : ")
print("Vous avez %d ans" % age)

age_plus_un = ajoute_un(age)

print("Dans un an vous aurez %d ans" % age_plus_un)

age_plus_deux = ajoute_deux(age)

print("Dans un an vous aurez %d ans" % age_plus_deux)