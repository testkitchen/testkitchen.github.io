/*enter key*/
document.getElementById("myNumber")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        myFunction(); myError();
    }
});

function maxLengthCheck(object) {
  if (object.value.length > object.maxLength)
    object.value = object.value.slice(0, object.maxLength)
}

function isNumeric (evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode (key);
  var regex = /[0-9]|\./;
  if ( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
};

/*duplicate outline*/
function multiplyNode(node, count, deep) {
    for (var i = 0, copy; i < count - 1; i++) {
        copy = node.cloneNode(deep);
        node.parentNode.insertBefore(copy, node);
    }
}
multiplyNode(document.querySelector('.paper'), 12, true);
multiplyNode(document.querySelector('.paper2'), 16, true);
multiplyNode(document.querySelector('.paper3'), 16, true);
multiplyNode(document.querySelector('.paper4'), 16, true);



/*hide show prompt answer and input light values & pym*/
function myFunction() {
    var x = document.getElementById("myNumber").value;
    var y = x - 700;
    var z = x - 300;
    var e = x - 1100;
    document.getElementById("answer").style.display = 'block';
    document.getElementById("correction").innerHTML = "<h1>" + "You said: " + x + "</h1>";
    

    if( x >=0, x<=0) {
      $('body').height(27800);
      pymChild.sendHeight();
      document.getElementById("prompt").style.visibility = 'hidden';
      document.getElementById("answer").style.visibility = 'visible';
      document.getElementById("roof").style.visibility = 'hidden';
    }
    else if (x > 0 && x <= 300) {
      $('body').height(27800);
      pymChild.sendHeight();

      document.getElementById("prompt").style.visibility = 'hidden';
      document.getElementById("answer").style.visibility = 'visible';
      multiplyNode(document.querySelector('.bulb'), x, true);
      document.getElementById("tungsten2").style.visibility = 'hidden';
      document.getElementById("tungsten3").style.visibility = 'hidden';
      document.getElementById("tungsten4").style.visibility = 'hidden';

}
    else if (x > 300 && x <= 700) {
      $('body').height(27800);
      pymChild.sendHeight();

      document.getElementById("tungsten4").style.visibility = 'hidden';
      document.getElementById("tungsten3").style.visibility = 'hidden';
      document.getElementById("prompt").style.visibility = 'hidden';
      document.getElementById("answer").style.visibility = 'visible';
      multiplyNode(document.querySelector('.bulb'), 300, true);
      multiplyNode(document.querySelector('.tungsten'), z, true);
}
    else if (x > 700 && x <= 1100) {
      $('body').height(27800);
      pymChild.sendHeight();

      document.getElementById("tungsten4").style.visibility = 'hidden';
      document.getElementById("prompt").style.visibility = 'hidden';
      document.getElementById("answer").style.visibility = 'visible';
      multiplyNode(document.querySelector('.bulb'), 300, true);
      multiplyNode(document.querySelector('.tungsten'), 400, true);
      multiplyNode(document.querySelector('#tungsten3'), y, true);
}
    else if (x > 1100 && x <= 1500) {
      $('body').height(27800);
      pymChild.sendHeight();
      
      document.getElementById("prompt").style.visibility = 'hidden';
      document.getElementById("answer").style.visibility = 'visible';
      multiplyNode(document.querySelector('.bulb'), 300, true);
      multiplyNode(document.querySelector('.tungsten'), 400, true);
      multiplyNode(document.querySelector('#tungsten3'), 400, true);
      multiplyNode(document.querySelector('#tungsten4'), e, true);
}
    else (
      document.getElementById("warning").innerHTML = "Try a lower number!"
)
};

/*go to next page function*/
var m = [0];
function myError() {

    m[m.length] = [1];
    var sum = m.reduce(function(m, b) { return m + b; }, 0);
  
    if (sum >= 20) {
      $('body').height(27800);
      pymChild.sendHeight();
      document.getElementById("prompt").style.visibility = 'hidden';
      document.getElementById("answer").style.visibility = 'visible';
      document.getElementById("roof").style.visibility = 'hidden';

    }
}

var counter = 0;
var txt = "";
while (counter != 300) {
  counter = counter + 1;
  var wrapper = "<div>" + counter + "</div>";
  txt = txt + wrapper;
  document.getElementById("numeros").innerHTML = txt;
};

var counter2 = 300;
var txt2 = "";
while (counter2 != 700) {
  counter2 = counter2 + 1;
  var wrapper = "<div>" + counter2 + "</div>";
  txt2 = txt2 + wrapper;
  document.getElementById("numeros2").innerHTML = txt2;
};

var counter3 = 700;
var txt3 = "";
while (counter3 != 1100) {
  counter3 = counter3 + 1;
  var wrapper = "<div>" + counter3 + "</div>";
  txt3 = txt3 + wrapper;
  document.getElementById("numeros3").innerHTML = txt3;
};

var counter4 = 1100;
var txt4 = "";
while (counter4 != 1500) {
  counter4 = counter4 + 1;
  var wrapper = "<div>" + counter4 + "</div>";
  txt4 = txt4 + wrapper;
  document.getElementById("numeros4").innerHTML = txt4;
};





