/* skyshot.js */
var SCREEN_WIDTH = window.innerWidth,
    SCREEN_HEIGHT = window.innerHeight,
    mousePos = {
        x: 400,
        y: 300
    },

    // create canvas
    canvas = document.querySelector('canvas'),//document.createElement('canvas'),
    context = canvas.getContext('2d'),
    particles = [],
    rockets = [],
    
    colorCode = 0;

// constants
var FPS = 40;
var ROCKET_PER_SECOND = 10;

var MAX_PARTICLES = 900;//Math.floor(Math.random() * 100) + 500 ;//99,
var MIN_PARTICLES = 100;
var SCREEN_FADE = 0.3;


//Random color
function RGBA(r,g,b,a)
{
    var col = "rgba(";
    if(r == -1)
        col+= Math.floor(Math.random() * 255) + ",";
    else
        col+= r + ",";
    
    if(b == -1)
        col+= Math.floor(Math.random() * 255) + ",";
    else
        col+= b + ",";
    
    if(g == -1)
        col+= Math.floor(Math.random() * 255) + ",";
    else
        col+= g + ",";
    
    if(a == -1)
        col+= (Math.random()) + ")";
    else
        col+= a + ")";

    return col;
}


//Random generator
function RandomNext(v)
{
    var _rnd = Math.random();
    var _flot = _rnd * v;
    var _int = Math.floor(_flot);

    var result = {R:_rnd, F:_flot,I:_int};

    return result;
}


// init
function initialize()
{
    //document.getElementById('progress').appendChild(canvas);
    canvas.width = SCREEN_WIDTH;
    canvas.height = SCREEN_HEIGHT;
    setInterval(launch, ROCKET_PER_SECOND);
    setInterval(loop, 1000/FPS);
}

// Event: update mouse position
window.addEventListener('mousemove',function(){    
    event.preventDefault();
    mousePos = {
        x: event.x,
        y: event.y
    };
});

function DyanmicGradient()
{
    var grads = [
        [{color:"00000c",position:0.0},{color:"00000c",position:1}],
        [{color:"020111",position:0.85},{color:"191621",position:1}],
        [{color:"020111",position:0.60},{color:"20202c",position:1}],
        [{color:"020111",position:0.10},{color:"3a3a52",position:1}],
        [{color:"20202c",position:0.0},{color:"515175",position:1}],
        [{color:"40405c",position:0.0},{color:"6f71aa",position:0.80},{color:"8a76ab",position:1}],
        [{color:"4a4969",position:0.0},{color:"7072ab",position:0.50},{color:"cd82a0",position:1}],
        [{color:"757abf",position:0.0},{color:"8583be",position:0.60},{color:"eab0d1",position:1}],
        [{color:"82addb",position:0.0},{color:"ebb2b1",position:1}],
        [{color:"94c5f8",position:0.0},{color:"a6e6ff",position:0.70},{color:"b1b5ea",position:1}],
        [{color:"b7eaff",position:0.0},{color:"94dfff",position:1}],
        [{color:"9be2fe",position:0.0},{color:"67d1fb",position:1}],
        [{color:"90dffe",position:0.0},{color:"38a3d1",position:1}],
        [{color:"57c1eb",position:0.0},{color:"246fa8",position:1}],
        [{color:"2d91c2",position:0.0},{color:"1e528e",position:1}],
        [{color:"2473ab",position:0.0},{color:"1e528e",position:0.70},{color:"5b7983",position:1}],
        [{color:"1e528e",position:0.0},{color:"265889",position:0.50},{color:"9da671",position:1}],
        [{color:"1e528e",position:0.0},{color:"728a7c",position:0.50},{color:"e9ce5d",position:1}],
        [{color:"154277",position:0.0},{color:"576e71",position:0.30},{color:"e1c45e",position:0.70},{color:"b26339",position:1}],
        [{color:"163C52",position:0.0},{color:"4F4F47",position:0.30},{color:"C5752D",position:0.60},{color:"B7490F",position:0.80},{color:"2F1107",position:1}],
        [{color:"071B26",position:0.0},{color:"071B26",position:0.30},{color:"8A3B12",position:0.80},{color:"240E03",position:1}],
        [{color:"010A10",position:0.30},{color:"59230B",position:0.80},{color:"2F1107",position:1}],
        [{color:"090401",position:0.50},{color:"4B1D06",position:1}],
        [{color:"00000c",position:0.80},{color:"150800",position:1}],
      ];

    var dateTime = new Date();
    var inx = dateTime.getHours();

    var data = grads[inx]; 
    toCSSGradient(data);
}

