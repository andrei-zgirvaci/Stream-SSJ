export const gamepadTypes = {
  stick: {
    ID: "VKB-Sim Gunfighter Modern Combat PRO (Vendor: 231d Product: 0125)"
  },
  throttle: {
    ID: "Pro Flight X65 Control System (Vendor: 06a3 Product: 0b6a)"
  },
  rotary: {
    ID: "VKB Tiny BOX  (Vendor: 231d Product: 011d)"
  }
};

export const gamepadsData = {
  stick: {
    gamepadID: gamepadTypes["stick"].ID,
    x: 0,
    y: 1,
  },
  rudder: {
    gamepadID: gamepadTypes["stick"].ID,
    x: 2
  },
  throttle1: {
    gamepadID: gamepadTypes["throttle"].ID,
    y: 2
  },
  throttle2: {
    gamepadID: gamepadTypes["throttle"].ID,
    y: 6
  },
  rotary: {
    gamepadID: gamepadTypes["rotary"].ID,
    x: 3,
    y: 4
  }
}

export function componentIsAvailable(gamepadType, connectedGamepads = navigator.getGamepads()) {
  let gamepadIsConnected = false;

  try {
    gamepadIsConnected = connectedGamepads.some(gamepad => gamepad.id === gamepadsData[gamepadType].gamepadID);
  } catch (error) {}

  return gamepadIsConnected;
}

export function getGamepad(gamepadID, connectedGamepads = navigator.getGamepads()) {
  return connectedGamepads.find(gamepad => gamepad.id === gamepadID)
}

export function getAxeValue(gamepadType, axe, connectedGamepads=navigator.getGamepads()) {
  let value = null;

  try {
    const gamepad = getGamepad(gamepadsData[gamepadType].gamepadID, connectedGamepads);
    value = gamepad.axes[gamepadsData[gamepadType][axe]];
  }
  catch (error) {
    value = 0;
  }

  return value;
}

export function setCSSVariable(cssVariableName, value) {
  document.documentElement.style.setProperty(`--${cssVariableName}`, value);
}

export function getCSSVariable(cssVariableName) {
  return getComputedStyle(document.documentElement).getPropertyValue(`--${cssVariableName}`).trim();
}