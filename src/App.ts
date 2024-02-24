import Phaser from "phaser";

class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('ice', 'assets/ice-background.png');
    }

    create ()
    {
        this.add.image(400, 300, 'ice');
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