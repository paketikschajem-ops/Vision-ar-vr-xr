const anchors = [];

function placeAnchor(scene, position) {
  const icon = new THREE.Mesh(
    new THREE.PlaneGeometry(0.25, 0.25),
    new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      transparent: true
    })
  );

  icon.position.copy(position);

  scene.add(icon);
  anchors.push(icon);

  return icon;
}

function updateAnchors(hand, scene) {
  if (!hand) return;

  const index = hand[8];

  const pos = new THREE.Vector3(
    (index.x - 0.5) * 2,
    -(index.y - 0.5) * 2,
    -2
  );

  if (Math.random() < 0.01) {
    placeAnchor(scene, pos);
  }
}
