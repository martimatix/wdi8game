$(document).ready(function() {
  var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

  function preload() {
    game.load.image('sky', 'images/sky.png');
    game.load.image('balloon', 'images/balloon.png');
    game.load.image('cannon', 'images/cannon.png');
    game.load.image('cannonBall', 'images/cannon_ball.png');
  }

  var cannon;
  var balloon;
  var balloonTime = 0;
  var cannonBall;
  var cannonBallTime = 0;
  var piOverOneEighty = Math.PI / 180;

  function create() {
    //  This will run in Canvas mode, so let's gain a little speed and display
    game.renderer.clearBeforeRender = false;
    game.renderer.roundPixels = true;

    //  We're going to be using physics, so enable the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //  A simple background for our game
    game.add.sprite(0, 0, 'sky');

    // This is where the cannon
    cannon = game.add.sprite(190, 510, 'cannon');

    // enable physics for the cannon
    game.physics.arcade.enable(cannon);

    //  Our balloons
    balloons = game.add.group();
    balloons.enableBody = true;
    balloons.physicsBodyType = Phaser.Physics.ARCADE;

    //  All 40 of them
    balloons.createMultiple(11, 'balloon');
    balloons.setAll('anchor.x', 0.5);
    balloons.setAll('anchor.y', 0.5);

    // alter centre of cannon so that it rotates at the wheel
    cannon.anchor.set(0.4, 0.735); 
    cannon.body.angularVelocity = -300;

    // slow down rotation of cannon
    cannon.body.maxAngular = 25;

    //  Game input
    game.input.keyboard.addKeyCapture([ Phaser.Keyboard.SPACEBAR ]);
  }

  function update() {
    if (cannon.body.rotation > 35)
    {   
      cannon.body.angularVelocity = -300;
    }

    if (cannon.body.rotation < -55)
    {
      cannon.body.angularVelocity = 300;
    }


    if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
    {
      fireCannon();
    }

    launchBalloon();
    game.physics.arcade.collide(cannonBall, balloon, destroyBalloonAndCannon);

  }

  function launchBalloon () {

    if (game.time.now > balloonTime)
    {
      balloon = balloons.getFirstExists(false);

      if (balloon)
      {
        balloon.reset(400 + 200 * Math.random(), 600);
        balloon.lifespan = 3000;
        
        balloon.body.collideWorldBounds = false;

        // balloon moves upwards
        game.physics.arcade.velocityFromAngle(-105 + 30 * Math.random(), 300 + 300 * Math.random(), balloon.body.velocity);

        balloonTime = game.time.now + 2000 + 2000 * Math.random();

      }
    }
  }

  function fireCannon () {
    if (game.time.now > cannonBallTime) {
      cannonRotationRadians = degreesToRadians(-cannon.body.rotation + 25);
      console.log(-cannon.body.rotation);
      // Use trig to find out where cannon ball should appear
      // Not working because coordinate system is inverted
      cannonBall = game.add.sprite(cannon.body.x + 101 + 179 * Math.cos(cannonRotationRadians), cannon.body.y + 185 - 179 * Math.sin(cannonRotationRadians), 'cannonBall');
      cannonBall.lifespan = 10000;
      cannonBall.anchor.set(0.5, 0.5);
      game.physics.arcade.enable(cannonBall);
      cannonBall.body.gravity.y = 300;
      game.physics.arcade.velocityFromAngle(-25 + cannon.body.rotation, 400, cannonBall.body.velocity);
      cannonBallTime = game.time.now + 1500;
    }
  }

  function destroyBalloonAndCannon () {
    cannonBall.destroy();
    balloon.destroy();
  }

  function degreesToRadians (degrees) {
    return degrees * piOverOneEighty;
  }

});