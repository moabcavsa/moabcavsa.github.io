class Persona:
    def __init__(self,nome,cognome):
        self.nome = nome
        self.cognome = cognome

    def Saluta(self):
        print("Sei stato salutato da " + self.nome)


def Saluta():
    print("Ciao dal modulo")


def printItems(pList: list):
    for item in pList:
        print(item.nome + " " + item.cognome)


def CheckIfExists(p:Persona, listPpl: list):
    if(type(p) != Persona):
        return -1
    if(type(listPpl) != list):
        return -1
    
    for item in listPpl:
        if(item.nome == p.nome):
            if(item.cognome == p.cognome):
                return listPpl.index(item)
            else: return -1
        else: return -1

def CreatePersona():
    Nome = input("Inserisci nome")
    Cognome = input("Inserisci Cognome")
    p = Persona(Nome,Cognome)
    return p

def hihi():
    print("hihi")