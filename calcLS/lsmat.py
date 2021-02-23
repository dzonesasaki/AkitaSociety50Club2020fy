import numpy as np

org=np.loadtxt('data.txt')
x=org[:,0]
y=org[:,1]
X = np.ones([3,len(x)])
X[0,:]=x**2
X[1,:]=x**1
#X=np.array([x**2,x,np.ones([1,len(x)])])
XX=X @ X.T
XY=X @ y.T
coef=np.linalg.inv(XX).T @ XY

#XX
#array([[7.22666e+05, 4.41000e+04, 2.87000e+03],
#       [4.41000e+04, 2.87000e+03, 2.10000e+02],
#       [2.87000e+03, 2.10000e+02, 2.00000e+01]])
#XY
#array([155275.23,   9928.75,    945.33])
#coef
#array([  1.11425666, -23.39520198, 133.02028947])
