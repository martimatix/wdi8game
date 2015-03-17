$(document).ready(function() {
  var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

  function preload() {
    game.load.image('sky', 'images/sky.png');
    game.load.spritesheet('balloon', 'images/balloons.png', 320, 410);
    game.load.image('cannon', 'images/cannon.png');
  }

  var cannon;
  var balloon;

  function create() {
    //  This will run in Canvas mode, so let's gain a little speed and display
    game.renderer.clearBeforeRender = false;
    game.renderer.roundPixels = true;

    //  We're going to be using physics, so enable the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //  A simple background for our game
    game.add.sprite(0, 0, 'sky');

    // This is where the balloons appears appears
    balloon = game.add.sprite(400, 600, 'balloon');
    cannon = game.add.sprite(150, game.world.height - 80, 'cannon');

    // enable physics for the balloon
    game.physics.arcade.enable(balloon);
    game.physics.arcade.enable(cannon);

    // balloon has no gravity
    balloon.body.gravity.y = 0;

    // balloon can go off screen
    balloon.body.collideWorldBounds = false;

    // balloon moves upwards
    game.physics.arcade.accelerateToXY(balloon, 400, -100);

    // alter centre of cannon so that it rotates at the wheel
    cannon.anchor.set(0.4, 0.735); 

    // slow down rotation of cannon
    cannon.body.maxAngular = 25;

    //  Game input
    cursors = game.input.keyboard.createCursorKeys();
    game.input.keyboard.addKeyCapture([ Phaser.Keyboard.SPACEBAR ]);
  }

  function update() {
    if (cursors.left.isDown)
    {   
        cannon.body.angularVelocity = -300;
    }
    else if (cursors.right.isDown)
    {
        cannon.body.angularVelocity = 300;
    }
    else
    {
        cannon.body.angularVelocity = 0;
    }
  }
});