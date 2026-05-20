let scene, camera, renderer;

init();

function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    100
  );

  renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById("scene"),
    alpha: true
  });

  renderer.setSize(window.innerWidth, window.innerHeight);

  const cube = new THREE.Mesh(
    new THREE.BoxGeometry(0.3, 0.3, 0.3),
    new THREE.MeshNormalMaterial()
  );

  cube.position.z = -1;
  scene.add(cube);

  animate();
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