function toCSSGradient(data)
{ 
    // add linear gradient
   var grd = context.createLinearGradient(0, 0, 0, canvas.height);

  var len = data.length;
   var result;
  
  for (var i=0;i<len;i++)
  { 
     var item = data[i];
     var css = " #" + item.color;
     grd.addColorStop(item.position,css);
    // if ( i<len-1 ) css += ",";
  }

  context.fillStyle = "rgba(0,0,0,"+RandomNext(10).R+")"//grd;
}

function Print(msg)
{
    context.fillStyle = '#FFF';
    context.font = '20px Arial';
    context.fillText (msg, 40, 100);
}

// Event: launch more rockets!!!
window.addEventListener('mousedown',function(){ 
    /*
    for (var i = 0; i < 5; i++) {
        launchFrom(Math.random() * 960 * 2 / 3 + 960 / 6);
    }
    */
    
    for (var i = 0; i < 5; i++) {
        launchFrom(Math.random() * SCREEN_WIDTH * 2 / 3 + SCREEN_WIDTH / 6);
    }
    
    //launch();
    //launchFrom(Math.random() * 960 * 2 / 3 + 960 / 6);
});


function launch() {
   //launchFrom(mousePos.x);
   // var mult_place = Math.random() * canvas.width;
   // launchFrom(mult_place);
   //center
    launchFrom(canvas.width /2);
}

function launchFrom(x) {
    if (rockets.length < 10) //10 rockets
    {
        var rocket = new Rocket(x);
        rocket.explosionColor = Math.floor(Math.random() * 360 / 10) * 10;
        rocket.vel.y = Math.random() * -3 - 4;
        rocket.vel.x = Math.random() * 6 - 3;
        rocket.size = 10;
        rocket.shrink = .999;
        rocket.gravity = .0001;
        rockets.push(rocket);
    }
}

function RefreshScreen(screenFade)
{
    // update screen size
    /*
    if (SCREEN_WIDTH != window.innerWidth) {
        canvas.width = SCREEN_WIDTH = window.innerWidth;
    }
    if (SCREEN_HEIGHT != window.innerHeight) {
        canvas.height = SCREEN_HEIGHT = window.innerHeight;
    }
    */

   // add linear gradient
   //[{color:"40405c",position:0},{color:"6f71aa",position:80},{color:"8a76ab",position:100}],
   /*
   var grd = context.createLinearGradient(0, 0, 0, canvas.height);
   grd.addColorStop(0.0, '#40405c');   
   grd.addColorStop(0.8, '#6f71aa'); //001a41
   grd.addColorStop(1, '#8a76ab');
   context.fillStyle = grd;
   */

    //DyanmicGradient();

    // clear canvas
    context.fillStyle = "rgba(0,0,0,"+screenFade+")"//grd;
    context.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    //context.clearRect(0,0,SCREEN_WIDTH, SCREEN_HEIGHT);
    //context.globalAlpha = 0.52;
}

var seed = { Id : 0 , size : 15 , max : 5 };

function loop() {

    // Clear & Refresh screen
    RefreshScreen(0.253);
    var existingRockets = [];

    //

    for (var i = 0; i < rockets.length; i++) {

        // update and render
        rockets[i].update();
        rockets[i].render(context);

        // calculate distance with Pythagoras
        var distance = Math.sqrt(Math.pow(mousePos.x - rockets[i].pos.x, 2) + Math.pow(mousePos.y - rockets[i].pos.y, 2));

        // random chance of 1% if rockets is above the middle
        var randomChance = rockets[i].pos.y < (SCREEN_HEIGHT * 2 / 3) ? (Math.random() * 100 <= 1) : false;

        
        /* Explosion rules
             - 80% of screen
            - going down
            - close to the mouse
            - 1% chance of random explosion
        */
        if (rockets[i].pos.y < SCREEN_HEIGHT / 5 || rockets[i].vel.y >= 0 || distance < 50 || randomChance) {
            //rockets[i].explode(Math.floor(Math.random() * 10));
            seed.Id = Math.floor(Math.random() * 10);
            seed.size = Math.floor(Math.random() * 30);;
            seed.max = Math.floor(Math.random() * 100) + 400;;
            //rockets[i].explode(1);
            //rockets[i].explode(2);
            rockets[i].explode(seed);
            //rockets[i].explode(4);
            //rockets[i].explode(5);
            //rockets[i].explode(6);
            //rockets[i].explode(7);
            //rockets[i].explode(0);

            
        } else {
            existingRockets.push(rockets[i]);
            rockets[i].Sprakle();
            
        }
    }

    rockets = existingRockets;

    var existingParticles = [];

    for (var i = 0; i < particles.length; i++) {
        particles[i].update();

        // render and save particles that can be rendered
        if (particles[i].exists()) {
            particles[i].render(context);
            existingParticles.push(particles[i]);
        }
    }

    // update array with existing particles - old particles should be garbage collected
    particles = existingParticles;

    while (particles.length > MAX_PARTICLES) {
        particles.shift();
    }
}

