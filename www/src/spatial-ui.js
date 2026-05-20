const windows = [];

function createWindow(scene) {
  const geo = new THREE.PlaneGeometry(0.6, 0.3);

  const mat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.12
  });

  const mesh = new THREE.Mesh(geo, mat);

  mesh.position.set(
    Math.random() * 2 - 1,
    Math.random() * 1.5,
    -2
  );

  scene.add(mesh);
  windows.push(mesh);
}

function updateWindows() {
  windows.forEach(w => {
    w.position.y += Math.sin(Date.now() * 0.001) * 0.0005;
  });
}
