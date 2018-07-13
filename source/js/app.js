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

var a = [1,2,3,4,5,6,7,8,9];

delete a[0];

console.log(a);
alert('hello')