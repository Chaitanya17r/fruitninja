import { GAME_CONFIG } from '../config';

export class ScoreManager {
  private score: number = 0;
  private combo: number = 0;
  private comboTimer?: Phaser.Time.TimerEvent;
  private scene: Phaser.Scene;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
    this.setupEventListeners();
  }

  private setupEventListeners() {
    this.scene.events.on('fruitSliced', this.handleFruitSlice, this);
  }

  private handleFruitSlice(fruitType: string) {
    let points = GAME_CONFIG.points.medium;
    
    this.combo++;
    if (this.combo >= 3) {
      points *= GAME_CONFIG.points.comboBonus.three;
    } else if (this.combo === 2) {
      points *= GAME_CONFIG.points.comboBonus.two;
    }

    this.score += points;
    
    // Reset combo after delay
    if (this.comboTimer) this.comboTimer.destroy();
    this.comboTimer = this.scene.time.delayedCall(1000, () => this.combo = 0);

    // Emit score update event
    this.scene.events.emit('scoreUpdated', this.score);
  }

  getScore(): number {
    return this.score;
  }

  saveHighScore() {
    const highScore = localStorage.getItem('highScore') || '0';
    if (this.score > parseInt(highScore)) {
      localStorage.setItem('highScore', this.score.toString());
    }
  }
}