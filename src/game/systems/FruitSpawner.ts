import Phaser from 'phaser';
import { GAME_CONFIG } from '../config';
import { GameScene } from '../scenes/GameScene';

export class FruitSpawner {
  private fruits: Phaser.GameObjects.Sprite[] = [];
  private scene: GameScene;
  private spawnTimer: number = 0;

  constructor(scene: GameScene) {
    this.scene = scene;
    this.setupSpawnTimer();
  }

  private setupSpawnTimer() {
    this.scene.time.addEvent({
      delay: GAME_CONFIG.fruitSpawnInterval.initial,
      callback: this.spawnFruit,
      callbackScope: this,
      loop: true
    });
  }

  spawnFruit() {
    const x = Phaser.Math.Between(100, GAME_CONFIG.width - 100);
    const fruitTypes = ['apple', 'banana', 'watermelon', 'bomb'];
    const type = fruitTypes[Phaser.Math.Between(0, fruitTypes.length - 1)];
    
    const fruit = this.scene.add.sprite(x, GAME_CONFIG.height + 100, type);
    this.fruits.push(fruit);

    // Add physics
    this.scene.physics.world.enable(fruit);
    const body = fruit.body as Phaser.Physics.Arcade.Body;
    body.setVelocity(Phaser.Math.Between(-200, 200), -800);
    body.setGravityY(GAME_CONFIG.gravity);
  }

  checkSliceCollisions(x1: number, y1: number, x2: number, y2: number) {
    this.fruits.forEach((fruit) => {
      if (Phaser.Geom.Intersects.LineToRectangle(
        new Phaser.Geom.Line(x1, y1, x2, y2),
        fruit.getBounds()
      )) {
        this.handleFruitSlice(fruit);
      }
    });
  }

  private handleFruitSlice(fruit: Phaser.GameObjects.Sprite) {
    try {
      if (fruit.texture.key === 'bomb') {
        if (this.scene.sound.get('explosion')) {
          this.scene.sound.play('explosion', { volume: 0.6 });
        }
        // Handle bomb logic through event
        this.scene.events.emit('bombSliced');
      } else {
        if (this.scene.sound.get('slice')) {
          this.scene.sound.play('slice', { volume: 0.4 });
        }
        // Handle fruit slice through event
        this.scene.events.emit('fruitSliced', fruit.texture.key);
      }

      // Remove fruit
      this.fruits = this.fruits.filter(f => f !== fruit);
      fruit.destroy();
    } catch (error) {
      console.error('Error in handleFruitSlice:', error);
    }
  }

  update() {
    // Remove out-of-bounds fruits
    this.fruits = this.fruits.filter(fruit => {
      if (fruit.y > GAME_CONFIG.height + 200) {
        fruit.destroy();
        return false;
      }
      return true;
    });
  }
}