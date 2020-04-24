
//For moving the pen, strokeStyle is the color ink.
//Even if the pen draws a closed shape, ctx.fillStyle does not fill that shape
function draw(){
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
       var ctx = canvas.getContext('2d');

      ctx.strokeStyle = 'blue';//The drawing is now in orange
      ctx.fillStyle = 'red';//Nothing happened
  
      ctx.beginPath();
      ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
      ctx.moveTo(110, 75);
      ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
      ctx.moveTo(65, 65);
      ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
      ctx.moveTo(95, 65);
      ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
      ctx.stroke();
      //ctx.fill();//Once called, the color from fillstyle is drawn
    }
}

window.onload = function(){
    draw();
};