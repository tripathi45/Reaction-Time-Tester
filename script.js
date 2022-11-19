function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
var start = new Date().getTime();
document.getElementById("shape").onclick = function(){
    document.getElementById("shape").style.display = "none";

    var end = new Date().getTime();
    var timeTaken = (end - start)/1000;
    document.getElementById("timeTaken").innerHTML = timeTaken + "s";
    appearAfterDelay();
    }
function makeshapeAppear(){
    var top = Math.random() * 400;
    document.getElementById("shape").style.display = "block";
    document.getElementById("shape").style.top = top + "px";
    var width = (Math.random() * 200) + 100;
    if(Math.random() > 0.5){
        document.getElementById("shape").style.borderRadius = "0"
    }
    else{
        document.getElementById("shape").style.borderRadius = "50%"
    }
    document.getElementById("shape").style.width = width + "px";
    document.getElementById("shape").style.backgroundColor = getRandomColor();
    document.getElementById("shape").style.height = width + "px";
    var left = Math.random() * 400;
    document.getElementById("shape").style.left = left + "px";
    start = new Date().getTime();
}
appearAfterDelay()
function appearAfterDelay() {
    setTimeout(makeshapeAppear,Math.random()*2000);
}
