# HTML5-Canvas-Playground
Testing skills on HTML5 Canvas with live editing 

## What is Canvas
The HTML <canvas> element is used to draw graphics, on the fly, via JavaScript. The <canvas> element is only a container for graphics. 
  
  ## Whats the use
  It is used alongwith JavaScript to actually draw the graphics and render it one the keyboard & mouse events
  
  

## Create a Canvas
> drawing the canvas in html, just add the canvas element
``` html
<canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;">
Your browser does not support the canvas element.
</canvas>
```

## Draw a Rectangle
> drawing a rectangle
``` html
        <canvas id="myCanvasRec" width="200" height="100" style="border:1px solid #c3c3c3;">
                Your browser does not support the canvas element.
        </canvas>

        <script>
                var canvas = document.getElementById("myCanvasRec");
                var ctx = canvas.getContext("2d");
                ctx.fillStyle = "#FF0000";
                ctx.fillRect(0, 0, 150, 75);
        </script>
```

## Draw a Circle
> Define a circle with the arc() method. Then use the stroke() method to actually draw the circle:

``` html
<canvas id="myCanvas3" width="200" height="100" style="border:1px solid #d3d3d3;background:#ffffff;">
                Your browser does not support the HTML5 canvas tag.
        </canvas>
        <script>
                var c = document.getElementById("myCanvas3");
                var canvOK = 1;
                try {
                        c.getContext("2d");
                } catch (er) {
                        canvOK = 0;
                }
                if (canvOK == 1) {
                        var ctx = c.getContext("2d");
                        ctx.beginPath();
                        ctx.arc(95, 50, 40, 0, 2 * Math.PI);
                        ctx.stroke();
                }
        </script>

```

## Draw a Circle glow
> Use the shadow attribute for blur
``` html
        <canvas id="myCanvas3g" width="400" height="200" style="border:1px solid #d3d3d3;background:#ffffff;">
                Your browser does not support the HTML5 canvas tag.
        </canvas>
        <script>
                var c = document.getElementById("myCanvas3g");
                var canvOK = 1;
                try {
                        c.getContext("2d");
                } catch (er) {
                        canvOK = 0;
                }
                if (canvOK == 1) {
                        var ctx = c.getContext("2d");
                        ctx.fillStyle = "black";
                        ctx.fillRect(0, 0, 400, 200);
                        ctx.beginPath();
                        ctx.arc(95, 50, 40, 0, 2 * Math.PI);
                        ctx.arc(195, 50, 10, 0, 2 * Math.PI);
                        ctx.shadowBlur = 40;
                        ctx.shadowOffsetY = 0;
                        ctx.shadowOffsetX = 0;
                        ctx.shadowColor = "#53FFFF";
                        //ctx.stroke();
                        // Create gradient
                        var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
                        grd.addColorStop(0, "#53FFFF");
                        grd.addColorStop(1, "#DBFFFF");

                        // Fill with gradient
                        ctx.fillStyle = grd;
                        //ctx.fillStyle = "#99FFFF";
                        ctx.fill();
                }
        </script>
```

## Draw a line
> Use the lineto function to draw
``` html
        <canvas id="myCanvasline" width="200" height="100" style="border:1px solid #d3d3d3;">
                Your browser does not support the canvas element.
        </canvas>

        <script>
                var canvas = document.getElementById("myCanvasline");
                var ctx = canvas.getContext("2d");
                ctx.moveTo(0, 0);
                ctx.lineTo(200, 100);
                ctx.stroke();
        </script>
```

## Gradient
> Gradients can be used to fill rectangles, circles, lines, text, etc. Shapes on the canvas are not limited to solid colors.

There are two different types of gradients:
- createLinearGradient(x,y,x1,y1) - creates a linear gradient
- createRadialGradient(x,y,r,x1,y1,r1) - creates a radial/circular gradient

Once we have a gradient object, we must add two or more color stops.
The addColorStop() method specifies the color stops, and its position along the gradient. Gradient positions can be anywhere between 0 to 1.

