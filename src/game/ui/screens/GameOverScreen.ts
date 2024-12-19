import Phaser from 'phaser';
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';

export class GameOverScreen extends Phaser.Scene {
  constructor() {
    super({ key: 'GameOverScene' });
  }

  create(data: { score: number }) {
    // Create overlay
    const overlay = this.add.rectangle(0, 0, this.scale.width, this.scale.height, 0x000000, 0.7);
    overlay.setOrigin(0);

    // Game Over text with animation
    const gameOver = this.add.text(this.scale.width / 2, this.scale.height / 2 - 100, 'Game Over', {
      fontFamily: FONTS.primary,
      fontSize: '64px',
      color: COLORS.textPrimary
    }).setOrigin(0.5);

    // Final score
    const score = this.add.text(this.scale.width / 2, this.scale.height / 2, `Score: ${data.score}`, {
      fontFamily: FONTS.primary,
      fontSize: '48px',
      color: COLORS.textPrimary
    }).setOrigin(0.5);

    // Replay button
    const button = this.add.rectangle(this.scale.width / 2, this.scale.height / 2 + 100, 200, 60, 0x00b894);
    const buttonText = this.add.text(this.scale.width / 2, this.scale.height / 2 + 100, 'Play Again', {
      fontFamily: FONTS.primary,
      fontSize: '24px',
      color: COLORS.textPrimary
    }).setOrigin(0.5);

    // Make button interactive
    button.setInteractive()
      .on('pointerover', () => button.setFillStyle(0x00cec9))
      .on('pointerout', () => button.setFillStyle(0x00b894))
      .on('pointerdown', () => this.scene.start('GameScene'));
  }
}