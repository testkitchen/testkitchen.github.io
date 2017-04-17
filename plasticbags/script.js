/*enter key*/
document.getElementById("myNumber")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        myFunction();
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
multiplyNode(document.querySelector('.paper'), 20, true);
multiplyNode(document.querySelector('.paper2'), 20, true);
multiplyNode(document.querySelector('.paper3'), 20, true);


/*hide show prompt answer and input light values*/
function myFunction() {
    var x = document.getElementById("myNumber").value;
    var y = x - 1000;
    var z = x - 500;
  
    document.getElementById("answer").style.display = 'block';
    $('body').height(26000);
    document.getElementById("correction").innerHTML = "<h1>" + "You said: " + x + "</h1>";

    if (x > 0 && x <= 500) {
      document.getElementById("prompt").style.visibility = 'hidden';
      document.getElementById("answer").style.visibility = 'visible';
      multiplyNode(document.querySelector('.bulb'), x, true);
      document.getElementById("tungsten2").style.visibility = 'hidden';
      document.getElementById("tungsten3").style.visibility = 'hidden';

}
    else if (x > 500 && x <= 1000) {
      document.getElementById("tungsten3").style.visibility = 'hidden';
      document.getElementById("prompt").style.visibility = 'hidden';
      document.getElementById("answer").style.visibility = 'visible';
      multiplyNode(document.querySelector('.bulb'), 500, true);
      multiplyNode(document.querySelector('.tungsten'), z, true);
}
    else if (x > 1000 && x <= 1500) {
      document.getElementById("prompt").style.visibility = 'hidden';
      document.getElementById("answer").style.visibility = 'visible';
      multiplyNode(document.querySelector('.bulb'), 500, true);
      multiplyNode(document.querySelector('.tungsten'), 500, true);
      multiplyNode(document.querySelector('#tungsten3'), y, true);
}
    else (
      document.getElementById("warning").innerHTML = "Try a lower number!"
)
};

var counter = 0;
var txt = "";
while (counter != 500) {
  counter = counter + 1;
  var wrapper = "<div>" + counter + "</div>";
  txt = txt + wrapper;
  document.getElementById("numeros").innerHTML = txt;
};

var counter2 = 500;
var txt2 = "";
while (counter2 != 1000) {
  counter2 = counter2 + 1;
  var wrapper = "<div>" + counter2 + "</div>";
  txt2 = txt2 + wrapper;
  document.getElementById("numeros2").innerHTML = txt2;
};

var counter3 = 1000;
var txt3 = "";
while (counter3 != 1500) {
  counter3 = counter3 + 1;
  var wrapper = "<div>" + counter3 + "</div>";
  txt3 = txt3 + wrapper;
  document.getElementById("numeros3").innerHTML = txt3;
};







