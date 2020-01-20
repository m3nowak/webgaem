import Phaser from "phaser";
import skyImg from './assets/sky.png'
import groundImg from './assets/platform.png'
import starImg from './assets/star.png'
import bombImg from './assets/bomb.png'
import dudeSS from './assets/dude.png'

import menuBgImg from './assets/menuBg.png'
import playBtnImg from './assets/playBtn.png'
import playBtnActiveImg from './assets/playBtnActive.png'
import logoImg from './assets/logo.png'
import bonusImg from './assets/bonus.png'
import bgmSnd from './assets/bgm.mp3'
import oofSnd from './assets/oof.mp3'
import pointSnd from './assets/point.mp3'
import lvlUpSnd from './assets/lvlUp.mp3'
import jumpSnd from './assets/jump.mp3'

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
        this.load.image('menuBg', menuBgImg);
        this.load.image('playBtn', playBtnImg);
        this.load.image('playBtnActive', playBtnActiveImg);
        this.load.image('logo', logoImg);
        this.load.image('bonus', bonusImg);
        this.load.audio('bgm', bgmSnd);
        this.load.audio('point', pointSnd);
        this.load.audio('oof', oofSnd);
        this.load.audio('lvlUp', lvlUpSnd);
        this.load.audio('jump', jumpSnd);
    }
    create() {
        this.scene.start("menu");
    }
}

export default LoadScene;
