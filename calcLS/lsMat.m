%org=load('data.txt')
%x=org(:,1)
%y=org(:,2)
x=[1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20].';
y=[145.99494818877 , 58.2590630773676 , 76.4207329339647 , 62.8751326888078 , 36.2950684033096 , 21.0004054753462 , 25.3306660996471 , 11.1749955154912 , 7.84859691498798 , 8.77544295335203 , 8.28997409157659 , 17.4612629681508 , 15.4891812546653 , 32.2315254286014 , 27.4473909258444 , 66.8651433712606 , 81.6731281026506 , 43.7970898817872 , 120.715373466703 , 77.3675512349056 ].';
X=[x.^2,x,ones(length(x),1)]
XX=X'*X
XY = X'*y
inv(XX)*XY

%XX
%   722666    44100     2870
%    44100     2870      210
%     2870      210       20

%inv(XX)
%   0.000056961  -0.001196172   0.004385965
%  -0.001196172   0.026623377  -0.107894737
%   0.004385965  -0.107894737   0.553508772

%XY
%   155275.23000
%     9928.75000
%      945.33000

%inv(XX)*XY
%     1.1143
%   -23.3952
%   133.0203
