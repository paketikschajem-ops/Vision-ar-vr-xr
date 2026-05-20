const video = document.getElementById("camera");

const hands = new Hands({
  locateFile: (file) =>
    `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
});

hands.setOptions({
  maxNumHands: 2,
  modelComplexity: 0,
  minDetectionConfidence: 0.7,
  minTrackingConfidence: 0.7
});

hands.onResults(onHands);

const cam = new Camera(video, {
  onFrame: async () => {
    await hands.send({ image: video });
  },
  width: 640,
  height: 480
});

cam.start();

function onHands(results) {
  if (!results.multiHandLandmarks) return;

  results.multiHandLandmarks.forEach((h) => {
    const pinch = Math.hypot(h[8].x - h[4].x, h[8].y - h[4].y);

    if (pinch < 0.05) {
      document.body.style.filter = "brightness(1.2)";
      setTimeout(() => document.body.style.filter = "", 80);
    }
  });
}
