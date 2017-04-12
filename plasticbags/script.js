/*duplicate outline*/
function multiplyNode(node, count, deep) {
    for (var i = 0, copy; i < count - 1; i++) {
        copy = node.cloneNode(deep);
        node.parentNode.insertBefore(copy, node);
    }
}
multiplyNode(document.querySelector('.paper'), 500, true);
multiplyNode(document.querySelector('.paper2'), 500, true);
multiplyNode(document.querySelector('.paper3'), 500, true);


/*hide show prompt answer and input light values*/
function myFunction() {
    var x = document.getElementById("myNumber").value;
    var y = x - 1000;
    var z = x - 500;
    document.getElementById("answer").style.display = 'block';
    $('body').height(26000);
  
    if (x > 0 && x <= 500) {
      document.getElementById("prompt").style.visibility = 'hidden';
      document.getElementById("answer").style.visibility = 'visible';
      multiplyNode(document.querySelector('.bulb'), x, true);
      document.getElementById("tungsten2").style.visibility = 'hidden';
      document.getElementById("tungsten3").style.visibility = 'hidden';
      
      var div = document.createElement('div');
      var list = document.getElementById('roof').lastChild;/*object text*/
      list.appendChild(div);
      div.id = 'popup';
      div.innerHTML = '<h5>Keep scrolling to find answer!</h5>';
      
}
    else if (x > 500 && x <= 1000) {
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
      multiplyNode(document.querySelector('.tungsten'), y, true);
}
    else (
      document.getElementById("warning").innerHTML = "That's BANANANANAS!"
)
};

var counter = 0;
var txt = "";
while (counter != 1500) {
  counter = counter + 1;
  var wrapper = "<div>" + counter + "</div>";
  txt = txt + wrapper;
  document.getElementById("numeros").innerHTML = txt;
}


/*enter key*/
document.getElementById("myNumber")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        myFunction();
    }
});




