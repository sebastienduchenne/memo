#ouvrir
fichier = open("data.txt", "r")

'''
r, pour une ouverture en lecture (READ).
w, pour une ouverture en écriture (WRITE), à chaque ouverture le contenu du fichier est écrasé. Si le fichier n'existe pas python le crée.
a, pour une ouverture en mode ajout à la fin du fichier (APPEND). Si le fichier n'existe pas python le crée.
b, pour une ouverture en mode binaire.
t, pour une ouverture en mode texte.
x, crée un nouveau fichier et l'ouvre pour écriture
'''

#lire
fichier = open("data.txt", "r")
print fichier.read()
fichier.close()


#écrire
fichier = open("data.txt", "a")
fichier.write("Bonjour monde")
fichier.close()


#fermer
fichier.close()


#ne pas close avec le mot clé with
with open("data.txt", "r") as fichier:
	print fichier.read()
