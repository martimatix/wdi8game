$(document).ready(function() {
  var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

  function preload() {
    game.load.image('sky', 'images/sky.png');
    game.load.spritesheet('balloon', 'images/balloons.png', 320, 410);
  }

  function create() {
    //  We're going to be using physics, so enable the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //  A simple background for our game
    game.add.sprite(0, 0, 'sky');

    // This is where the balloons appears appears
    var balloon = game.add.sprite(400, 400, 'balloon');

    // enable physics for the balloon
    game.physics.arcade.enable(balloon);

    // balloon has no gravity
    balloon.body.gravity.y = 0;

    // balloon can go off screen
    balloon.body.collideWorldBounds = false;

    // balloon moves upwards
    game.physics.arcade.accelerateToXY(balloon, 400, -100) 
  }

  function update() {
  }
});