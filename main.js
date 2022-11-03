function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");
  
    var vertices = [
      ...AShapeOuter,
      ...AShapeInner,
      ...TShape,
      ...oneShape,
      ...sixShapeOuter,
      ...sixShapeInner,
      ...line,
      // all coordinate
    ];
  
    // VERTEX SHADER
    var vertexShaderCode = `
      attribute vec2 aPosition;
      attribute vec4 a_color;
      varying vec4 v_color;
      void main () {
        gl_PointSize = 50.0;
        gl_Position = vec4(aPosition, 0.0, 1.0);
        v_color = a_color;
      }
      `;
  
    // Create shader to vertext shader
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);
  
    // FRAGMENT SHADER
    var fragmentShaderCode = `
          precision mediump float; // useful practice
          varying vec4 v_color;
    
            void main () {
              gl_FragColor = vec4(0, 1, 1, 1); 
            }
      `;
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);
  
    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);
  
    var buffrer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffrer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aPosition);
    gl.clearColor(0, 0, 0, 0.7);
  
    gl.clear(gl.COLOR_BUFFER_BIT);
  
    gl.lineWidth(17);
    gl.drawArrays(gl.TRIANGLES, 0, AShapeOuter.length / 2);
    gl.drawArrays(gl.TRIANGLES, 9, AShapeInner.length / 2);
    gl.drawArrays(gl.TRIANGLES, 13, TShape.length / 2);
    gl.drawArrays(gl.LINE_STRIP, 28, oneShape.length / 2);
    gl.drawArrays(gl.LINE_LOOP, 105, sixShapeOuter.length / 2);
    gl.drawArrays(gl.LINE_STRIP, 115, sixShapeInner.length / 2);
    gl.drawArrays(gl.LINE_LOOP, 135, line.length / 2);
  }
  