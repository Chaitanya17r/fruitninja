import Phaser from 'phaser';
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';

export class GameHUD {
  private scene: Phaser.Scene;
  private scoreText: Phaser.GameObjects.Text;
  private comboText: Phaser.GameObjects.Text;
  private livesContainer: Phaser.GameObjects.Container;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
    this.createHUD();
  }

  private createHUD() {
    // Create semi-transparent header bar
    const headerBar = this.scene.add.rectangle(0, 0, this.scene.scale.width, 60, COLORS.headerBg, 0.85);
    headerBar.setOrigin(0, 0);

    // Score display with drop shadow
    this.scoreText = this.scene.add.text(20, 15, 'Score: 0', {
      fontFamily: FONTS.primary,
      fontSize: '28px',
      color: COLORS.textPrimary,
      shadow: { color: COLORS.textShadow, blur: 2, fill: true, offsetX: 1, offsetY: 1 }
    });

    // Combo text with animation
    this.comboText = this.scene.add.text(this.scene.scale.width / 2, 80, '', {
      fontFamily: FONTS.primary,
      fontSize: '32px',
      color: COLORS.combo
    }).setOrigin(0.5);
    this.comboText.setAlpha(0);

    // Lives container
    this.livesContainer = this.scene.add.container(this.scene.scale.width - 20, 30);
    this.updateLives(3);
  }

  updateScore(score: number) {
    this.scoreText.setText(`Score: ${score}`);
  }

  showCombo(multiplier: number) {
    this.comboText.setText(`${multiplier}x COMBO!`);
    this.comboText.setAlpha(1);
    
    this.scene.tweens.add({
      targets: this.comboText,
      y: 60,
      alpha: 0,
      duration: 1000,
      ease: 'Power2'
    });
  }

  private updateLives(lives: number) {
    this.livesContainer.removeAll();
    
    for (let i = 0; i < lives; i++) {
      const heart = this.scene.add.image(-(i * 40), 0, 'heart')
        .setScale(0.4)
        .setTint(COLORS.heart);
      this.livesContainer.add(heart);
    }
  }
}