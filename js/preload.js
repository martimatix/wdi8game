var giveUsJobs = giveUsJobs || {};

//loading the game assets
giveUsJobs.Preload = function(){};

giveUsJobs.Preload.prototype = {
  preload: function() {
    //show logo in loading screen
    // this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    // this.splash.anchor.setTo(0.5);

    // this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar');
    // this.preloadBar.anchor.setTo(0.5);

    // this.load.setPreloadSprite(this.preloadBar);

    //load game assets
    //images
    this.load.image('sky', 'images/sky.png');
    this.load.image('balloon', 'images/balloon.png');
    this.load.image('cannon', 'images/cannon.png');
    this.load.image('cannonBall', 'images/cannon_ball.png');
    this.load.image('pop', 'images/pop.png');

    //sounds
    this.load.audio('cannonFire', 'audio/cannon_fire.ogg');
    this.load.audio('popSound', 'audio/pop.ogg');
  },

  create: function() {
    this.state.start('Intro');
  }
};