To use the gradient, set the fillStyle or strokeStyle property to the gradient, then draw the shape (rectangle, text, or a line).

### Create gradient
``` html
        <canvas id="myCanvasgra" width="200" height="100" style="border:1px solid #d3d3d3;">
                Your browser does not support the HTML5 canvas tag.</canvas>

        <script>
                var c = document.getElementById("myCanvasgra");
                var ctx = c.getContext("2d");

                // Create gradient
                var grd = ctx.createLinearGradient(0, 0, 200, 0);
                grd.addColorStop(0, "red");
                grd.addColorStop(1, "white");

                // Fill with gradient
                ctx.fillStyle = grd;
                ctx.fillRect(10, 10, 150, 80);
        </script>
```

### Create radial gradient
>
``` html
        <canvas id="myCanvasgr2" width="200" height="100" style="border:1px solid #d3d3d3;">
                Your browser does not support the HTML5 canvas tag.</canvas>

        <script>
                var c = document.getElementById("myCanvasgr2");
                var ctx = c.getContext("2d");

                // Create gradient
                var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
                grd.addColorStop(0, "red");
                grd.addColorStop(1, "white");

                // Fill with gradient
                ctx.fillStyle = grd;
                ctx.fillRect(10, 10, 150, 80);
        </script>
```

 ## Drawing Text on the Canvas 
> To draw text on a canvas, the most important property and methods are:
- font - defines the font properties for the text
- fillText(text,x,y) - draws "filled" text on the canvas
- strokeText(text,x,y) - draws text on the canvas (no fill)

### Using fillText()

``` html
        <canvas id="myCanvastx1" width="200" height="100" style="border:1px solid #d3d3d3;">
                Your browser does not support the canvas element.
        </canvas>

        <script>
                var canvas = document.getElementById("myCanvastx1");
                var ctx = canvas.getContext("2d");
                ctx.font = "30px Arial";
                ctx.shadowBlur = 40;
                ctx.shadowOffsetY = 0;
                ctx.shadowOffsetX = 0;
                ctx.shadowColor = "#53FFFF";
                ctx.fillText("Hello World", 10, 50);
        </script>
        <pre>
```
### Using strokeText()
> some

``` html
        <canvas id="myCanvasst" width="200" height="100" style="border:1px solid #d3d3d3;">
                Your browser does not support the canvas element.
        </canvas>

        <script>
                var canvas = document.getElementById("myCanvasst");
                var ctx = canvas.getContext("2d");
                ctx.font = "30px Arial";
                ctx.strokeText("Hello World", 10, 50);
        </script>
```

### Add Color and Center Text
``` html
        <canvas id="myCanvasct" width="300" height="200" style="border:1px solid #d3d3d3;">
                Your browser does not support the canvas element.
        </canvas>

        <script>
                var canvas = document.getElementById("myCanvasct");
                var ctx = canvas.getContext("2d");
                ctx.font = "30px Comic Sans MS";
                ctx.fillStyle = "red";
                ctx.textAlign = "center";
                ctx.fillText("Hello World", canvas.width / 2, canvas.height / 2);
        </script>
```
## Shadow 

### HTML canvas shadowOffsetY Property
> Draw a rectangle with a shadow placed 20 pixels below the rectangle's top position:
``` html
        <canvas id="myCanvassy" width="300" height="150" style="border:1px solid #d3d3d3;">
                Your browser does not support the HTML5 canvas tag.</canvas>

        <script>
                var c = document.getElementById("myCanvassy");
                var ctx = c.getContext("2d");
                ctx.shadowBlur = 10;
                ctx.shadowOffsetY = 20;
                ctx.shadowColor = "black";
                ctx.fillStyle = "red";
                ctx.fillRect(20, 20, 100, 80);
        </script>
```

### HTML canvas shadowOffsetX Property
``` html
        <canvas id="myCanvassx" width="300" height="150" style="border:1px solid #d3d3d3;">
                Your browser does not support the HTML5 canvas tag.</canvas>

        <script>
                var c = document.getElementById("myCanvassx");
                var ctx = c.getContext("2d");
                ctx.shadowBlur = 10;
                ctx.shadowOffsetX = 20;
                ctx.shadowColor = "black";
                ctx.fillStyle = "red";
                ctx.fillRect(20, 20, 100, 80);
        </script>
```

