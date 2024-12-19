export const GAME_CONFIG = {
  width: 800,
  height: 600,
  gravity: 300,
  fruitSpawnInterval: {
    initial: 1500,
    min: 500
  },
  points: {
    small: 10,
    medium: 20,
    large: 30,
    comboBonus: {
      two: 1.5,
      three: 2
    }
  },
  powerUps: {
    duration: 5000,
    spawnChance: 0.1
  }
} as const;