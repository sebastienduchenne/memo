class Personne:
    attributDeClasse = 1                            # attribut de classe

    def __init__(self, name):                       # constructeur qui doit s'appeler commme ça, self = this
        self.attributDInstancePublic = "apu"        # attribut d'instance public
        self._attributDInstancePrive = "api"        # attribut d'instance privé

    def methodeDInstance(self):                     # méthode d'instance, prend "self" en paramètre
        print()

    @classmethod                                    # indication à python d'une méthode de classe
    def methodeDeClasse(cls):                       # méthode de classe, prend "cls" en paramètre
        print(cls.attributDeClasse)

    @staticmethod                                   # indication à python d'une méthode static
    def methodeStatic():                            # méthode static, n'utilise pas de données d'instance ou de classe
        print()                                     # ne prend rien en paramètre

    def __methodeSpeciale__(self):
        print()

    methodeDeClasse = classmethod(methodeDeClasse)  # indication à python d'une méthode de classe
    methodeStatic = staticmethod(methodeStatic)     # indication à python d'une méthode static

if __name__ == '__main__':
	p = personne()                                  # création d'une personne
	p.attributPublic                                # => v
	p._attributPrive                                # => erreur
	p.methodeDInstance
    print(p.__dict__)                               # attribut spécial contenant la liste des attributs et leur valeur
	Personne.methodeDeClasse() 


### héritage simple

class Mere:
    pass

class Fille(Mere):
    pass

### héritage multiple
