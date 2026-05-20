function createPanel(text) {
  const el = document.createElement("div");
  el.className = "glass";
  el.innerText = text;

  el.style.left = Math.random() * 200 + "px";
  el.style.top = Math.random() * 400 + "px";

  document.getElementById("ui").appendChild(el);
}

createPanel("Vision XR UI");
createPanel("Hand Tracking Active");
