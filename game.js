# PaddleGame


var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var y = 0;
var x = 0;
var paddlex = 202.5;
var score = 0;

var rightPressed = false;
var leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e){
  if(e.keyCode == 39){
    rightPressed = true;

  }
  if(e.keyCode == 37){
    leftPressed = true;
  }
}

function keyUpHandler(e){
  if(e.keyCode == 39){
    rightPressed = false;
  }
  if(e.keyCode == 37){
    leftPressed = false;
  }

}



function draw(){

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(paddlex, 310, 80, 10);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();

  ctx.font = "16px Ariel";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: " + score, 8, 20);

  y += 2;

  if (rightPressed){
    paddlex += 7;

  }

  if (leftPressed){
    paddlex -= 7;
  }

  if ((x < paddlex + 40) && ( x > paddlex - 40) && (y > 300 )){
    y = 0;
    x = Math.random() * (canvas.height);
    score++;
  }

  if (y == canvas.height+30){
    y = 0;
    x = Math.random() * (canvas.height);
  }

}

setInterval(draw, 10);
