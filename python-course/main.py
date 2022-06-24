# Con hashtag si aggiungo i commenti



#tipi di variaibili in python

# str: x  = "ciao"
# int: x = 1
# float: x = 2.2
# bool: x = True - False (non in miniuscolo)

# list: x = ["Milan", "Rome", "Napoli"]                          -> Normalissima lista come in c# e typescript.
# tuple: x  = ("Roma", "Milan", "Napoli")                        -> a che serve?
# range: x  = range(6)                                           -> genera tutti i numeri da 0 a 6
# dict: x = {"Items": items, "SelectedItem": SelectedItem}       -> Dizionario.
# set: x = {"roma", "milano", "napoli"}                          -> a che serve?



#In Python non è possibile dichiarare variabili senza dargli un valore. In python è possibile eseguire assegnazioni multiple.
#In Python inoltre se non si assegna alcun "tipo" alla variabile quest'ultima sarà una """any"""
#L'indendazione è molto importante se scriviamo x,y,z non funziona -> errore di indendazione. 
x, y, z = 1,2,3

print(x ,y, z)

#assegnare lo stesso valore a tre diverse variabili
x = y = z = 4
print(x, y, z)

#prendere valori da un array (statico) in realtà nun se fa così.
cities = ["Rome","Milan", "Napoli"]
x, y, z = cities
print(x, y ,z)

# userInput è una variabile e input assegna il valore scritto dall'utente in _userInput.
userInput = input("Write something :")
print(userInput)



#Castings

# str() -> trasforma gli altri tipi in stringa.
# int() -> trasforma stringe in int
# float() -> trasforma una stringa/int in float.

#In Python non si possono fare le concatenazione come mostrate sotto tra due "tipi" diversi (in c#/typescript l'output sarebbe la concatenazione)
# x = 5
# y = "5"
# print(y + 5) -> TUONA NUN SE PO FA.

#Esempio corretto ->
x = 5
y = "Ciao sono: "
print(y + str(x))



#Stringhe (!Importanti!)

#In Python per scrivere su piu righe una stringa serve il tripo """ """ <- così possiamo scrivere su più righe (in c# si usa @"" )

x = """ciao mondo bellissimo
posso andare a capo!"""
print(x)

#In Python per prendere parti di stringa (substring) si fa in questo modo str[0:5] <- prenderà i primi 4 (5 non compreso) chars della stringa. (es1)
#oppure si può fare str[2:] <- prenderà dai primi due caratteri fino a fine stringa. (es2)
#oppure si può fare str[2:4] <-prenderà solo i primi due valori + gli altri due successivi (es3)
#oppure si possono prendere le stringhe al contrario str[-5:]. Con gli indici negativi si parte sempre da -1(es4)

x = "ciao mondo"
print(x[:5]) # <- stamperà solo ciao.
x ="ciao mondo bello"
print(x[2:]) # <- stamperà solamente ao mondo bello

x ="ciao mondo"
print(x[2:8]) # <- stamperà ao mon

x = "ciao mondo"
print(x[-5:])  # <- stamperà solo mondo

#In Python per togliere gli spazi alla fine ed inzio stringa si utilizza il metodo strip()
x = " ciao mondo "
print(x.strip())

#In Python nelle stringhe possono esserci i placeholders (come in c#) e si definiscono cosi "ciao mondo {}" il "{}" verrà poi sostituito come mostrato. (In c# usiamo {1})
#Anche se abbiamo molteplici placeholders possiamo sempre utilizzare "{}".
#Si può anche fare come in c# che si utilizza {1}, {2}, {3} se è piu facile.
x = "Ciao Mondo di {}" 
print(x.format("patty"))

x ="Ciao Mondo di {1} sono alto {0}"
print(x.format(1.70, "patty"))

#In Pyton si può effettuare l'escape dei caratteri in caso si debba scrivere qualcosa con doppie virgolette o singole, come sotto:

x = "Cio sono \"Bello\""
print(x) # il risultato sarà "Ciao sono "bello" "



# Boolean
#In Python si utilizza True e False (non in minuscolo come C# o typescript)

x = True
x = False

#Operatori Artimetici in Python

#Gli operatori artimetci sono  +, - , * , % , ** (potenza) e // 
#Inoltre esistono i metodi min(), max(), abs() e pow() come da esempio sotto.

print(min(1,2,3,9)) # <- ritorna 1
print(max(1,2,3,9)) # <- ritorna 9
print(abs(-9.9)) # <- ritorna 9.
print(pow(10,2))# <- 10 alla seconda.


#Condizioni If Else e ElIf (else if)

x = 11
y = 10
z = 5
if x < y:
    print("[IF] {} è minore di {}".format(x,y))
elif x > z:
    print("[ELFIF] {} è minore di {}".format(x,z))
else:
    print("[ELSE] {} non è minore di {}".format(x,y))


# Invece di usare and e or si fa cosi
if 10 <= x <= 20:
    print("[IF] {0} è compreso".format(x))
else:
    print("[ELSE]: {0} non è compreso".format(x))

#Utilizzando and e or
if x >= 10 and x <= 20:
      print("[IF con AND] {0} è compreso".format(x))
