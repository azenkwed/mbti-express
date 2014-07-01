var formData = {"1.0":"j","2.1":"j","3.2":"n","27.0":"i","28.1":"j","29.2":"s","59.0":"j","60.1":"i","61.2":"n","79.0":"n","80.1":"f","81.2":"f"}

/* MBTI LOGIC */
var E = 0, I = 0, N = 0 , S = 0, T = 0, F = 0, P = 0, J = 0;

for ( var key in formData) {
	if (formData[key] === 'e' ) E++;
	if (formData[key] === 'i' ) I++;
	if (formData[key] === 'n' ) N++;
	if (formData[key] === 's' ) S++;
	if (formData[key] === 't' ) T++;
	if (formData[key] === 'f' ) F++;
	if (formData[key] === 'p' ) P++;
	if (formData[key] === 'j' ) J++;
};
//console.log( "\nE = " +  E + "\nI = " +  I + "\nN = " +  N + "\nS = " +  S + "\nT = " +  T + "\nF = " +  F + "\nP = " +  P + "\nJ = " +  J  );

var str1 = '', str2 = '', str3 = '', str4 = '';
if (E === I || E < I) str1 = 'I'; else srt1 = 'E';
if (S === N || S < N) str2 = 'N'; else str2 = 'S';
if (T === F || T < F) str3 = 'F'; else str3 = 'T';
if (J === P || J < P) str4 = 'P'; else str4 = 'J';
var result = str1.concat(str2, str3, str4);
/*
console.log("result: " + result 
	+ "\nstr1: " + str1
	+ "\nstr2: " + str2
	+ "\nstr3: " + str3
	+ "\nstr4: " + str4
);*/