/*
 * @name Particles
 * @description There is a light-weight JavaScript library named
 * particle.js which creates a very pleasing particle system.
 * This is an attempt to recreate that particle system using p5.js.
 * Inspired by Particle.js, contributed by Sagar Arora.
 */


// this class describes the properties of a single particle.
class Particle {
    // setting the co-ordinates, radius and the
    // speed of a particle in both the co-ordinates axes.
      constructor(){
        this.x = random(0,width);
        this.y = random(0,height);
        this.r = random(1,8);
        this.r255 = random(0,255);
        this.xSpeed = random(-5,5);;//random(-2,2);
        this.ySpeed = random(-5,5);//random(-1,1.5);
      }
    
    // creation of a particle.
      createParticle() {
        noStroke();
        var rgb = parseInt(random(0,255));
        //fill(`rgba(255,255,255,0,0.5)`);
        stroke("rgba(50,200,255,255)");
        //ctx.shadowBlur = 1;
        //ctx.shadowOffsetY = 1;
        //ctx.shadowOffsetX = 1;
        //ctx.shadowColor = "#53FFFF";
        circle(this.x,this.y,this.r);
      }
    
    // setting the particle in motion.
      moveParticle() {
        if(this.x < 0 || this.x > width)
          this.xSpeed*=-1;

        if(this.y < 0 || this.y > height)
          this.ySpeed*=-1;

        this.x+=this.xSpeed;
        this.y+=this.ySpeed;
      }
    
    // this function creates the connections(lines)
    // between particles which are less than a certain distance apart
      joinParticles(particles) {
        var r = parseInt(random(0,255));
        var g = parseInt(random(0,255));
        var b = parseInt(random(110,255));

        particles.forEach(element => {
          let dis = dist(this.x,this.y,element.x,element.y);
          if(dis < 100) {
                
            var rn = random(0,1);

            stroke(`rgba(200,200,200,0.3)`);
            
            //console.log(rn);            
            line(this.x,this.y,element.x,element.y);

            if(dis < 50)
            {             
              stroke("rgba(200,200,255,1)");
              line(this.x,this.y,element.x,element.y);
            }

          }
          
        });
      }
    }//class
    
    // an array to add multiple particles
    let particles = [];
    
    function setup() {
      createCanvas(window.innerWidth, window.innerHeight);
      ctx = canvas.getContext('2d');
      for(let i = 0;i<200;i++){
        particles.push(new Particle());
      }
    }
    
    
    
    function draw() {
      background('#000');
      for(let i = 0;i<particles.length;i++) {
        particles[i].createParticle();
        particles[i].moveParticle();
        particles[i].joinParticles(particles.slice(i));
      }
    }
// 
