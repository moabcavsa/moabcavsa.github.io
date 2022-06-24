import numpy as np

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

print(arr3d[-1, -1, -3]) # 10
print(arr3d[0, -2, -2]) #2
