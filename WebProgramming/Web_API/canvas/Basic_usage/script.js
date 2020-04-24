function draw(){
    var canvas = document.getElementById('tutorial');

    if(canvas.getContext){
        var ctx = canvas.getContext('2d');

        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';

        ctx.font = "15px Arial";
        ctx.fillText("Hello World. This is Canvas.", 50, 75);

        ctx.save();

        ctx.font = "15px Calibri";
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 0;
        ctx.fillText("Hello", 50, 100);

        ctx.restore();
        ctx.fillText("K.", 50, 125);
    }

}

//window.onload = function(){
//    draw();
//};

//window.addEventListener('load', function (){
//    draw();
//});

document.addEventListener("DOMContentLoaded", draw);