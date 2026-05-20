function panel(text, x, y) {
  const el = document.createElement("div");

  el.className = "glass";
  el.innerText = text;

  el.style.left = x + "px";
  el.style.top = y + "px";

  document.getElementById("ui").appendChild(el);
}

panel("🧠 XR Ready", 50, 80);
panel("✋ Hands ON", 50, 160);
panel("🥽 Cardboard OK", 50, 240);
