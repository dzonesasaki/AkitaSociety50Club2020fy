import numpy as np

#org=np.loadtxt('data.txt')
#x=org[:,0]
#y=org[:,1]
x=np.array([1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20],dtype='float32')
y=np.array([145.99494818877 , 58.2590630773676 , 76.4207329339647 , 62.8751326888078 , 36.2950684033096 , 21.0004054753462 , 25.3306660996471 , 11.1749955154912 , 7.84859691498798 , 8.77544295335203 , 8.28997409157659 , 17.4612629681508 , 15.4891812546653 , 32.2315254286014 , 27.4473909258444 , 66.8651433712606 , 81.6731281026506 , 43.7970898817872 , 120.715373466703 , 77.3675512349056],dtype='float32')

X = np.ones([3,len(x)])
X[0,:]=x**2
X[1,:]=x**1
#X=np.array([x**2,x,np.ones([1,len(x)])])
XX=X @ X.T
XY=X @ y.T
coef=np.linalg.inv(XX).T @ XY
print(coef)
#XX
#array([[7.22666e+05, 4.41000e+04, 2.87000e+03],
#       [4.41000e+04, 2.87000e+03, 2.10000e+02],
#       [2.87000e+03, 2.10000e+02, 2.00000e+01]])
#XY
#array([155275.23,   9928.75,    945.33])
#coef
#array([  1.11425666, -23.39520198, 133.02028947])
