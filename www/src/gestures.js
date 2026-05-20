let grabbed = null;
let lastPinch = false;

function updateGestures(hand, objects, scene) {
  if (!hand) return;

  const index = hand[8];
  const thumb = hand[4];

  const pinch = Math.hypot(
    index.x - thumb.x,
    index.y - thumb.y
  );

  const isPinch = pinch < 0.05;

  if (isPinch && !lastPinch) {
    grabbed = objects[Math.floor(Math.random() * objects.length)];
  }

  if (isPinch && grabbed) {
    grabbed.position.x += (index.x - 0.5) * 0.02;
    grabbed.position.y -= (index.y - 0.5) * 0.02;
  }

  if (!isPinch && lastPinch) {
    grabbed = null;
  }

  lastPinch = isPinch;
}
