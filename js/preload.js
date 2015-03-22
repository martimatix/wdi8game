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

    // load game assets
    // images
    this.load.image('sky', 'images/sky.png');
    this.load.image('cannon', 'images/cannon.png');
    this.load.image('cannonBall', 'images/cannon_ball.png');
    this.load.image('pop', 'images/pop.png');
    this.load.image('platform', 'images/platform.png');

    // WDI8 Cast
    this.load.image('amy', 'images/amy.png');
    this.load.image('bishin', 'images/bishin.png');
    this.load.image('faryar', 'images/faryar.png');
    this.load.image('julia', 'images/julia.png');
    this.load.image('liam', 'images/liam.png');
    this.load.image('mario', 'images/mario.png');
    this.load.image('may', 'images/may.png');
    this.load.image('sonya', 'images/sonya.png');
    this.load.image('tj', 'images/tj.png');
    this.load.image('tom', 'images/tom.png');
    this.load.image('xander', 'images/xander.png');

    // audio
    this.load.audio('cannonFire', 'audio/cannon_fire.ogg');
    this.load.audio('popSound', 'audio/pop.ogg');
    this.load.audio('guileTheme', 'audio/guile_theme.mp3')

    // fonts
    this.load.bitmapFont('carrier_command', 'fonts/carrier_command.png', 'fonts/carrier_command.xml');
  },

  create: function() {
    this.state.start('Intro');
  }
};