import { useEffect, useRef } from 'react';

function generateSphereVertices(radius, latitudeBands, longitudeBands) {
  const vertices = [];

  for (let lat = 0; lat <= latitudeBands; lat++) {
    const theta = (lat * Math.PI) / latitudeBands;
    const sinTheta = Math.sin(theta);
    const cosTheta = Math.cos(theta);

    for (let long = 0; long <= longitudeBands; long++) {
      const phi = (long * 2 * Math.PI) / longitudeBands;
      const sinPhi = Math.sin(phi);
      const cosPhi = Math.cos(phi);

      const x = cosPhi * sinTheta;
      const y = cosTheta;
      const z = sinPhi * sinTheta;

      vertices.push(radius * x, radius * y, radius * z);
    }
  }

  return vertices;
}

const SphereCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    // @ts-ignore
    const gl = canvas.getContext('webgl');

    // Vertex shader source code
    const vsSource = `
     attribute vec3 a_position;
     varying vec3 v_normal;

     void main() {
     	v_normal = a_position;
     	gl_Position = projectionMatrix * modelViewMatrix * vec4(a_position, 1.0);
     }    
    `;

    // Fragment shader source code
    const fsSource = `
     precision mediump float;
     varying vec3 v_normal;
     uniform samplerCube u_environmentMap;

     void main() {
     	vec3 normal = normalize(v_normal);
	vec3 reflection = reflect(normalize(-position), normal);
	gl_FragColor = textureCube(u_environmentMap, reflection);
     }
    `;

    const envMap = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_CUBE_MAP, envMap);

    const faces = [
	    'posx.jpg', 'negx.jpg',
	    'posy.jpg', 'negy.jpg',
	    'posz.jpg', 'negz.jpg'
    ];

    faces.forEach((face, index) => {
		    const image = new Image();
		    image.src = face;
		    image.onload = function() {
		    gl.bindTexture(gl.TEXTURE_CUBE_MAP, envMap);
		    gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + index, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
		    }
		    });

    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    const u_environmentMap = gl.getUniformLocation(program, 'u_environmentMap');
    gl.uniform1i(u_environmentMap, 0);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_CUBE_MAP, envMap);



    // Create shaders
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vsSource);
    gl.compileShader(vertexShader);

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fsSource);
    gl.compileShader(fragmentShader);

    // Create shader program
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    // Create vertex buffer
    const vertices = generateSphereVertices(1.0, 40, 40); // Fill this array with sphere vertices
    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);

    // Clear canvas and draw points
    gl.clearColor(0.0, 0.0, 0.0, 0.0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.POINTS, 0, vertices.length / 3);
  }, []);

  return <canvas ref={canvasRef} />;
};

export default SphereCanvas;