### HTML canvas shadowColor Property
``` html
        <canvas id="myCanvasshc" width="300" height="150" style="border:1px solid #d3d3d3;">
                Your browser does not support the HTML5 canvas tag.</canvas>

        <script>
                var c = document.getElementById("myCanvasshc");
                var ctx = c.getContext("2d");
                ctx.shadowBlur = 20;
                ctx.fillStyle = "red";

                ctx.shadowColor = "black";
                ctx.fillRect(20, 20, 100, 80);

                ctx.shadowColor = "blue";
                ctx.fillRect(140, 20, 100, 80);
        </script>
```

### HTML canvas shadowBlur Property
``` html
        <canvas id="myCanvassb" width="300" height="150" style="border:1px solid #d3d3d3;">
                Your browser does not support the HTML5 canvas tag.</canvas>

        <script>
                var c = document.getElementById("myCanvassb");
                var ctx = c.getContext("2d");
                ctx.shadowBlur = 20;
                ctx.shadowColor = "black";
                ctx.fillStyle = "red";
                ctx.fillRect(20, 20, 100, 80);
        </script>
```

### HTML canvas lineJoin Property
``` html
        <canvas id="myCanvaslj" width="300" height="150" style="border:1px solid #d3d3d3;">
                Your browser does not support the HTML5 canvas tag.</canvas>

        <script>
                var c = document.getElementById("myCanvaslj");
                var ctx = c.getContext("2d");
                ctx.beginPath();
                ctx.lineWidth = 10;
                ctx.lineJoin = "round";
                ctx.moveTo(20, 20);
                ctx.lineTo(100, 50);
                ctx.lineTo(20, 100);
                ctx.stroke();
        </script>
```

### HTML canvas lineCap Property
> The three different line caps
``` html
        <canvas id="myCanvaslc" width="300" height="150" style="border:1px solid #d3d3d3;">
                Your browser does not support the HTML5 canvas tag.</canvas>

        <script>
                var c = document.getElementById("myCanvaslc");
                var ctx = c.getContext("2d");

                ctx.beginPath();
                ctx.lineWidth = 10;
                ctx.lineCap = "butt";
                ctx.moveTo(20, 20);
                ctx.lineTo(200, 20);
                ctx.stroke();

                ctx.beginPath();
                ctx.lineCap = "round";
                ctx.moveTo(20, 40);
                ctx.lineTo(200, 40);
                ctx.stroke();

                ctx.beginPath();
                ctx.lineCap = "square";
                ctx.moveTo(20, 60);
                ctx.lineTo(200, 60);
                ctx.stroke();
        </script>
```

### HTML canvas rect() Method
``` html
        <canvas id="myCanvascr" width="300" height="150" style="border:1px solid #d3d3d3;">
                Your browser does not support the HTML5 canvas tag.</canvas>

        <script>
                var c = document.getElementById("myCanvascr");
                var ctx = c.getContext("2d");
                ctx.rect(20, 20, 150, 100);
                ctx.stroke();
        </script>
```

### HTML canvas clearRect() Method
``` html
        <canvas id="myCanvasdr" width="300" height="150" style="border:1px solid #d3d3d3;">
                Your browser does not support the HTML5 canvas tag.</canvas>

        <script>
                var c = document.getElementById("myCanvasdr");
                var ctx = c.getContext("2d");
                ctx.fillStyle = "red";
                ctx.fillRect(0, 0, 300, 150);
                ctx.clearRect(20, 20, 100, 50);
        </script>
```

### HTML canvas strokeRect() Method
``` html
        <canvas id="myCanvassr" width="300" height="150" style="border:1px solid #d3d3d3;">
                Your browser does not support the HTML5 canvas tag.</canvas>

        <script>
                var c = document.getElementById("myCanvassr");
                var ctx = c.getContext("2d");
                ctx.strokeRect(20, 20, 150, 100);
        </script>
```