//PARTICLES ==================================
function Particle(pos) {

    this.pos = {
        x: pos ? pos.x : 0,
        y: pos ? pos.y : 0
    };

    this.vel = {
        x: 0,
        y: 0
    };

    this.shrink = 0.97;
    this.size = 2;

    this.resistance = 1;
    this.gravity = 0;

    this.flick = false;

    this.alpha = 1; //5
    this.fade = 0;
    this.color = 0;
}

Particle.prototype.update = function() {
    // apply resistance
    this.vel.x *= this.resistance;
    this.vel.y *= this.resistance;

    // gravity down
    this.vel.y += this.gravity;

    // update position based on speed
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;

    // shrink
    this.size *= this.shrink;

    // fade out
    this.alpha -= this.fade;
};

Particle.prototype.render = function(c) {
    if (!this.exists()) {
        return;
    }

    c.save();

    c.globalCompositeOperation = 'lighter';

    const x1 = this.pos.x;
    const y1 = this.pos.y;
    
    var x = this.pos.x,
        y = this.pos.y,
        r = this.size / 2;

    var gradient = c.createRadialGradient(x, y, 0.1, x, y, r);
    gradient.addColorStop(0.1, "rgba(255,255,255," + this.alpha + ")");
    gradient.addColorStop(0.8, "hsla(" + this.color + ", 100%, 50%, " + this.alpha + ")");
    gradient.addColorStop(1, "hsla(" + this.color + ", 100%, 50%, 0.1)");

    //c.shadowBlur = 2;
    //c.shadowColor = "red";

    c.fillStyle = gradient;
    

    c.beginPath();
    c.arc(this.pos.x, this.pos.y, this.flick ? Math.random() * this.size : this.size, 0, Math.PI * 2, true);
    c.closePath();
    c.fill();

    c.restore();
};

Particle.prototype.exists = function() {
    return this.alpha >= 0.1 && this.size >= 1;
};


// Rocket ========================================
function Rocket(x) {
    Particle.apply(this, [{
        x: x,
        y: SCREEN_HEIGHT}]);

    this.explosionColor = 0;
}

Rocket.prototype = new Particle();

Rocket.prototype.constructor = Rocket;

Rocket.prototype.Sprakle = function()
{
    var maxParticleCount = Math.random() * 10;//RandomNext(1000).I;    
    //maxParticleCount = 10;
    
    for (var i = 0; i < maxParticleCount; i++) 
    {
        var particle = new Particle(this.pos);
        var angle = Math.random() * Math.PI * 2;

        // emulate 3D effect by using cosine and put more particles in the middle
        //var _randomSize = explosionSizeArray[Math.floor(Math.random() * explosionSizeArray.length)];
        var speed ;
        speed = Math.tanh(Math.random() * Math.PI / 10);
           
        //continue;

        particle.vel.x = Math.cos(angle) * speed;
        particle.vel.y = Math.sin(angle) * speed;

        particle.size = 4; //added +5

        particle.gravity = 0.002;
        particle.resistance = 0.93; //0.93
        particle.shrink = 0.05 * Math.random() + 0.93;// Math.random() * 0.05 + 0.93;

        particle.flick = true;
        //var rndColor = rainbowColorArray[Math.floor(Math.random() * rainbowColorArray.length)];//
        //rndColor = Math.floor(Math.random() * 360 / 10) * 10;
        //rndColor = 360;
        particle.color = Math.random() * 50//this.explosionColor; //rndColor; //;

        particles.push(particle);
    }
};

