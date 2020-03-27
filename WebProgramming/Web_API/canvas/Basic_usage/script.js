function draw(){
    var canvas = document.getElementById('tutorial');

    if(canvas.getContext){
        var ctx = canvas.getContext('2d');
        ctx.font = "15px Arial";
        ctx.fillText("Hello World. This is Canvas.", 50, 75);
    }

}

//window.onload = function(){
//    draw();
//};

//window.addEventListener('load', function (){
//    draw();
//});

document.addEventListener("DOMContentLoaded", draw);