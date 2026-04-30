function printNames(){
    document.write("John");
    document.write("<br>")
 setTimeout(function() {document.write("ana");}, 3000);
 document.write("Bob");
}

printNames();

var colors = ['red','green','blue','yellow'];

function changeBackgroundColor(){
    document.querySelector('body').style.background = colors[Math.floor(Math.random()*colors.length)];

}

setInterval(changeBackgroundColor, 1000);

var names = ['John','Ana','Bob','Mark'];

function changeNames(){
    document.querySelector('p').innerHTML = names[Math.floor(Math.random()*names.length)];

}

setInterval(changeNames, 1000);