### HTML canvas fillRect() Method
``` html
        <canvas id="myCanvasfr" width="300" height="150" style="border:1px solid #d3d3d3;">
                Your browser does not support the HTML5 canvas tag.</canvas>

        <script>
                var c = document.getElementById("myCanvasfr");
                var ctx = c.getContext("2d");
                ctx.fillRect(20, 20, 150, 100);
        </script>
```

### HTML canvas beginPath() Method
``` html
        <canvas id="myCanvasbp" width="300" height="150" style="border:1px solid #d3d3d3;">
                Your browser does not support the HTML5 canvas tag.</canvas>

        <script>
                var c = document.getElementById("myCanvasbp");
                var ctx = c.getContext("2d");

                ctx.beginPath();
                ctx.lineWidth = "5";
                ctx.strokeStyle = "green"; // Green path
                ctx.moveTo(0, 75);
                ctx.lineTo(250, 75);
                ctx.stroke(); // Draw it

                ctx.beginPath();
                ctx.strokeStyle = "purple"; // Purple path
                ctx.moveTo(50, 0);
                ctx.lineTo(150, 130);
                ctx.stroke(); // Draw it
        </script>
```

### HTML canvas quadraticCurveTo() Method

#### Definition and Usage
> The quadraticCurveTo() method adds a point to the current path by using the specified control points that represent a quadratic Bézier curve.
        
A quadratic Bézier curve requires two points. The first point is a control point that is used in the quadratic Bézier calculation and the second point is the ending point for the curve. The starting point for the curve is the last point in the current path. If a path does not exist, use the beginPath() and moveTo() methods to define a starting point.

``` javascript
Start point: moveTo(20,20)
Control point: quadraticCurveTo(20,100,200,20)
End point: quadraticCurveTo(20,100,200,20) 
```
Parameter|Description
----|----
cpx	|The x-coordinate of the Bézier control point
cpy	|The y-coordinate of the Bézier control point
x	|The x-coordinate of the ending point
y	|The y-coordinate of the ending point

``` html
<canvas id="myCanvasqbc" width="300" height="150" style="border:1px solid #d3d3d3;">
                Your browser does not support the HTML5 canvas tag.</canvas>

        <script>
                var c = document.getElementById("myCanvasqbc");
                var ctx = c.getContext("2d");
                ctx.beginPath();
                ctx.moveTo(20, 20);
                ctx.quadraticCurveTo(20, 100, 200, 20);
                ctx.stroke();
        </script>
```

### HTML canvas bezierCurveTo() Method
``` html
        <canvas id="myCanvascbc" width="300" height="150" style="border:1px solid #d3d3d3;">
                Your browser does not support the HTML5 canvas tag.</canvas>

        <script>
                var c = document.getElementById("myCanvascbc");
                var ctx = c.getContext("2d");
                ctx.beginPath();
                ctx.moveTo(20, 20);
                ctx.bezierCurveTo(20, 100, 200, 100, 200, 20);
                ctx.stroke();
        </script>
```

### HTML canvas arcTo() Method
Create an arc between two tangents on the canvas:</p>
        
            Parameter	|Description
            ----|----	
            x1	|The x-coordinate of the first tangent
            y1	|The y-coordinate of the first tangent
            x2	|The x-coordinate of the second tangent
            y2	|The y-coordinate of the second tangent
            r	|The radius of the arc
``` html
        <canvas id="myCanvasat" width="300" height="150" style="border:1px solid #d3d3d3;">
                Your browser does not support the HTML5 canvas tag.</canvas>

        <script>
                var c = document.getElementById("myCanvasat");
                var ctx = c.getContext("2d");
                ctx.beginPath();
                ctx.moveTo(20, 20); // Create a starting point
                ctx.lineTo(100, 20); // Create a horizontal line
                ctx.arcTo(150, 20, 150, 70, 50); // Create an arc
                ctx.lineTo(150, 120); // Continue with vertical line
                ctx.stroke(); // Draw it
        </script>
```

