var lineMaterial = new THREE.LineBasicMaterial({
	color: 'rgb(167, 26, 247)',
	linewidth: 1
});

function distanceVector( v1, v2 )
{
    var dx = Math.abs(v1.x - v2.x);
    var dy = Math.abs(v1.y - v2.y);

    return Math.sqrt( dx * dx + dy * d );
}

Line = function (scene,n1,n2) {
	this.n1 = n1;
	this.n2 = n2;
	this.scene = scene;

	this.geom = new THREE.Geometry();
    this.geom.vertices.push(new THREE.Vector3(-10, 0, 0));
    this.geom.vertices.push(new THREE.Vector3(0, 10, 0));

	this.object = new THREE.Line(
		this.geom,
		new THREE.LineBasicMaterial({
			color: 'rgb(167, 26, 247)',
			linewidth: 1
		}));

	scene.add(this.object);
}
Line.prototype.update = function (frame) {
	var a = Math.min(Math.max(distanceVector(this.n1.object.position,this.n2.object.position)/80,0),1)
	this.object.material.color.setHSL(
		.1,
		.5,
		1-a
	)

	this.geom.vertices[0] = this.n1.object.position;
	this.geom.vertices[1] = this.n2.object.position;


	this.geom.verticesNeedUpdate = true;
	this.object.verticesNeedUpdate = true;
}
