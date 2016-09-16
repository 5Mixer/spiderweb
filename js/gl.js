// set the scene size
var WIDTH = 800,
	HEIGHT = 600;

// set some camera attributes
var VIEW_ANGLE = 45,
	ASPECT = WIDTH / HEIGHT,
	NEAR = 0.1,
	FAR = 10000;

// get the DOM element to attach to
// - assume we've got jQuery to hand
var container = document.getElementById('container');

// create a WebGL renderer, camera
// and a scene
var renderer = new THREE.WebGLRenderer({
  antialias: true
});

var camera = new THREE.PerspectiveCamera(  VIEW_ANGLE,
								ASPECT,
								NEAR,
								FAR  );
var scene = new THREE.Scene();

// the camera starts at 0,0,0 so pull it back
camera.position.z = 300;

// start the renderer
renderer.setSize(WIDTH, HEIGHT);

// attach the render-supplied DOM element
container.appendChild(renderer.domElement);

var nodes = [];
var lines = [];

// create the sphere's material
var nodeMaterial = new THREE.MeshPhongMaterial(
{
	color: 'rgb(223, 41, 41)'
});

for (var i=0; i<20; i++){
	var a = Math.random() * 360;
	var d = Math.random() * 90;
	nodes.push(new Node(scene, nodeMaterial, Math.sin(a)*d,Math.cos(a)*d));
}

for (var a=0; a<nodes.length; a++){
	for (var b=0; b<nodes.length; b++){

		lines.push(new Line(scene,nodes[a],nodes[b]))
	}
}

// and the camera
scene.add(camera);

// create a point light
var pointLight = new THREE.PointLight( 0xFFFFFF );
pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;

scene.add(pointLight);


var frame = 0;

function update () {
	frame++;

	for (var i=0; i<nodes.length; i++){
		nodes[i].update(frame);
	}

	for (var i=0; i<lines.length; i++){
		lines[i].update(frame);
	}

	renderer.render(scene, camera);

	requestAnimationFrame(update);
}
requestAnimationFrame(update);
