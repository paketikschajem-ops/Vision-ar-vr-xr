let scene, camera, renderer;
let cubes = [];

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

  // LIGHT
  const light = new THREE.PointLight(0xffffff, 2);
  light.position.set(0, 2, 2);
  scene.add(light);

  // floating cubes
  for (let i = 0; i < 8; i++) {

    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(0.25, 0.25, 0.25),
      new THREE.MeshStandardMaterial({
        color: 0x00ffff,
        metalness: 0.6,
        roughness: 0.2
      })
    );

    cube.position.set(
      Math.random() * 2 - 1,
      Math.random() * 2 - 1,
      -2 - Math.random() * 2
    );

    scene.add(cube);
    cubes.push(cube);
  }

  // spatial windows
  if (typeof createWindow === "function") {
    for (let i = 0; i < 3; i++) {
      createWindow(scene);
    }
  }

  window.XR = {
    scene,
    camera,
    cubes
  };
}

function animate() {

  requestAnimationFrame(animate);

  // gyro
  if (typeof updateGyro === "function") {
    updateGyro(camera);
  }

  // floating windows
  if (typeof updateWindows === "function") {
    updateWindows();
  }

  // cube animation
  cubes.forEach(c => {
    c.rotation.x += 0.01;
    c.rotation.y += 0.01;
  });

  renderer.render(scene, camera);
}
