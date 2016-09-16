Node = function (scene,material,x,y) {
	this.x = x;
	this.y = y;
	this.scene = scene;

	this.mx = Math.random() * 50;
	this.my = Math.random() * 50;

	// set up the sphere vars
	var radius = 1, segments = 5, rings = 5;

	this.object = new THREE.Mesh(
		new THREE.SphereGeometry(radius, segments, rings),
		nodeMaterial);

	scene.add(this.object);
}
Node.prototype.update = function (frame) {

	this.object.position.x = this.x + Math.sin(frame/50)*this.mx;
	this.object.position.y = this.y + Math.cos(frame/50)*this.my;

}
