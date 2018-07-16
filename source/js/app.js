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

var a = [1,2,3,4,5,'asdf',6,7,'asdf',8,'asdf',9];
/*var i;
var total = 0

for(i = 0; i < a.length; i++){
	console.log(a[i]);
}*/

delete a[0];
console.log(a);