### HTML canvas isPointInPath() Method
``` html
        <canvas id="myCanvasptp" width="300" height="150" style="border:1px solid #d3d3d3;">
                Your browser does not support the HTML5 canvas tag.</canvas>

        <script>
                var c = document.getElementById("myCanvasptp");
                var ctx = c.getContext("2d");
                ctx.rect(20, 20, 150, 100);
                if (ctx.isPointInPath(20, 50)) {
                        ctx.stroke();
                };
        </script>
```
## Transformations 

### HTML canvas scale() Method
> The scale() method scales the current drawing, bigger or smaller.
        
Note: If you scale a drawing, all future drawings will also be scaled. The positioning will also be scaled. If you scale(2,2);
drawings will be positioned twice as far from the left and top of the canvas as you specify.

``` html        
        <canvas id="myCanvassc" width="300" height="150" style="border:1px solid #d3d3d3;">
                Your browser does not support the HTML5 canvas tag.</canvas>

        <script>
                var c = document.getElementById("myCanvassc");
                var ctx = c.getContext("2d");

                ctx.strokeRect(5, 5, 25, 15);
                ctx.scale(2, 2);
                ctx.strokeRect(5, 5, 25, 15);
        </script>
```

### HTML canvas rotate() Method
> To calculate from degrees to radians: degrees*Math.PI/180. Example: to rotate 5 degrees, specify the following: 5x*Math.PI/180

``` html
        <canvas id="myCanvasrt" width="300" height="150" style="border:1px solid #d3d3d3;">
                Your browser does not support the HTML5 canvas tag.</canvas>

        <script>
                var c = document.getElementById("myCanvasrt");
                var ctx = c.getContext("2d");
                ctx.rotate(20 * Math.PI / 180);
                ctx.fillRect(50, 20, 100, 50);
        </script>
```
### HTML canvas transform() Method
Notice that each time you call transform(), it builds on the previous transformation matrix:
``` html
        <canvas id="myCanvastrn" width="300" height="150" style="border:1px solid #d3d3d3;">
                Your browser does not support the HTML5 canvas tag.</canvas>

        <script>
                var c = document.getElementById("myCanvastrn");
                var ctx = c.getContext("2d");

                ctx.fillStyle = "yellow";
                ctx.fillRect(0, 0, 250, 100)

                ctx.transform(1, 0.5, -0.5, 1, 30, 10);
                ctx.fillStyle = "red";
                ctx.fillRect(0, 0, 250, 100);

                ctx.transform(1, 0.5, -0.5, 1, 30, 10);
                ctx.fillStyle = "blue";
                ctx.fillRect(0, 0, 250, 100);
        </script>
```

