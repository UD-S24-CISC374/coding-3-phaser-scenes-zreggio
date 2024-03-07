import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: "PreloadScene" });
    }

    preload() {
        this.load.image("phaser-logo", "assets/img/phaser-logo.png");
        this.load.image("image_1", "assets/img/image-1-374.png");
        this.load.image("image_2", "assets/img/image-2-374.png");
        this.load.image("image_3", "assets/img/image-3-374.png");
        this.load.image("image_4", "assets/img/image-4-374.png");
    }

    create() {
        this.scene.start("MainScene");
    }
}
