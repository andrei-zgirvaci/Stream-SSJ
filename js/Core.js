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
  drawRotary
} from "./rotary.js";
import {
  componentIsAvailable,
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
    displayComponents();
  });

  window.addEventListener("gamepaddisconnected", function (gamepad) {
    displayComponents();
  });

  displayComponents();
  update();
});

function displayComponents() {
  for (let componentName in data) {
    const componentAvailable = componentIsAvailable(componentName);

    if (componentAvailable) {
      enableComponent(componentName);
    }
    else {
      disableComponent(componentName);
    }
  }
}

function enableComponent(componentName) {
  try {
    const element = document.getElementById(componentName);
    
    element.classList.remove("disabled");
  }
  catch (error) { }
}

function disableComponent(componentName) {
  try {
    const element = document.getElementById(componentName);
    
    element.classList.add("disabled");
  }
  catch (error) { }
}

function update() {
  updateData();

  drawCanvases();

  requestAnimationFrame(update);
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
  drawRotary(data.rotary.x, data.rotary.y);
}