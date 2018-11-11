const gamepads = {
  stick: {
    ID: "VKB-Sim Gunfighter Modern Combat PRO (Vendor: 231d Product: 0125)"
  },
  throttles: {
    ID: "Pro Flight X65 Control System (Vendor: 06a3 Product: 0b6a)"
  },
  rotary: {
    ID: "VKB Tiny BOX  (Vendor: 231d Product: 011d)"
  }
};

const axes = {
  stick: {
    gamepadID: gamepads["stick"].ID,
    x: 0,
    y: 1,
  },
  rudder: {
    gamepadID: gamepads["stick"].ID,
    x: 2
  },
  throttle1: {
    gamepadID: gamepads["throttles"].ID,
    y: 2
  },
  throttle2: {
    gamepadID: gamepads["throttles"].ID,
    y: 6
  },
  rotary: {
    gamepadID: gamepads["rotary"].ID,
    x: 3,
    y: 4
  }
}

export function gamepadConnected(connectedGamepad) {
  connectedGamepads[connectedGamepad.id] = true;
}

export function gamepadDisconnected(disconnectedGamepad) {
  delete connectedGamepads[disconnectedGamepad.id];
}

export function gamepadIsConnected(gamepadType) {
  return navigator.getGamepads().find(gamepad => gamepad.id === axes[gamepadType].gamepadID) !== null;
}

export function getGamepad(gamepadID) {
  const gamepad = null;

  try {
    gamepad = navigator.getGamepads().find(gamepad => gamepad.id === gamepadID)
	} catch(error){
		console.log(`I couldn't find gamepad(${gamepadID})`);
  }
  
  return gamepad;
}

export function getAxeValue(gamepadType, axe) {
  let value = null;

  try {
    const gamepad = getGamepad(axes[gamepadType].gamepadID);
    value = gamepad.axes[axes[gamepadType][axe]];
  } catch (error) {
    value = 0;
  }

  return value;
}

export function setCSSVariable(cssVariableName, value) {
  document.documentElement.style.setProperty(`--${cssVariableName}`, value);
}

export function getCSSVariable(cssVariableName) {
  return getComputedStyle(document.documentElement).getPropertyValue(`--${cssVariableName}`);
}