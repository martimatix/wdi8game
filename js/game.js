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

    var balloon = game.add.sprite(400, 0, 'balloon');

    game.physics.arcade.enable(balloon);

    balloon.body.bounce.y = 0.5;
    balloon.body.gravity.y = 300;
    balloon.body.collideWorldBounds = true;
  }

  function update() {
  }
});