### HTML canvas translate() Method
Draw a rectangle in position (10,10), set new (0,0) position to (70,70). Draw same rectangle again (notice that the rectangle
                now starts in position (80,80):
``` html
<canvas id="myCanvastfr" width="300" height="150" style="border:1px solid #d3d3d3;">
                Your browser does not support the HTML5 canvas tag.</canvas>

        <script>
                var c = document.getElementById("myCanvastfr");
                var ctx = c.getContext("2d");
                ctx.fillRect(10, 10, 100, 50);
                ctx.translate(70, 70);
                ctx.fillRect(10, 10, 100, 50);
        </script>
```

### HTML canvas textAlign Property
Create a red line in position 150. Position 150 is the anchor point for all the text defined in the example below. Study
                the effect of each textAlign property value:

``` html
        <canvas id="myCanvastap" width="300" height="200" style="border:1px solid #d3d3d3;">
                Your browser does not support the HTML5 canvas tag.</canvas>

        <script>
                var c = document.getElementById("myCanvastap");
                var ctx = c.getContext("2d");

                // Create a red line in position 150
                ctx.strokeStyle = "red";
                ctx.moveTo(150, 20);
                ctx.lineTo(150, 170);
                ctx.stroke();

                ctx.font = "15px Arial";

                // Show the different textAlign values
                ctx.textAlign = "start";
                ctx.fillText("textAlign=start", 150, 60);
                ctx.textAlign = "end";
                ctx.fillText("textAlign=end", 150, 80);
                ctx.textAlign = "left";
                ctx.fillText("textAlign=left", 150, 100);
                ctx.textAlign = "center";
                ctx.fillText("textAlign=center", 150, 120);
                ctx.textAlign = "right";
                ctx.fillText("textAlign=right", 150, 140);
        </script>
```

### HTML canvas textBaseline Property
``` html
        <canvas id="myCanvastbp" width="400" height="200" style="border:1px solid #d3d3d3;">
                Your browser does not support the HTML5 canvas tag.</canvas>

        <script>
                var c = document.getElementById("myCanvastbp");
                var ctx = c.getContext("2d");

                //Draw a red line at y=100
                ctx.strokeStyle = "red";
                ctx.moveTo(5, 100);
                ctx.lineTo(395, 100);
                ctx.stroke();

                ctx.font = "20px Arial"

                //Place each word at y=100 with different textBaseline values
                ctx.textBaseline = "top";
                ctx.fillText("Top", 5, 100);
                ctx.textBaseline = "bottom";
                ctx.fillText("Bottom", 50, 100);
                ctx.textBaseline = "middle";
                ctx.fillText("Middle", 120, 100);
                ctx.textBaseline = "alphabetic";
                ctx.fillText("Alphabetic", 190, 100);
                ctx.textBaseline = "hanging";
                ctx.fillText("Hanging", 290, 100);
        </script>
```
### HTML canvas fillText() Method
``` html
        <canvas id="myCanvasft" width="300" height="150" style="border:1px solid #d3d3d3;">
                Your browser does not support the HTML5 canvas tag.</canvas>

        <script>
                var c = document.getElementById("myCanvasft");
                var ctx = c.getContext("2d");

                ctx.font = "20px Georgia";
                ctx.fillText("Hello World!", 10, 50);

                ctx.font = "30px Verdana";
                // Create gradient
                var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
                gradient.addColorStop("0", "magenta");
                gradient.addColorStop("0.5", "blue");
                gradient.addColorStop("1.0", "red");
                // Fill with gradient
                ctx.fillStyle = gradient;
                ctx.fillText("Big smile!", 10, 90);
        </script>
```

### HTML canvas globalAlpha Property
``` html
        <canvas id="myCanvasga" width="300" height="150" style="border:1px solid #d3d3d3;">
                Your browser does not support the HTML5 canvas tag.</canvas>

        <script>
                var c = document.getElementById("myCanvasga");
                var ctx = c.getContext("2d");
                ctx.fillStyle = "red";
                ctx.fillRect(20, 20, 75, 50);

                //Turn transparency on
                ctx.globalAlpha = 0.2;
                ctx.fillStyle = "blue";
                ctx.fillRect(50, 50, 75, 50);
                ctx.fillStyle = "green";
                ctx.fillRect(80, 80, 75, 50);
        </script>
```

## HTML canvas globalCompositeOperation Property

``` html
        <script>
                var gco = new Array();
                gco.push("source-atop");
                gco.push("source-in");
                gco.push("source-out");
                gco.push("source-over");
                gco.push("destination-atop");
                gco.push("destination-in");
                gco.push("destination-out");
                gco.push("destination-over");
                gco.push("lighter");
                gco.push("copy");
                gco.push("xor");

                var n;
                for (n = 0; n < gco.length; n++) {
                        document.write("<div id='p_" + n + "' style='float:left;'>" + gco[n] + ":<br>");
                        var c = document.createElement("canvas");
                        c.width = 120;
                        c.height = 100;
                        document.getElementById("p_" + n).appendChild(c);
                        var ctx = c.getContext("2d");
                        ctx.fillStyle = "blue";
                        ctx.fillRect(10, 10, 50, 50);
                        ctx.globalCompositeOperation = gco[n];
                        ctx.beginPath();
                        ctx.fillStyle = "red";
                        ctx.arc(50, 50, 30, 0, 2 * Math.PI);
                        ctx.fill();
                        document.write("</div>");
                }
        </script>
```

