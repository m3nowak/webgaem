import Phaser from "phaser";

class MenuScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'menu'
        })
        this.xSound = null;
    }
    init() {
    }
    create() { //creating the menu screen

        //create images (z order)

        this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.20, 'logo').setDepth(1).setScale(.25);

        this.add.image(400, 300, 'menuBg').setDepth(0);

        let playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, 'playBtn').setDepth(2);

        //create audio, disable pauseonblur

        this.sound.pauseOnBlur = false;
        this.xSound = this.sound.add('bgm', {loop: true});
        this.xSound.play();

        playButton.setInteractive();

        playButton.on("pointerover", () => {
            playButton.setTexture('playBtnActive');
            this.sound.play('point', {loop: false});
        })

        playButton.on("pointerout", () => {
            playButton.setTexture('playBtn');
        })


        playButton.on("pointerup", () => {
            this.xSound.stop();
            this.scene.start('game');
        })

    }
}

export default MenuScene;
