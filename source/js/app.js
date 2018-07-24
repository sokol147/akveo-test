$(document).ready(function() {
  svg4everybody();
});



/*var geval = eval;
var x = 'globalX';
var y = 'globalY';

function f(){
	var x = 'localX';
	eval("x += 'changed';");
	return x;
}

function g(){
	var y = 'localY';
	geval("y += 'changed';");
	console.log(y);
	return y;
}

console.log(f(), x);
console.log(g(), y);*/

/*function typeVar(x){
	switch(typeof x){
		case 'number': console.log('This is number')
			break;
		case 'string': console.log('This is string')
			break;
		default: console.log('other type')
			break;
	}
}

typeVar()*/
/*var a = [1,2,3,4,5,6,7,8];
var b = [];

for(i = 0; i < a.length; i++){
	console.log(a[i]*2);
}
console.log(a);*/

/*var a = {a: 1, b: 2, c: 3};

for(var p in a){
	console.log(p);
}
*/

/*var a = [1,2,3,4,'hi',true,'hohoho',5,6,7];
console.log(Array.isArray(a))
var b = [];
for(var i = 0; i < a.length; i++){
	if(typeof a[i] === 'number'){
		b.push(a[i]);
	}
}
console.log(b);

var sumOfSquares = 0;
b.forEach(function(x){
	sumOfSquares += x * x;
});

console.log(sumOfSquares)*/

/*var regExpUrl = /(\w+):\/\/([\w.]+)\/(\S*)/;
var text = 'Wizit my home page https://www.instagram.com/august.sokol';
var result = text.match(regExpUrl);

if(result != null){
	var fullurl = result[0];
	var protocol = result[1];
	var host = result[2];
	var path = result[3];
}

console.log(path);*/

function displayTime(){
	var elt = document.getElementById('clock');
	var now = new Date();
	elt.innerHTML = now.toLocaleTimeString();
	setTimeout(displayTime, 1000);
}
window.onload = displayTime;