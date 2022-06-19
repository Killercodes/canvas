// get the canvas from html
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Get the context
var ctx = canvas.getContext('2d');

const NUM_PARTICLES = 1000;
//mouse object
var mouse = {
    x:undefined,
    y:undefined
}

var maxRadius = 15;
var minRadius = 5;

var colorArray = [
    '#2c3e50',
    '#e74c3c',
    '#ecf0f1',
    '#3498db',
    '#2980b9', '#FF0000','#00FF00'
];

function RColor(){
    var result = "#";    
    var r = Math.floor(Math.random() * 4294967295);// 16777215); //4294967295);
    result += r.toString(16);
    return result;
}

//Events
window.addEventListener('resize',function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.zIndex = 15; 
    init();
});

window.addEventListener('mousemove',function(){    
    mouse.x = event.x;
    mouse.y = event.y;
    //console.log(mouse);
});

// Circle
function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dy = dy;
    this.dx = dx;
    this.radius = radius;
    this.minRadius =radius;
    this.color = RColor();//colorArray[Math.floor(Math.random() * colorArray.length)];

    //Draw
    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        //ctx.strokeStyle = 'blue';
        //c.stroke();
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fill();
    }

    //upadte function
    this.update = function () {
        if (this.x + radius > innerWidth || this.x - radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + radius > innerHeight || this.y - radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        //interactive
        if(mouse.x  - this.x < 50 && mouse.x - this.x > -50
        && mouse.y - this.y < 50 && mouse.y - this.y > -50 ){
            if(this.radius < maxRadius ){
                this.radius += 1;
            }            
        }
        else if (this.radius > this.minRadius)
        {
            this.radius -=1;
        }

        this.draw();
    }
}

//var circle = new Circle(200, 200, 3, 3, 30);
var circleArray = [];

//Initialize
function init(){
    circleArray = [];    
    for(var i = 0; i<NUM_PARTICLES; i++){
        var radius = Math.random() * 3 + 1; //30;
        var x = Math.random() * (innerWidth - radius * 2) + radius;
        var y = Math.random() * (innerHeight - radius * 2) + radius;
        var dy = Math.random() - 0.5 * 3;
        var dx = Math.random() - 0.5 * 3;
       
        circleArray.push(new Circle(x,y,dx,dy,radius));
        //var circle = new Circle(200, 200, 3, 3, 30);
    }
}

//animate
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    //ctx.fillStyle = "rgba(0,0,0,0.9)";//grd;
    //ctx.fillRect(0, 0, innerWidth, innerHeight);

    for(var i = 0; i <circleArray.length; i++){
        circleArray[i].update();
    }
}

//Call
init();
animate();

console.log("canvs render completed on - " + Date());