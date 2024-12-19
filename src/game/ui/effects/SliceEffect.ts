import Phaser from 'phaser';
import { COLORS } from '../constants/colors';

export class SliceEffect {
  private scene: Phaser.Scene;
  private graphics: Phaser.GameObjects.Graphics;
  private trail: Phaser.Geom.Point[] = [];

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
    this.graphics = scene.add.graphics();
  }

  update(x: number, y: number) {
    this.trail.push(new Phaser.Geom.Point(x, y));
    if (this.trail.length > 10) this.trail.shift();

    this.graphics.clear();
    if (this.trail.length < 2) return;

    this.graphics.lineStyle(3, COLORS.sliceTrail, 1);
    this.graphics.beginPath();
    this.graphics.moveTo(this.trail[0].x, this.trail[0].y);

    for (let i = 1; i < this.trail.length; i++) {
      this.graphics.lineTo(this.trail[i].x, this.trail[i].y);
    }

    this.graphics.strokePath();
  }

  clear() {
    this.trail = [];
    this.graphics.clear();
  }
}