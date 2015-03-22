var giveUsJobs = giveUsJobs || {};

//title screen
giveUsJobs.Game = function(){};

giveUsJobs.Game.prototype = {

  create: function() {

    this.balloonTime = 0;
    this.cannonBallTime = 0;
    this.piOverOneEighty = Math.PI / 180;

    // Audio variables
    this.cannonFire = this.game.add.audio('cannonFire');
    this.popSound = this.game.add.audio('popSound');
    this.guileTheme = this.game.add.audio('guileTheme');

    // Adjust cannonFire volume
    this.cannonFire.volume = 0.7;

    // Start music
    this.guileTheme.play();

    //  This will run in Canvas mode, so let's gain a little speed and display
    this.game.renderer.clearBeforeRender = false;
    this.game.renderer.roundPixels = true;

    //  A simple background for our game
    this.game.add.sprite(0, 0, 'sky');

    // This is where the cannon
    this.cannon = this.game.add.sprite(190, 510, 'cannon');

    // enable physics for the cannon
    this.game.physics.arcade.enable(this.cannon);

    //  Our balloons
    this.balloons = this.game.add.group();
    this.balloons.enableBody = true;
    this.balloons.physicsBodyType = Phaser.Physics.ARCADE;

    // All 11 of them
    // Using createMultiple because it requires less arguments than create
    this.balloons.createMultiple(1, 'amy');
    this.balloons.createMultiple(1, 'bishin');
    this.balloons.createMultiple(1, 'faryar');
    this.balloons.createMultiple(1, 'julia');
    this.balloons.createMultiple(1, 'liam');
    this.balloons.createMultiple(1, 'mario');
    this.balloons.createMultiple(1, 'may');
    this.balloons.createMultiple(1, 'sonya');
    this.balloons.createMultiple(1, 'tj');
    this.balloons.createMultiple(1, 'tom');
    this.balloons.createMultiple(1, 'xander');
    // this.balloons.createMultiple(11, 'balloon');
    this.balloons.setAll('anchor.x', 0.5);
    this.balloons.setAll('anchor.y', 0.5);

    // alter centre of cannon so that it rotates at the wheel
    this.cannon.anchor.set(0.4, 0.735); 
    this.cannon.body.angularVelocity = -300;

    // slow down rotation of cannon
    this.cannon.body.maxAngular = 25;

    //  Game input
    this.game.input.keyboard.addKeyCapture([ Phaser.Keyboard.SPACEBAR ]);

    // Score
    this.score = 0
    this.scoreText = this.game.add.bitmapText(580, 5, 'carrier_command','Score 0/11',17);
  },

  update: function () {
    if (this.cannon.body.rotation > 35)
    {   
      this.cannon.body.angularVelocity = -300;
    }

    if (this.cannon.body.rotation < -55)
    {
      this.cannon.body.angularVelocity = 300;
    }


    if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) || this.game.input.activePointer.justPressed())
    {
      this.fireCannon();
    }

    this.launchBalloon();
    this.game.physics.arcade.collide(this.cannonBall, this.balloon, this.destroyBalloonAndCannon, null, this);

    // Update Score
    this.scoreText.text = "Score " + this.score + "/11"


    // Game over condition
    if (this.balloons.length === 0) {
      // stop music
      this.guileTheme.stop();
      // go to game over screen
      this.game.state.start('GameOver');
    }
  },

  launchBalloon: function() {

    if (this.game.time.now > this.balloonTime)
    {
      this.balloon = this.balloons.getRandom();

      if (this.balloon)
      {
        this.balloon.reset(500 + 100 * Math.random(), 600);
        this.balloon.lifespan = 3000;
        
        this.balloon.body.collideWorldBounds = false;

        // balloon moves upwards
        this.game.physics.arcade.velocityFromAngle(-100 + 30 * Math.random(), 200 + 300 * Math.random(), this.balloon.body.velocity);

        this.balloonTime = this.game.time.now + 2000 + 2000 * Math.random();

      }
    }
  },

  fireCannon: function () {
    if (this.game.time.now > this.cannonBallTime) {
      // Play sound
      this.cannonFire.play();

      var cannonRotationRadians = this.degreesToRadians(-this.cannon.body.rotation + 40);
      // Use trig to find out where cannon ball should appear
      this.cannonBall = this.game.add.sprite(this.cannon.body.x + 101 + 179 * Math.cos(cannonRotationRadians), this.cannon.body.y + 185 - 179 * Math.sin(cannonRotationRadians), 'cannonBall');
      this.cannonBall.lifespan = 10000;
      this.cannonBall.anchor.set(0.5, 0.5);
      this.game.physics.arcade.enable(this.cannonBall);
      this.cannonBall.body.gravity.y = 300;
      this.game.physics.arcade.velocityFromAngle(-25 + this.cannon.body.rotation, 400, this.cannonBall.body.velocity);
      this.cannonBallTime = this.game.time.now + 1500;
    }
  },

  destroyBalloonAndCannon: function (cannonBall, balloon) {
    // Play sound
    this.popSound.play();

    // Display 'pop' graphic
    this.pop = this.game.add.sprite(this.cannonBall.body.x, this.cannonBall.body.y, 'pop');
    this.pop.lifespan = 500;
    this.pop.anchor.set(0.5, 0.5);

    this.cannonBall.destroy();
    this.balloon.destroy();

    this.score++;
  },

  degreesToRadians: function (degrees) {
    return degrees * this.piOverOneEighty;
  }

}