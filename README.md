# Assignment WebGL Computer Graphics IUP2022#

### Denta Bramasta Hidayat ###
### 5025201116 ###
------------------------------------------

## Assignment 1

- Pick last two digits of my Student ID 
- Pick last two alphabets of my funn name

|Last two digits  | Last two alphabets|
|:---:            | :---: |
|16               | at |


![screenshot web](https://i.ibb.co/BZqnWv4/Screen-Shot-2022-09-16-at-02-13-09.png)


## Assignment 2
### 1. Remain the application to consist of only one HTML5 Canvas.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Denta-01116</title>
</head>
<body onload="main()" style="background-image: url('wallpaper.jpg'); background-attachment: fixed;
background-size: 100% 100%;">
    <div style="display: flex; justify-content: center;">
        <h1 style="color:#ffffff;">Denta Bramasta Hiday<b style="color: rgb(0, 213, 255);">at</b>  / 50252011<b style="color: rgb(0, 213, 255);">16</b></h1>
      </div>

    <canvas id="myCanvas" width="800" height="800">
        Your browser does not support WebGL
    </canvas>
    <script src="glMatrix.js"></script>
    <script src="main.js"></script>
</body>z
</html>
```

### 2. Redefine the vertices data of the two digits and two alphabets so they are extruded into 3D objects. In other words, equip the vertices data with z values.

![](https://i.ibb.co/x7zpcQZ/Screenshot-2022-11-14-at-23-33-03.png)

### 3. With the help of glMatrix library:
### a. Set the camera's perspective with a field of view of 75 degrees, a square aspect ratio, a near clip of 0.5, and a far clip of 50.0.

```js
glMatrix.mat4.perspective(
        perspective,
        ((Math.PI / 2) - 15),  //75 degrees of camera 
        1.0,
        0.5,
        50.0
    );
```
### b.Set the camera's z-position 7.5 units back from the origin, yet keep the camera looking at the origin.

```js
var camera = [1.0, 0.0, 7.5]; //7.5 unit from the origin outwards the screen
```

### 4. (Automatically) Translate the first digit object horizontally, bouncing back between the right and left edges of the canvas with a speed of 0.0xxx units per frame where xxx is the last three digits of your student ID.

### 5. (Automatically) Scale the second digit object, bouncing back between its half-size and double-size with a scaling speed of your choice (it's up to you).

### 6. (Interactively) Rotate the first alphabet about the Y axis with an angular speed of your choice (it's up to you) when the left or right arrow key is pressed.

```js
switch (direction) {
            case "left":
                dX -= 0.1;
                break;
            case "right":
                dX += 0.1;
                break;

            default:
                break;
        }
```
for the complete code you can chek on my github files, because it is to much if I copy all of the code.

### 7. (Interactively) Rotate the second alphabet about the X axis with an angular speed of your choice (it's up to you) when the up or down key is pressed.
```js
switch (direction) {
            case "up":
                dY += 0.1;
                break;
            case "down":
                dY -= 0.1;
                break;
            default:
                break;
        }
```