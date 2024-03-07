import Phaser from "phaser";
import { tickerUpdate, ticker } from "../objects/ticker";

export default class Scene3 extends Phaser.Scene {
    tickerText?: Phaser.GameObjects.Text;

    constructor() {
        super({ key: "Scene3" });
    }

    create() {
        this.add.image(400, 500, "image_3");
        this.add.text(100, 200, "Hit Escape To Change Scenes", {
            fontSize: "40px",
            color: "#000",
        });
        this.tickerText = this.add.text(100, 100, "Scene: " + ticker, {
            fontSize: "40px",
            color: "#000",
        });
    }

    update() {
        const escKey = this.input.keyboard?.addKey(
            Phaser.Input.Keyboard.KeyCodes.ESC
        );
        if (escKey?.isDown) {
            tickerUpdate();
            this.tickerText?.setText(`Scene: ${ticker}`);
            this.scene.start("Scene4");
        }
    }
}
