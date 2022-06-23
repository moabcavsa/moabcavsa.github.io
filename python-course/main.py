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