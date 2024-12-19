import React, { useEffect } from 'react';
import Phaser from 'phaser';
import { GameScene } from './game/scenes/GameScene';
import { GAME_CONFIG } from './game/config';

function App() {
  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: GAME_CONFIG.width,
      height: GAME_CONFIG.height,
      parent: 'game-container',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: GAME_CONFIG.gravity },
          debug: false
        }
      },
      scene: GameScene
    };

    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-800 to-green-600 flex items-center justify-center">
      <div id="game-container" className="rounded-lg shadow-2xl overflow-hidden" />
    </div>
  );
}

export default App;