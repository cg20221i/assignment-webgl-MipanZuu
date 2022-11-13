function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    var vertices = [
        // Face-Left-Back 4       // Red      // Surface orientation
        0, -0.5, 0, 1, 0, 0, 0, 0, -1,   // Index:  0    
        -0.5, 0, 0, 1, 0, 0, 0, 0, -1,   // Index:  1
        0, 0.5, 0, 1, 0, 0, 0, 0, -1,   // Index:  2
        0.5, 0, 0, 1, 0, 0, 0, 0, -1,   // Index:  3
        //scasca
        0.5, 0, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  4    
        0, 0.5, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  5
        0.5, 1, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  6
        1, 0.5, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  7
        //scasca
        0, -0.5, 0, 1, 0, 0, 0, 0, -1,   // Index:  8    
        0.5, 0, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  9
        -0.5, 0, 0, 1, 0, 0, 0, 0, -1,   // Index:  10
        0, 0.5, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  11

        0, 0.5, 0, 1, 0, 0, 0, 0, -1,   // Index:  12    
        0.5, 1, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  13
        0.5, 0, 0, 1, 0, 0, 0, 0, -1,   // Index:  14
        1, 0.5, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  15

        0, -0.5, 0, 1, 0, 0, 0, 0, -1,   // Index:  16    
        0.5, 0, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  17
        0.5, 0, 0, 1, 0, 0, 0, 0, -1,   // Index:  18
        1, 0.5, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  19

        -0.5, 0, 0, 1, 0, 0, 0, 0, -1,   // Index:  20    
        0, 0.5, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  21
        0, 0.5, 0, 1, 0, 0, 0, 0, -1,   // Index:  22
        0.5, 1, 1.4, 1, 0, 0, 0, 0, 0,   // Index:  23

        //right side 
        1, 0.5, 0, 1, 0, 0, 0, 0, -1,   // Index:  24   
        0.5, 1, 0, 1, 0, 0, 0, 0, -1,   // Index:  25
        1, 1.5, 0, 1, 0, 0, 0, 0, -1,   // Index:  26
        1.5, 1, 0, 1, 0, 0, 0, 0, -1,   // Index:  27
        //scasca
        0.5, 0, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  28   
        0, 0.5, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  29
        0.5, 1, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  30
        1, 0.5, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  31
        //scasca
        1, 0.5, 0, 1, 0, 0, 0, 0, -1,   // Index:  32  
        0.5, 0, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  33
        0.5, 1, 0, 1, 0, 0, 0, 0, -1,   // Index:  34
        0, 0.5, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  35

        1, 1.5, 0, 1, 0, 0, 0, 0, -1,   // Index:  36  
        0.5, 1, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  37
        1.5, 1, 0, 1, 0, 0, 0, 0, -1,   // Index:  38
        1, 0.5, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  39

        1, 0.5, 0, 1, 0, 0, 0, 0, -1,   // Index:  40   
        0.5, 0, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  41
        1.5, 1, 0, 1, 0, 0, 0, 0, -1,   // Index:  42
        1, 0.5, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  43

        0.5, 1, 0, 1, 0, 0, 0, 0, -1,   // Index:  44   
        0, 0.5, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  45
        1, 1.5, 0, 1, 0, 0, 0, 0, -1,   // Index:  46
        0.5, 1, 1.4, 1, 0, 0, 0, 0, 0,   // Index:  47

        //T
        3, 2.5, 0, 1, 0, 0, 0, 0, -1,   // Index:  48  
        2.5, 3, 0, 1, 0, 0, 0, 0, -1,   // Index:  49
        3, 3.5, 0, 1, 0, 0, 0, 0, -1,   // Index:  50
        3.5, 3, 0, 1, 0, 0, 0, 0, -1,   // Index:  51

        3, 2.5, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  52 
        2.5, 3, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  53
        3, 3.5, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  54
        3.5, 3, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  55

        3, 2.5, 0, 1, 0, 0, 0, 0, -1,   // Index:  56
        3, 2.5, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  57
        2.5, 3, 0, 1, 0, 0, 0, 0, -1,   // Index:  58
        2.5, 3, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  59

        3, 3.5, 0, 1, 0, 0, 0, 0, -1,   // Index:  60
        3, 3.5, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  61
        3.5, 3, 0, 1, 0, 0, 0, 0, -1,   // Index:  62
        3.5, 3, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  63

        3, 3.5, 0, 1, 0, 0, 0, 0, -1,   // Index:  60
        3, 3.5, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  61
        3.5, 3, 0, 1, 0, 0, 0, 0, -1,   // Index:  62
        3.5, 3, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  63
    ];

    var indices = [
        // A
        0, 1, 2, 0, 2, 3,
        4, 5, 6, 4, 6, 7,    
        8, 9, 10, 8, 10, 11,
        12, 13, 14, 12, 14, 15, 
        16, 17, 18, 16, 18, 19,  
        20, 21, 22, 20, 22, 23,  
        24, 25, 26, 24, 26, 27, 
        28, 29, 30, 28, 30, 31, 
        32, 33, 34, 32, 34, 35, 
        36, 37, 38, 36, 38, 39, 
        40, 41, 42, 40, 42, 43, 
        44, 45, 46, 44, 46, 47,
        // T 
        48, 49, 50, 48, 50, 51,
        52, 53, 54, 52, 54, 55, 
        56, 57, 58, 56, 58, 59,
        60, 61, 62, 60, 62, 63,
    ];

    // Create a linked-list for storing the vertices data in the GPU realm
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    var indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

    // VERTEX SHADER
    var vertexShaderCode = `
        attribute vec3 aPosition;
        attribute vec3 aColor;
        attribute vec3 aNormal;
        uniform mat4 uModel;
        uniform mat4 uView;
        uniform mat4 uProjection;
        varying vec3 vPosition;
        varying vec3 vColor;
        varying vec3 vNormal;
        void main () {
            vec4 position = vec4(aPosition, 1.0);
            gl_Position = uProjection * uView * uModel * position;
            // gl_Position is the final destination for storing
            //  positional data for the rendered vertex
            vColor = aColor;
            vNormal = aNormal;
            vPosition = (uModel * position).xyz;
        }
    `;
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);

    // FRAGMENT SHADER
    var fragmentShaderCode = `
        precision mediump float;
        varying vec3 vColor;
        uniform vec3 uLightConstant;      // It represents the light color
        uniform float uAmbientIntensity;  // It represents the light intensity
        varying vec3 vPosition;
        varying vec3 vNormal;
        uniform vec3 uLightPosition;
        uniform vec3 uViewerPosition;
        uniform mat3 uNormalModel;
        void main() {
            vec3 ambient = uLightConstant * uAmbientIntensity;
            vec3 lightDirection = uLightPosition - vPosition;
            vec3 normalizedLight = normalize(lightDirection);
            vec3 normalizedNormal = normalize(uNormalModel * vNormal);
            float cosTheta = dot(normalizedNormal, normalizedLight);
            vec3 diffuse = vec3(0.0, 0.0, 0.0);
            if (cosTheta > 0.0) {
                float diffuseIntensity = cosTheta;
                diffuse = uLightConstant * diffuseIntensity;
            }
            vec3 normalizedReflector = normalize(reflect(-lightDirection, normalizedNormal));
            vec3 normalizedViewer = normalize(uViewerPosition - vPosition);
            float cosPhi = dot(normalizedReflector, normalizedViewer);
            vec3 specular = vec3(0., 0., 0.);
            if (cosPhi > 0.) {
                float shininessConstant = 100.0;    // bare minimum spec for metal
                float specularIntensity = pow(cosPhi, shininessConstant);
                specular = uLightConstant * specularIntensity;
            }
            vec3 phong = ambient + diffuse + specular;
            gl_FragColor = vec4(phong * vColor, 1.0);
            // gl_FragColor is the final destination for storing
            //  color data for the rendered fragment
        }
    `;
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);

    // Comparing to C-Programming, we may imagine
    //  that up to this step we have created two
    //  object files (.o), for the vertex and fragment shaders

    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    // Local variables
    var isAnimated = false;
    var theta = 0.0;
    var direction = "";
    var dX = 0.0;
    var dY = 0.0;
    // For the model (all linear transformation)
    var uModel = gl.getUniformLocation(shaderProgram, "uModel");

    // For the camera
    var camera = [0.0, 0.0, 7.5]; //7.5 unit from the origin outwards the screen
    var uView = gl.getUniformLocation(shaderProgram, "uView");
    var view = glMatrix.mat4.create();  // Create an identity matrix
    glMatrix.mat4.lookAt(
        view,
        camera,
        [camera[0], 0.0, -10.0],
        [0.0, 1.0, 0.0]
    );
    gl.uniformMatrix4fv(uView, false, view);

    // For the projection
    var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");
    var perspective = glMatrix.mat4.create();
    glMatrix.mat4.perspective(
        perspective,
        ((Math.PI / 2) - 15),  // 75 degrees 
        1.0,
        0.5,
        50.0
    );
    gl.uniformMatrix4fv(uProjection, false, perspective);

    // For the lighting and shading
    var uLightConstant = gl.getUniformLocation(shaderProgram, "uLightConstant");
    // Ambient
    var uAmbientIntensity = gl.getUniformLocation(shaderProgram, "uAmbientIntensity");
    gl.uniform3fv(uLightConstant, [1.0, 1.0, 1.0]);   // white color
    gl.uniform1f(uAmbientIntensity, 0.4);             // 40% intensity
    // Diffuse
    var uLightPosition = gl.getUniformLocation(shaderProgram, "uLightPosition");
    gl.uniform3fv(uLightPosition, [1.0, 0.0, 1.0]);
    var uNormalModel = gl.getUniformLocation(shaderProgram, "uNormalModel");
    // Specular
    var uViewerPosition = gl.getUniformLocation(shaderProgram, "uViewerPosition");

    // Local functions
    // MOUSE
    var dragging, prevx, prevy, rotation = glMatrix.mat4.create();
    function onMouseDown(event) {
        var x = event.clientX;
        var y = event.clientY;
        var rect = event.target.getBoundingClientRect();
        if (
            rect.left <= x &&
            rect.right >= x &&
            rect.top <= y &&
            rect.bottom >= y
        ) {
            dragging = true;
            prevx = x;
            prevy = y;
        }
    }
    function onMouseUp(event) {
        dragging = false;
    }
    function onMouseMove(event) {
        if (dragging) {
            var x = event.clientX;
            var y = event.clientY;
            var xdiff = x - prevx;
            var ydiff = y - prevy;
            var inverseRotation = glMatrix.mat4.create();
            glMatrix.mat4.invert(inverseRotation, rotation);
            var xAxis = [1, 0, 0, 0];
            var yAxis = [0, 1, 0, 0];
            glMatrix.vec4.transformMat4(xAxis, xAxis, inverseRotation);
            glMatrix.vec4.transformMat4(yAxis, yAxis, inverseRotation);
            glMatrix.mat4.rotate(rotation, rotation, glMatrix.glMatrix.toRadian(xdiff), yAxis);
            glMatrix.mat4.rotate(rotation, rotation, glMatrix.glMatrix.toRadian(ydiff), xAxis);
            prevx = x;
            prevy = y;
        }
    }
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);

    // KEYBOARD or even for changing the camera location
    function onKeyDown(event) {
        switch (event.keyCode) {
            case 87: // Object UP
                direction = "up";
                break;
            case 83: // Object DOWN
                direction = "down";
                break;
            case 68: // Object RIGHT
                direction = "right";
                break;
            case 65: // Object LEFT
                direction = "left";
                break;
            case 38: // Camera UP
                camera[1] += 0.05;
                gl.uniform3fv(uViewerPosition, camera);
                glMatrix.mat4.lookAt(
                    view,
                    camera,
                    [camera[0], 0.0, -10.0],
                    [0.0, 1.0, 0.0]
                );
                gl.uniformMatrix4fv(uView, false, view);
                break;
            case 40: // Camera DOWN
                camera[1] -= 0.05;
                gl.uniform3fv(uViewerPosition, camera);
                glMatrix.mat4.lookAt(
                    view,
                    camera,
                    [camera[0], 0.0, -10.0],
                    [0.0, 1.0, 0.0]
                );
                gl.uniformMatrix4fv(uView, false, view);
                break;
            case 39: // Camera RIGHT
                camera[0] += 0.05;
                gl.uniform3fv(uViewerPosition, camera);
                glMatrix.mat4.lookAt(
                    view,
                    camera,
                    [camera[0], 0.0, -10.0],
                    [0.0, 1.0, 0.0]
                );
                gl.uniformMatrix4fv(uView, false, view);
                break;
            case 37: // Camera LEFT
                camera[0] -= 0.05;
                gl.uniform3fv(uViewerPosition, camera);
                glMatrix.mat4.lookAt(
                    view,
                    camera,
                    [camera[0], 0.0, -10.0],
                    [0.0, 1.0, 0.0]
                );
                gl.uniformMatrix4fv(uView, false, view);
                break;
            default:
                break;
        }
    }
    function onKeyUp(event) {
        direction = "";
    }
    function onKeyPress(event) {
        console.log('keypress');
        if (event.keyCode == 32) {  // Space button
            isAnimated = !isAnimated;
        }
    }
    document.addEventListener("keypress", onKeyPress)
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);

    // Teach the GPU how to collect
    //  the positional values from ARRAY_BUFFER
    //  for each vertex being processed
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(
        aPosition,
        3,
        gl.FLOAT,
        false,
        9 * Float32Array.BYTES_PER_ELEMENT,
        0);
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(
        aColor,
        3,
        gl.FLOAT,
        false,
        9 * Float32Array.BYTES_PER_ELEMENT,
        3 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aColor);
    var aNormal = gl.getAttribLocation(shaderProgram, "aNormal");
    gl.vertexAttribPointer(
        aNormal,
        3,
        gl.FLOAT,
        false,
        9 * Float32Array.BYTES_PER_ELEMENT,
        6 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aNormal);

    function render() {
        gl.enable(gl.DEPTH_TEST);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        var model = glMatrix.mat4.create();
        if (isAnimated) {
            theta += 0.01;
        }
        switch (direction) {
            case "up":
                dY += 0.1;
                break;
            case "down":
                dY -= 0.1;
                break;
            case "left":
                dX -= 0.1;
                break;
            case "right":
                dX += 0.1;
                break;

            default:
                break;
        }
        glMatrix.mat4.translate(model, model, [dX, dY, 0.0]);
        glMatrix.mat4.rotateZ(rotation, rotation, theta);
        glMatrix.mat4.rotateY(rotation, rotation, theta);
        glMatrix.mat4.multiply(model, model, rotation);
        gl.uniformMatrix4fv(uModel, false, model);

        // For transforming the normal vector
        var normalModel = glMatrix.mat3.create();
        glMatrix.mat3.normalFromMat4(normalModel, model);
        gl.uniformMatrix3fv(uNormalModel, false, normalModel);

        gl.drawElements(gl.TRIANGLES, indices.length,
            gl.UNSIGNED_SHORT, 0);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}