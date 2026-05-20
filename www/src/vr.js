let vrEnabled = false;

function enableVR() {
  vrEnabled = true;
}

function renderStereo(renderer, scene, camera) {
  if (!vrEnabled) return;

  const w = window.innerWidth / 2;
  const h = window.innerHeight;

  renderer.setScissorTest(true);

  renderer.setViewport(0, 0, w, h);
  renderer.render(scene, camera);

  renderer.setViewport(w, 0, w, h);
  renderer.render(scene, camera);
}
