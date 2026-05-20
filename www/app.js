let scene, camera, renderer;

let objects = [];

init();
animate();

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
    alpha: true,
    antialias: true
  });

  renderer.setSize(window.innerWidth, window.innerHeight);

  // 🧊 objects
  for (let i = 0; i < 6; i++) {
    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(0.2, 0.2, 0.2),
      new THREE.MeshNormalMaterial()
    );

    cube.position.set(
      Math.random() * 2 - 1,
      Math.random() * 1.5 - 0.5,
      -1.5 - Math.random()
    );

    scene.add(cube);
    objects.push(cube);
  }

  // 🧩 spatial UI
  for (let i = 0; i < 3; i++) {
    createWindow(scene);
  }

  // expose global XR state
  window.XR = { scene, camera, objects };
}

function animate() {
  requestAnimationFrame(animate);

  updateGyro(camera);
  updateWindows();

  if (window.handLandmarks) {
    updateGestures(window.handLandmarks, window.XR.objects, window.XR.scene);
  }

  renderer.render(scene, camera);
}
