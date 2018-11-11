import {
  drawStick
} from "./stick.js";
import {
  drawThrottle
} from "./throttle.js";
import {
  drawRudder
} from "./rudder.js";
import {
  connected,
  disconnected,
  getAxeValue
} from "./utils.js";

let data = {
  stick: {
    x: 0,
    y: 0
  },
  rudder: {
    x: 0
  },
  throttle1: {
    y: 0
  },
  throttle2: {
    y: 0
  },
  rotary: {
    x: 0,
    y: 0
  }
}

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("gamepadconnected", function (gamepad) {
    connected(gamepad);
  });

  window.addEventListener("gamepaddisconnected", function (gamepad) {
    disconnected(gamepad);
  });

  connected({ id: "VKB-Sim Gunfighter Modern Combat PRO (Vendor: 231d Product: 0125)" });

  update();
});

function update() {
  updateData();

  drawCanvases();

  // requestAnimationFrame(update);
}

function updateData() {
  data.stick.x = getAxeValue("stick", "x");
  data.stick.y = getAxeValue("stick", "y");

  data.rudder.x = getAxeValue("rudder", "x");
  
  data.throttle1.y = getAxeValue("throttle1", "y");
  data.throttle2.y = getAxeValue("throttle2", "y");
  
  data.rotary.x = getAxeValue("rotary", "x");
  data.rotary.y = getAxeValue("rotary", "y");
}

function drawCanvases() {
  drawStick(data.stick.x, data.stick.y);
  drawThrottle(1, data.throttle1.y);
  drawThrottle(2, data.throttle2.y);
  drawRudder(data.rudder.x);
}