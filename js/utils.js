export const gamepads = {
  stick: {
    ID: " VKB-Sim Gunfighter Modern Combat Pro  (Vendor: 231d Product: 0125)"
  },
  throttle: {
    ID: "Pro Flight X65 Control System (Vendor: 06a3 Product: 0b6a)"
  },
  rotary: {
    ID: "VKB Tiny BOX  (Vendor: 231d Product: 011d)"
  }
};

export const gamepadsAxesInfo = {
  stick: {
    gamepadID: gamepads["stick"].ID,
    x: 0,
    y: 1,
  },
  rudder: {
    gamepadID: gamepads["stick"].ID,
    x: 6
  },
  throttle1: {
    gamepadID: gamepads["throttle"].ID,
    y: 2
  },
  throttle2: {
    gamepadID: gamepads["throttle"].ID,
    y: 6
  },
  rotary: {
    gamepadID: gamepads["rotary"].ID,
    x: 3,
    y: 4
  }
}

export function componentIsAvailable(gamepadType, connectedGamepads = navigator.getGamepads()) {
  let gamepadIsConnected = false;

  for (let gamepad of connectedGamepads) {
    try {
      if (gamepad.id === gamepadsAxesInfo[gamepadType].gamepadID) {
        return true
      }
    } catch (error) {
      console.log(error);
    }
  }

  return gamepadIsConnected;
}

export function getGamepad(gamepadID, connectedGamepads = navigator.getGamepads()) {
  for (let gamepad of connectedGamepads) {
    if (gamepad.id === gamepadID) {
      return gamepad
    }
  }

  return undefined;
}

export function getAxeValue(gamepadType, axe, connectedGamepads = navigator.getGamepads()) {
  let value = null;

  try {
    const gamepad = getGamepad(gamepadsAxesInfo[gamepadType].gamepadID, connectedGamepads);
    value = gamepad.axes[gamepadsAxesInfo[gamepadType][axe]];
  } catch (error) {
    console.log(error);
    value = 0;
  }

  return value;
}

export function getRealPosValue(rawValue) {
  return parseFloat(Math.round(rawValue * 100) / 100);
}

export function getCSSVariable(cssVariableName) {
  return getComputedStyle(document.documentElement).getPropertyValue(`--${cssVariableName}`).trim();
}
