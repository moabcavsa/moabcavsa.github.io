from this import s
import numpy as np


# gli array dimensionali devono avere la stessa dimensione [1,2,3] [4,5,6] ! ERRORE: [1,2,3,4] [5,6,7]
arr = np.array([1,2,3,4,5]) #1d array
# print(arr*5) # ogni valore all'interno della lista è moltplicato per 5.

arr2d = np.array([ [1,2,3,4,5,6], 
                   [1,2,3,4,5,6] 
                ]) #2d array

arr3d = np.array([ [ [1,2,3,4,5],[1,2,3,4,5] ],
                   [ [1,2,3,4,5],[1,2,3,4,5] ]
                 ]) #3d array

arr4d = np.array([1,2,3], ndmin=4)

print(arr2d)
print("#######################")
print(arr3d)
print("#######################")
print(arr4d)

arrArange = np.arange(5,50,5) # crea un arange (array-range) da uno a 5 saltando a 5 alla volta quindi [5,10,15,20,25,30,35,40,45]
print(arrArange)

arrZeros = np.zeros(4) # crea un array di quanti zero vuoi.
print(arrZeros)
print("#######################")
arrZeros = np.zeros((2,2,1)) # crea un array di zero di 3d
print(arrZeros)

arrOnes = np.ones((2,2,1)) # crea un array di 1 di 3d

arr2d = np.array([[1,2,3], [4,5,6]])

print(arr2d[0,1]) #attendo 2
print(arr2d[1,2]) #attendo 6
print("#######################")

arr3d = np.array([[[1,2,3],[4,5,6]   ], #riga 0 -> array 0 (0d)[1,2,3] - array 1 (1d) [4,5,6]
                  [[7,8,9],[10,11,12]]  #riga 2 -> array 0 (2d) [7,8,9] - array 1 (3d) [10,11,12]
                ])

print(arr3d[0,0,2]) #3
print(arr3d[0,1,2]) #6
print(arr3d[1,0,1]) #8
print(arr3d[1,1,0]) #10

print("prendendoli al contrario")

print(arr3d[-1, -1, -3]) #10
print(arr3d[0, -2, -2]) #2


# slice array numpy

print(arr3d[0,0, 1:]) # prende i valori [2,3] dell array 0 in riga 0. 


# Tipi Dati di NumPy.
# In NumPy ci sono oltre a quelly di Python altri tipi di variabili (guarda doc. NumPy)
# In NumPy per sapere di che tipo è l'array basta utilizzare .dtype.
# Si può castare un array con  il metodo asType(int)

arr = np.array(["1", "2", "3"], dtype='S')
arr = arr.astype(int)
print(arr)
 
# View e Copy di NumPy

#View -> serve per dare ad una variabile l'indirizzo di memoria dell'array 'visto'. Se si modifica l'array 'visto' anche l'array che abbiamo ricevuto dalla view cambierà.
#Copy -> crea una copia in un altra allocazione di memoria dell'array.


arrView = arr.view()
arrCopy = arr.copy()

arr[0] = 9
print(arr) # ritorna 9,2,3
print(arrView) # ritorna 9,2,3
print(arrCopy) # ritorna 1,2,3

arrView[0] = 11 

print(arr)
print(arrView)
# stamperanno lo stesso valore dato che arrView ha solo l'allocazione di memoria di arr

#Check per vedere il proprietario si usa il metodo .base

print(arr.base) #nulla perchè è propriatario.
print(arrCopy.base) #nulla perchè è proprietario (copiato)
print(arrView.base) # ci da l'array perchè non è proprietario(view)



#Shape e ReShape
#In NumyPy shape ci dice la forma del nostro array.
#Invece il Reshape ci fa cambiare forma al nostro array da 1d-2d da 1d-3d oppure a 0d.
# Se l'array ha dimensioni sconosciute possiamo utilizzare -1 per definire che lo deve calcolare lui dato altri numeri.
# flattening (spianare l'array) -> da array nD ad un array 1d.

arr = np.array([1,2,3,4,5,6,7,8,9,10,11,12])

print(arr.shape)
print(arr3d.shape)
print("========================RESHAPE===========================")
print(arr.reshape(4,3)) #2D
print("==================3d==============")
print(arr.reshape(2,3,2)) #3d
print("==================-1==============")
print(arr.reshape(3,2,2))
print("==============FLAT ARRAY==============")
print(arr3d.flatten())


print("========================Iterare===========================")
#Iterare gli array di NumPy

arr = np.array([[[1,2,3,4,5,6,7,8,9,10], [11,12,13,14,15,16,17,18,19,20]] ,
                [[21,22,23,24,25,26,27,28,29,30], [31,32,33,34,35,36,37,38,39,40]]
               ])
print(arr.shape)

#iterare array
for x in np.nditer(arr,flags=['buffered'], op_dtypes=['S']): #significa che buffered userà l'array in uso (NON LO MODIFICA) e modificherà l'output in stringa.
    print(x)

print("========================Iterare con steps===========================")

for x in np.nditer(arr[:,::2]): #significa che buffered userà l'array in uso (NON LO MODIFICA) e modificherà l'output in stringa.
    print(x)

for index, x in np.ndenumerate(arr): #significa prendere index + valore
    print(index,x)
