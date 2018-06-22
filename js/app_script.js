var p = document.getElementById("paragraph"),
readMore = document.getElementById("readmore");

var oldString = p.innerText;

var pLength = oldString.length;

var newString = p.innerText;

newString = newString.substr(0,50);

p.innerText = newString;

readMore.onclick = function(){

    oldString = oldString.substr(0,pLength);
    p.innerText = oldString;
}
