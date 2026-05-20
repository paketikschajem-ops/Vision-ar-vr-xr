const video = document.getElementById("camera");

const hands = new Hands({
  locateFile: (file) =>
    `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
});

hands.setOptions({
  maxNumHands: 2,
  modelComplexity: 1,
  minDetectionConfidence: 0.7,
  minTrackingConfidence: 0.7
});

hands.onResults(onHands);

const cam = new Camera(video, {
  onFrame: async () => {
    await hands.send({ image: video });
  },
  width: 1280,
  height: 720
});

cam.start();

function onHands(results) {
  if (!results.multiHandLandmarks) return;

  results.multiHandLandmarks.forEach((hand) => {
    const index = hand[8];
    const thumb = hand[4];

    const pinch = Math.hypot(
      index.x - thumb.x,
      index.y - thumb.y
    );

    if (pinch < 0.05) {
      console.log("PINCH");
    }
  });
}
