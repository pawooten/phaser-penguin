import Phaser from "phaser";

class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('cloud', 'assets/cloud.png');
    }
    create ()
    {
        this.add.image(400, 300, 'ice');
        // this.add.image(200, 300, 'cloud');
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: Example,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { x:0, y: 200 }
        }
    }
};

const game = new Phaser.Game(config);