else:
    print("[ELSE con AND]: {0} non è compreso".format(x))



#Ciclo While -> normale come tutti gli altri while.
x = 40
while x < 50:
    print(x)
    x = x+1


#Ciclo For

for city in cities:
    print(city)

x = range(6)
for num in x:
    print(num)


#12 Introduzione teorica a collezioni di dati
#-indicizzato: accedere agli elementi tramite indice (index)
#-modificabile: possiamo aggiungere, cambiare e rimuovere elementi una volta creata la collezione
#-immutabile; non possiamo aggiungere, cambiare e rimuovere elementi
#-permette duplicati: possono esserci più elementi con lo stesso valore
#Le liste sono col lezioni ordinate e modificabili. Permettono duplicati
#Le tuple sono collezioni ordinate ma immutabili. Per•mettono duplicati
#set sono collezioni non ordinate e perciò non indicizzate. Non permettono duplicati
#I dictionary sono collezioni ordinate• e —Mificabili (dalla versione 3.7). Non permettono duplicati


#14 tuple non modificabili e permettono duplicati
#modificare e inserire elementi: non possibile se non con escaetage
#Rimuovere elementi con escanotage oppure cancellare tutto con del()
#Spacchettare una tupia (unpack) normale e con *
#unire tuple con +
#Metodi count() e index()


#set
#- Collezioni di dati non ordinate, non indicizzate,
#- Creare una tupla, normale e mischiata
#- Vediamo len(), type() e set()
#- Accedere agli elementi con loop
#- non modificabili e non permettono duplicati
# Modificare elementi non possibile, possiamo solo aggiungere e rimuovere
# Aggiungere elementi add(), update()
# Rimuovere elementi con remove(), discard(), pop(), clear(), del
# Unire con union() e update(). intersection().



# FUNZIONI
# PAROLA CHIAVE DEF

print("Funzioni")

def Somma(a,b):
    return a+b

def SommaArgs(*args): # *agrs significa quanti parametr vogliamo.
    res = 0
    for item in args:
        res += item
    return res

def Summa(val1, val2):
    return val1+val2

def SommaDefaultParam(a = 1, b =2):
    return a+b


print(Somma(4,5))

print(SommaArgs(1,2,3,4,5,6,7))

print(Summa(val2=1, val1=4))

print(SommaDefaultParam())


import supportModule as supp #importo tutto 
# Classi e Oggetti
# il costruttore si dichiara con __int__(self, parametri)
# ogni metodo nella classe deve passarsi self per avere i dati dell'oggetto
# se creo un nuovo metodo non devo passargli self se lo richiamo all'esterno della classe. Es:  persona.Saluta() -> ma la definizione di Saluta è def Saluta(self)


persona =supp.Persona("papa", "bergoglio")

print(persona.nome + " " + persona.cognome)
persona.Saluta()


class Sviluppatore(supp.Persona): #(Persona) significa che estende una classe.
    def __init__(self,nome,cognome, architettura):
        super().__init__(nome,cognome)
        self.architettura = architettura
    def Saluta(self):
        print("override del metodo saluta!")


dev = Sviluppatore("pippo", "franco", "java")
print(dev.nome + " " + dev.cognome + " " + dev.architettura)
dev.Saluta()


# Scope -> da vedere come pippo chiamato esternamente e poi usato global Pippo per richiamarlo è possibile modificarlo.

pippo = "pippo"

def egScope():
    global pippo
    pippo = "pluto"

egScope()
print(pippo)



# Modules


import math
import datetime as dt


supp.Saluta()

print(math.floor(100.44))
print(math.pi)


# per formattare una data come si vuole si utilizza  _date.strftime( placeholders per formattare)
_date = dt.datetime.now().day
print(_date)


# PIP
# In python per installare i pacchetti si usa pip (Nuget package in c#)


# try e except

try:
    print("a" + 5) # errore non si può concatenare così stringa e int
except:
    print("Something went wront")


listPerson = list()
print("================USER APPLICATION =====================")
tup = ("Aggiungi [0], Modifica[1], Elimina[2], Stampa Lista [3], Esci[4]")
while(True):
 
    print("Cosa vuoi fare? " + str(tup))
    userInput = input()
    try:
        valUserInput = int(userInput)
        print(valUserInput)
        print(type(valUserInput))
    except:
        print("Valore non valido, quitting.")


    if(valUserInput == 0):
        p = supp.CreatePersona()
        listPerson.append(p)
    elif(valUserInput == 1):
        p = supp.CreatePersona()
        canUserModify = supp.CheckIfExists(p, listPerson)
        print(canUserModify)
        if(canUserModify >= 0):
            p = supp.CreatePersona()
            listPerson[canUserModify].nome = p.nome
            listPerson[canUserModify].cognome = p.cognome
    elif(valUserInput == 2):
        p = supp.CreatePersona()
        canUserModify = supp.CheckIfExists(p, listPerson)
        if(canUserModify >= 0):
            listPerson.pop(canUserModify)
        if(canUserModify > 0):
            listPerson.remove(canUserModify)
    elif(valUserInput == 3):
        supp.printItems(listPerson)
    elif(valUserInput == 4):
        break
    else:
        break


        
