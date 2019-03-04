import {
  componentIsAvailable,
  getGamepad,
  getAxeValue
} from "../js/utils.js";


test('componentIsAvailable', () => {
  const connectedGamepads = [{
      id: " VKB-Sim Gunfighter Modern Combat Pro  (Vendor: 231d Product: 0125)"
    },
    {
      id: "Pro Flight X65 Control System (Vendor: 06a3 Product: 0b6a)"
    }
  ]

  // true
  expect(componentIsAvailable("stick", connectedGamepads)).toBe(true);
  expect(componentIsAvailable("rudder", connectedGamepads)).toBe(true);
  expect(componentIsAvailable("throttle1", connectedGamepads)).toBe(true);
  expect(componentIsAvailable("throttle2", connectedGamepads)).toBe(true);

  // false
  expect(componentIsAvailable("wrongType", connectedGamepads)).toBe(false);
  expect(componentIsAvailable("rotary", connectedGamepads)).toBe(false);
});

test('getGamepad', () => {
  const connectedGamepads = [{
      id: " VKB-Sim Gunfighter Modern Combat Pro  (Vendor: 231d Product: 0125)"
    },
    {
      id: "Pro Flight X65 Control System (Vendor: 06a3 Product: 0b6a)"
    }
  ]

  // true
  expect(getGamepad(connectedGamepads[0].id, connectedGamepads)).toEqual(connectedGamepads[0]);
  expect(getGamepad(connectedGamepads[1].id, connectedGamepads)).toEqual(connectedGamepads[1]);

  // false
  expect(getGamepad("VKB Tiny BOX  (Vendor: 231d Product: 011d)", connectedGamepads)).toBe(undefined);
});

test('getAxeValue', () => {
  const connectedGamepads = [{
      id: " VKB-Sim Gunfighter Modern Combat Pro  (Vendor: 231d Product: 0125)",
      axes: [
        5,
        2,
        1
      ]
    },
    {
      id: "Pro Flight X65 Control System (Vendor: 06a3 Product: 0b6a)",
      axes: [
        null,
        null,
        9,
        null,
        null,
        null,
        20,
      ]
    },
    {
      id: "VKB Tiny BOX  (Vendor: 231d Product: 011d)",
      axes: [
        null,
        null,
        null,
        4,
        7
      ]
    }
  ]

  // true
  expect(getAxeValue("stick", "x", connectedGamepads)).toBe(5);
  expect(getAxeValue("stick", "y", connectedGamepads)).toBe(2);

  expect(getAxeValue("throttle1", "y", connectedGamepads)).toBe(9);
  expect(getAxeValue("throttle2", "y", connectedGamepads)).toBe(20);

  expect(getAxeValue("rudder", "x", connectedGamepads)).toBe(1);

  expect(getAxeValue("rotary", "x", connectedGamepads)).toBe(4);
  expect(getAxeValue("rotary", "y", connectedGamepads)).toBe(7);

  // false
  expect(getAxeValue("wrongType", "y", connectedGamepads)).toBe(0);
});