Rocket.prototype.explode = function(seed) {

    var maxParticleCount = Math.random() * 100 + MIN_PARTICLES;//RandomNext(1000).I;
    maxParticleCount = seed.max;

    //console.log("Seed:" +seed);

    //rainbow
    var rainbowColorArray = [
        (Math.floor(Math.random() * 360 / 10) * 10),
        //this.explosionColor,
        (Math.floor(Math.random() * 360 / 10) * 10),
        //this.explosionColor,
        (Math.floor(Math.random() * 360 / 10) * 10),
        //this.explosionColor, 
        (Math.floor(Math.random() * 60))
    ];

    var explosionSizeArray = [15,1];

    var particleSizeArray = [3,5];

    var patternArray =[
        (Math.cos(Math.random() * Math.PI / 2) * 15),
        (Math.cosh(Math.random() * Math.PI / 2) * 15),
        (Math.sin(Math.random() * Math.PI / 2) * 15),
        //(Math.sinh(Math.random() * Math.PI / 2) * 15),
        //(Math.tan(Math.random() * Math.PI / 2) * 15),
        //(Math.tanh(Math.random() * Math.PI / 2) * 15),
    ];

    for (var i = 0; i < maxParticleCount; i++) {
        var particle = new Particle(this.pos);
        var angle = Math.random() * Math.PI * 2;

        // emulate 3D effect by using cosine and put more particles in the middle
        var _randomSize = explosionSizeArray[Math.floor(Math.random() * explosionSizeArray.length)];
        var speed ;//= Math.cos(Math.random() * Math.PI / 2) * 15;
        //speed = 15 * Math.cos(Math.random());// * (Math.random() * 2);
        //speed =  Math.cos(Math.random() * Math.PI / 2) * _randomSize; //change for differnt effect
        
        //speed = patternArray[RandomNext(patternArray).I];
        //Ani Type
        if(seed.Id == 1)
        {
            speed = Math.sin(Math.random() * Math.PI / 2) * 15 ;
        }
        else if(seed.Id == 2)
        {
            speed = Math.cosh(Math.random() * Math.PI / 2) * 15 ;
        }
        else if(seed.Id == 3)
        {
            speed = Math.tan(Math.random() * Math.PI /2 ) * seed.size;
        }
        else if(seed.Id == 4)
        {
            speed = Math.ceil(Math.random() * Math.PI /2 ) * 15;
        }
        else if(seed.Id == 5)
        {
            speed = Math.exp(Math.random() * Math.PI /2 ) * 15;
        }
        else if(seed.Id == 6)
        {
            speed = Math.expm1(Math.random() * Math.PI /2 ) * 15;
        }
        else if(seed.Id == 7)
        {
            speed = Math.log (Math.random() * Math.PI /2 ) * 15;
        }
        else if(seed.Id == 8)
        {
            speed = (Math.random() * 5 ) - 15;//(Math.random() * Math.PI ) + 15;
        }
        else
        {
            speed = Math.cos(Math.random() * Math.PI / 2) * 15;
        }    
        //continue;

        particle.vel.x = Math.cos(angle) * speed ;
        particle.vel.y = Math.sin(angle) * speed ;

        var _randomParticleSize = particleSizeArray[Math.floor(Math.random() * particleSizeArray.length)];
        //particle.size = 10;
        particle.size = 20 * Math.random();// + _randomParticleSize; //added +5

        particle.gravity = 0.2;
        particle.resistance = .93; //0.93
        particle.shrink = 0.05 * Math.random() + 0.93;// Math.random() * 0.05 + 0.93;

        particle.flick = true;
        var rndColor = rainbowColorArray[Math.floor(Math.random() * rainbowColorArray.length)];//
        //rndColor = Math.floor(Math.random() * 360 / 10) * 10;
        //rndColor = 360;
        particle.color = rndColor;//this.explosionColor; //rndColor;
        

        particles.push(particle);
    }
};

Rocket.prototype.render = function(c) {
    if (!this.exists()) {
        return;
    }

    c.save();

    c.globalCompositeOperation = 'lighter';

    var x = this.pos.x,
        y = this.pos.y,
        r = this.size / 2;

    var gradient = c.createRadialGradient(x, y, 0.1, x, y, r);
    gradient.addColorStop(0.1, "rgba(255, 255, 255 ," + this.alpha + ")");
    gradient.addColorStop(1, "rgba(0, 0, 0, " + this.alpha + ")");

    c.fillStyle = gradient;

    c.beginPath();
    c.arc(this.pos.x, this.pos.y, this.flick ? Math.random() * this.size / 2 + this.size / 2 : this.size, 0, Math.PI * 2, true);
    c.closePath();
    c.fill();

    c.restore();
};

// fun calls
initialize();