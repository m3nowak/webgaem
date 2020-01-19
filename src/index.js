import Phaser from "phaser";

import LoadScene from "./loadScene";
import GameScene from "./gameScene";
import MenuScene from "./menuScene";

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: [LoadScene, MenuScene, GameScene]
};

let game = new Phaser.Game(config);