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
    if (x <= 1500) {
      document.getElementById("prompt").style.visibility = 'hidden';
      document.getElementById("answer").style.visibility = 'visible';
      multiplyNode(document.querySelector('.bulb'), x, true);

}
    else (
      document.getElementById("demo").innerHTML = "That's BANANANANAS!"
)
}


/*enter key*/
document.getElementById("myNumber")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("press").click();
    }
});