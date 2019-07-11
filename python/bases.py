#commentaire

'''
toue est objet : une variable peut contenir une référence vers tous les éléments manipulés par le langage : nombres, méthodes, modules, etc

'''

#types
int i
long l
float f
complex c



#boucle
i = 0
while i < 10:
    print("Je ne dois pas poser une question sans lever la main")
    i = i +1

v = "Bonjour toi"
for lettre in v:
    print(lettre)


for i in range(0,100):
    print(i)




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