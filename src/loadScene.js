import Phaser from "phaser";
import skyImg from './assets/sky.png'
import groundImg from './assets/platform.png'
import starImg from './assets/star.png'
import bombImg from './assets/bomb.png'
import dudeSS from './assets/dude.png'

class LoadScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'loading'
        })
    }
    preload() {
        let loadingBar = this.add.graphics({
            fillStyle: {
                color: 0xffffff //white
            }
        })
        this.load.on("progress", (percent) => {
            loadingBar.fillRect(this.game.renderer.width / 2, 0, 50, this.game.renderer.height * percent);
        })

        this.load.image('sky', skyImg);
        this.load.image('ground', groundImg);
        this.load.image('star', starImg);
        this.load.image('bomb', bombImg);
        this.load.spritesheet('dude',
            dudeSS,
            { frameWidth: 32, frameHeight: 48 }
        );
    }
    create() {
        this.scene.start("game");
    }
}

export default LoadScene;
