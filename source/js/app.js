$(document).ready(function(){

})


/*var strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", "8-()"
];

function unique(arr){
	var obj = {};
	for(var i = 0; i < arr.length; i++){
		var sorted = arr[i];

		obj[sorted] = arr[i];
	}

	var result = [];

	for(var key in obj) result.push(obj[key]);

	return result;
}
console.log(unique(strings));*/

/*var arr = ['Apple', 'Orange', 'Pinapple'];

arr.forEach(function(item, i, arr){
	console.log(i + ': ' + item + ' (array:' + arr + ')')
});*/

/*var arr = ["Есть", "жизнь", "на", "Марсе"];

var stringsLength = arr.map(function(name){
	return name.length;
})

console.log(stringsLength);*/


/*var arr = [-2,-1,0,1];

function getSums(arr){
	var sums = [];
	var totalResult = arr.reduce(function(sum, current){
		sums.push(sum);
		return sum + current;
	})
	sums.push(totalResult)
	console.log(sums);
}
console.log(getSums(arr));*/

/*function f(x){
	arguments.length ? 1 : 0;
}*/

/*function sum(){
	var sum = 0;
	for(var i = 0; i < arguments.length; i++){
		sum += arguments[i];
	}
	console.log(sum);
}

sum(1,2,3);*/

/*var now = new Date(2012, 0, 3);

function getLocalDay(date){
	var days = ['пн','вт','ср','чт','пт','сб','вс'];
	console.log(days[date.getDay()]);
	return days[date.getDay()];
}

getLocalDay(now);*/

/*function getSecondsToday(){
	var now = new Date();
	var currentYear = now.getFullYear();
	var currentMont = now.getMonth();
	var currentDay = now.getDate();
	var startDay = new Date(currentYear, currentMont, currentDay, 0, 0, 0, 0);
	return (now- startDay) / 1000;
}
console.log(getSecondsToday());*/

/*var date = new Date(2014,0,30);

function formatDate(date){
	console.log(date
		.toLocaleString('ru', {day: 'numeric', month: 'numeric', year: 'numeric'}))
}

formatDate(date);*/

/*function sum(a){
	return function(b){
		return a + b;
	};
}

console.log(sum(1)(2));*/

function makeBuffer(){
	var currentBuffer = '';

	function buffer(piece){
		if(arguments.length == 0){
			return currentBuffer;
		}
		currentBuffer += piece;
	}
	buffer.clean = function(){
		currentBuffer = '';
	}
	return buffer;
}

var buffer = makeBuffer();

buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');
buffer.clean();

console.log( buffer() );