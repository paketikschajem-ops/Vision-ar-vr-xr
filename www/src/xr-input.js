let head = { x: 0, y: 0, z: 0 };

window.addEventListener("deviceorientation", (e) => {
  if (!e.alpha) return;

  head.x = e.alpha;
  head.y = e.beta;
  head.z = e.gamma;
});

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function updateGyro(camera) {
  camera.rotation.y = lerp(camera.rotation.y, head.x * Math.PI / 180, 0.08);
  camera.rotation.x = lerp(camera.rotation.x, head.y * Math.PI / 180, 0.08);
  camera.rotation.z = lerp(camera.rotation.z, head.z * Math.PI / 180, 0.08);
}
