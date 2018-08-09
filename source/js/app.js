$(document).ready(function(){

})
/*var shipping_method
var form = document.forms.shipping;
var elem = form.elements;
for(i = 0; i < elem.length; i++){
	if(elem[i].checked) {shipping_method = elem[i].value}
}
console.log(shipping_method);
*/
/*var formName;
var form = document.forms.fio;
var elem = form.elements;
for(i = 0; i < elem.length; i++){
	console.log(elem[i].value)
}*/

function getSelectedText(){
	if(window.getSelection){
		return window.getSelection().toString();
	} else if(document.selection){
		return document.selection.createRange().text;
	}
}
getSelectedText();


function inputValidation(){
  var inputelts = document.getElementsByTagName('input');

  for(var i = 0; i < inputelts.length; i++){
    var elt = inputelts[i];

    if(elt.type != 'text' || !elt.getAttribute('data-allowed-chars')){
      continue;
    }

    if(elt.addEventListener){
      elt.addEventListener('keypress', filter, false);
      elt.addEventListener('taxtInput', filter, false);
      elt.addEventListener('textinput', filter, false);
    } else {
      elt.attachEvent('onkeypress', filter);
    }
  }

  function filter(event){
    var e = event || window.event;
    var target = e.target || e.srcElement;
    var text = null;

    if(e.type === 'textinput' || e.type === 'textInput') text = e.data;
    else{
      var code = e.charCode || e.keyCode;

      if(code < 32 || e.charCode == 0 || e.ctrlKey || e.altKey) return;

      var text = String.fromCharCode(code);
    }
    var allowed = target.getAttribute('data-allowed-chars');
    var messageid = target.getAttribute('data-messageid');
    if(messageid){
      var messageElement = document.getElementById(messageid);
    }
    for(var i = 0; i < text.length; i++){
      var c = text.charAt(i);
      if(allowed.indexOf(c) == -1){
        if(messageElement) messageElement.style.visibility = 'visible';

        if(e.preventDefault) e.preventDefault();

        if(e.returnValue) e.returnValue = false;
        return false;
      }
    }
    if(messageElement) messageElement.style.visibility = 'hidden';
  }
}
inputValidation();




// Radial svg diagram

function pieChart(data, width, height, cx, cy, r, colors, labels, lx, ly){
  var svgns = 'http://www.w3.org/2000/svg';

  var chart = document.createElementNS(svgns,'svg:svg');
  chart.setAttribute('width', width);
  chart.setAttribute('height', height);
  chart.setAttribute('viewBox','0 0 ' + width + ' ' + height);

  var total = 0;
  for(var i = 0; i < data.length; i++){
    total += data[i];
  }

  var angles = [];
  for(var i = 0; i < data.length; i++){
    angles[i] = data[i]/total * Math.PI * 2;
  }

  startangle = 0;
  for(var i = 0; i < data.length; i++){
    var endangle = startangle + angles[i];

    var x1 = cx + r * Math.sin(startangle);
    var y1 = cy - r * Math.cos(startangle);
    var x2 = cx + r * Math.sin(endangle);
    var y2 = cy - r * Math.cos(endangle);

    var big = 0;
    if(endangle - startangle > Math.PI) big = 1;

    var path = document.createElementNS(svgns, 'path');

    var d = 'M ' + cx + ',' + cy + ' L ' + x1 + ',' + y1 + ' A ' + r +
    ',' + r + ' 0 ' + big + ' 1 ' + x2 + ',' + y2 + ' Z';

    path.setAttribute('d', d);
    path.setAttribute('fill', colors[i]);
    path.setAttribute('stroke', 'black');
    path.setAttribute('stroke-width', '2');
    chart.appendChild(path);

    startangle = endangle;

    var icon = document.createElementNS(svgns, 'rect');
    icon.setAttribute('x', lx);
    icon.setAttribute('y', ly + 30 * i);
    icon.setAttribute('width', 20);
    icon.setAttribute('height', 20);
    icon.setAttribute('fill', colors[i]);
    icon.setAttribute('stroke', 'black');
    icon.setAttribute('stroke-width', '2');
    chart.appendChild(icon);

    var label = document.createElementNS(svgns, 'text');
    label.setAttribute('x' , lx + 30);
    label.setAttribute('y' , ly + 30 * i + 18);
    label.appendChild(document.createTextNode(labels[i]));
    chart.appendChild(label);
  }
  return chart;
}

var section = document.getElementById('section-3');
section.appendChild(pieChart([12, 23, 34, 45],
    640, 400, 200, 200, 150,
    ['red','blue', 'yellow', 'green'],
    ['Север', 'Юг', 'Восток', 'Запад'], 400, 100),false);

var canvas = document.getElementById('my_canvas_id');
var c = canvas.getContext('2d');

c.beginPath();
c.moveTo(400, 0);
c.lineTo(400, 50);
c.lineTo(350, 50);
c.lineTo(350, 0);
c.closePath();


c.fillStyle = '#c3c3c3';
c.strokeStyle = '#000';
c.lineWidth = 1;
c.fill();
c.stroke();