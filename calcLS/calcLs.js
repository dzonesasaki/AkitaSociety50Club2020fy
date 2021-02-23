
//calcLs.js

var x=[1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20];
var y=[145.99494818877 , 58.2590630773676 , 76.4207329339647 , 62.8751326888078 , 36.2950684033096 , 21.0004054753462 , 25.3306660996471 , 11.1749955154912 , 7.84859691498798 , 8.77544295335203 , 8.28997409157659 , 17.4612629681508 , 15.4891812546653 , 32.2315254286014 , 27.4473909258444 , 66.8651433712606 , 81.6731281026506 , 43.7970898817872 , 120.715373466703 , 77.3675512349056 ];
mainLS(x,y);

function mainLS(x,y){
	var Ndat = x.length;
	let Nord = 2;// 2nd order
	let Nmat = Nord+1;
	
	var XX = [[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]];
	// var XX = new Array(3); for(let lp = 0; lp < Nmat; lp++) { XX[lp] = new Array(3).fill(0);}
	var IX = [[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]];
	var XY = [0.0,0.0,0.0];
	var A = [0.0,0.0,0.0];
	
	makeXX(x,XX);
	makeXY(x,y,XY);
	invertMat(XX,IX);
	prodIXXY(IX,XY,A);
	
	console.log(XX)
	console.log(calcDet(XX))
	console.log(IX)
	console.log(A)
}


function makeXX(x,XX){
	XX[0][0] = sumpow4(x);
	XX[0][1] = sumpow3(x);
	XX[0][2] = sumpow2(x);
	XX[1][0] = XX[0][1];
	XX[1][1] = XX[0][2] ;
	XX[1][2] = sumAry(x);
	XX[2][0] = XX[0][2];
	XX[2][1] = XX[1][2] ;
	var Ndat = x.length;
	XX[2][2] = Ndat;
}

function makeXY(x,y,XY){
	var Ndat = x.length;
	tmpsumA=0;
	tmpsumB=0;
	tmpsumC=0;
	for(uilp=0;uilp<Ndat;uilp++){
		tmpsumA += x[uilp]*x[uilp]*y[uilp];
		tmpsumB += x[uilp]*y[uilp];
		tmpsumC += y[uilp];
	}
	XY[0]=tmpsumA;
	XY[1]=tmpsumB;
	XY[2]=tmpsumC;
}


function invertMat(XX,IX){
	var det = calcDet(XX);

	IX[0][0] = (XX[1][1] * XX[2][2] - XX[1][2] * XX[2][1] )/det;
	IX[1][0] = (XX[1][2] * XX[2][0] - XX[1][0] * XX[2][2] )/det;
	IX[2][0] = (XX[1][0] * XX[2][1] - XX[1][1] * XX[2][0] )/det;
	IX[0][1] = (XX[0][2] * XX[2][1] - XX[0][1] * XX[2][2] )/det;
	IX[0][2] = (XX[0][1] * XX[1][2] - XX[0][2] * XX[1][1] )/det;
	IX[1][1] = (XX[0][0] * XX[2][2] - XX[0][2] * XX[2][0] )/det;
	IX[1][2] = (XX[0][2] * XX[1][0] - XX[0][0] * XX[1][2] )/det;
	IX[2][1] = (XX[0][1] * XX[2][0] - XX[0][0] * XX[2][1] )/det;
	IX[2][2] = (XX[0][0] * XX[1][1] - XX[0][1] * XX[1][0] )/det;
}

function prodIXXY(IX,XY,A){
	A[0] = IX[0][0] * XY[0] + IX[0][1] * XY[1] + IX[0][2] * XY[2] ;
	A[1] = IX[1][0] * XY[0] + IX[1][1] * XY[1] + IX[1][2] * XY[2] ;
	A[2] = IX[2][0] * XY[0] + IX[2][1] * XY[1] + IX[2][2] * XY[2] ;
}

function calcDet(XX){
	var det = 
	  XX[0][0]*XX[1][1]*XX[2][2]
	+ XX[1][0]*XX[2][1]*XX[0][2]
	+ XX[2][0]*XX[0][1]*XX[1][2]
	- XX[0][0]*XX[2][1]*XX[1][2]
	- XX[2][0]*XX[1][1]*XX[0][2]
	- XX[1][0]*XX[0][1]*XX[2][2];
	return det;
}

function sumAry(x){
	var Ndat = x.length;
	tmpsum=0;
	for (uilp=0; uilp<Ndat;uilp++){
		tmpsum += x[uilp];
	}
	return tmpsum;
}

function sumpow2(x){
	var Ndat = x.length;
	tmpsum=0;
	for (uilp=0; uilp<Ndat;uilp++){
		tmpsum += x[uilp]*x[uilp];
	}
	return tmpsum;
}

function sumpow3(x){
	var Ndat = x.length;
	tmpsum=0;
	for (uilp=0; uilp<Ndat;uilp++){
		tmpsum += x[uilp]*x[uilp]*x[uilp];
	}
	return tmpsum;
}

function sumpow4(x){
	var Ndat = x.length;
	tmpsum=0;
	for (uilp=0; uilp<Ndat;uilp++){
		tmpsum += x[uilp]*x[uilp]*x[uilp]*x[uilp];
	}
	return tmpsum;
}

// [ [ 722666, 44100, 2870 ], [ 44100, 2870, 210 ], [ 2870, 210, 20 ] ]
// 233494800
// [
//   [
//     0.00005696058327637275,
//     -0.0011961722488038277,
//     0.0043859649122807015
//   ],
//   [
//     -0.0011961722488038277,
//     0.026623376623376622,
//     -0.10789473684210527
//   ],
//   [ 0.0043859649122807015, -0.10789473684210527, 0.5535087719298246 ]
// ]
// [ 1.114251797788059, -23.395243245210324, 133.0205547409812 ]
