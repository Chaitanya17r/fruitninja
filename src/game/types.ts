export interface FruitConfig {
  key: string;
  points: number;
  scale: number;
}

export interface PowerUpConfig {
  key: string;
  duration: number;
  effect: string;
}

export type ComboBonus = {
  multiplier: number;
  duration: number;
};