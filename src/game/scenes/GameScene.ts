import Phaser from 'phaser';
import { GAME_CONFIG } from '../config';
import { ASSETS, FALLBACK_ASSETS } from '../assets';
import { FruitSpawner } from '../systems/FruitSpawner';
import { ScoreManager } from '../systems/ScoreManager';
import { UIManager } from '../systems/UIManager';

export class GameScene extends Phaser.Scene {
  private fruitSpawner!: FruitSpawner;
  private scoreManager!: ScoreManager;
  private uiManager!: UIManager;
  private trail!: Phaser.GameObjects.Graphics;
  private bgMusic!: Phaser.Sound.BaseSound;

  constructor() {
    super({ key: 'GameScene' });
  }

  preload() {
    // Load images with fallbacks
    Object.entries(ASSETS.images).forEach(([key, url]) => {
      this.load.image(key, url);
      // Add fallback
      this.load.on(`filecomplete-image-${key}`, () => {
        console.log(`Successfully loaded image: ${key}`);
      });
      this.load.on(`loaderror`, (fileObj: any) => {
        if (fileObj.key === key) {
          console.warn(`Failed to load image ${key}, using fallback`);
          this.load.image(key, FALLBACK_ASSETS.images[key as keyof typeof FALLBACK_ASSETS.images]);
        }
      });
    });

    // Load audio with error handling
    Object.entries(ASSETS.audio).forEach(([key, url]) => {
      this.load.audio(key, url);
      this.load.on(`filecomplete-audio-${key}`, () => {
        console.log(`Successfully loaded audio: ${key}`);
      });
    });
  }

  create() {
    try {
      // Initialize systems
      this.scoreManager = new ScoreManager(this);
      this.fruitSpawner = new FruitSpawner(this);
      this.uiManager = new UIManager(this);
      
      // Initialize graphics
      this.trail = this.add.graphics();
      
      // Setup input
      this.input.on('pointermove', this.handleSlice, this);
      
      // Start background music with error handling
      if (this.sound.get('bgMusic')) {
        this.bgMusic = this.sound.add('bgMusic', { 
          loop: true, 
          volume: 0.5 
        });
        this.bgMusic.play();
      } else {
        console.warn('Background music not loaded properly');
      }
    } catch (error) {
      console.error('Error in create:', error);
    }
  }

  private handleSlice(pointer: Phaser.Input.Pointer) {
    if (!pointer.isDown) return;

    // Draw slice trail
    this.trail.clear();
    this.trail.lineStyle(2, 0xffffff);
    this.trail.beginPath();
    this.trail.moveTo(pointer.x, pointer.y);
    this.trail.lineTo(pointer.prevPosition.x, pointer.prevPosition.y);
    this.trail.strokePath();

    // Check collisions with fruits
    this.fruitSpawner.checkSliceCollisions(
      pointer.x, 
      pointer.y, 
      pointer.prevPosition.x, 
      pointer.prevPosition.y
    );

    // Clear trail after delay
    this.time.delayedCall(100, () => this.trail.clear());
  }

  update() {
    this.fruitSpawner.update();
    this.uiManager.update();
  }

  gameOver() {
    if (this.bgMusic?.isPlaying) {
      this.bgMusic.stop();
    }
    this.scene.start('GameOverScene', { 
      score: this.scoreManager.getScore() 
    });
  }
}