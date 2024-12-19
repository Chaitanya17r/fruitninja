import { GAME_CONFIG } from '../config';

export class UIManager {
  private lives: number = 3;
  private scoreText: Phaser.GameObjects.Text;
  private heartSprites: Phaser.GameObjects.Image[] = [];
  private scene: Phaser.Scene;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
    this.setupUI();
    this.setupEventListeners();
  }

  private setupUI() {
    // Score text
    this.scoreText = this.scene.add.text(16, 16, 'Score: 0', {
      fontSize: '32px',
      color: '#fff'
    }).setDepth(1);

    // Lives
    this.updateLivesDisplay();
  }

  private setupEventListeners() {
    this.scene.events.on('scoreUpdated', this.updateScore, this);
    this.scene.events.on('bombSliced', this.handleBombSlice, this);
  }

  private updateScore(score: number) {
    this.scoreText.setText(`Score: ${score}`);
  }

  private handleBombSlice() {
    this.lives--;
    this.updateLivesDisplay();
    
    if (this.lives <= 0) {
      this.scene.events.emit('gameOver');
    }
  }

  private updateLivesDisplay() {
    // Clear existing hearts
    this.heartSprites.forEach(heart => heart.destroy());
    this.heartSprites = [];

    // Add new hearts
    for (let i = 0; i < this.lives; i++) {
      const heart = this.scene.add.image(
        GAME_CONFIG.width - 50 - (i * 40),
        40,
        'heart'
      ).setScale(0.5).setDepth(1);
      
      this.heartSprites.push(heart);
    }
  }

  update() {
    // Update any animated UI elements here
  }
}