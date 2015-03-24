var giveUsJobs = giveUsJobs || {};

//loading the game assets
giveUsJobs.Preload = function(){};

giveUsJobs.Preload.prototype = {
  preload: function() {

    // Loading text
    var style = { font: "32px Arial", fill: "#000", align: "center" };

    this.loadingText = this.game.add.text(this.game.world.centerX, this.game.world.centerY, "Loading, please wait...", style); 
    this.loadingText.anchor.set(0.5, 0.5);

    // load game assets
    // images
    this.load.image('sky', 'images/sky.png');
    this.load.image('cannon', 'images/cannon.png');
    this.load.image('cannonBall', 'images/cannon_ball.png');
    this.load.image('pop', 'images/pop.png');
    this.load.image('platform', 'images/platform.png');

    // WDI8 Cast - Balloons
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

    // WDI8 Profile pics
    this.load.image('profile_amy', 'images/profile_pics/amy.png');
    this.load.image('profile_bishin', 'images/profile_pics/bishin.png');
    this.load.image('profile_faryar', 'images/profile_pics/faryar.png');
    this.load.image('profile_julia', 'images/profile_pics/julia.png');
    this.load.image('profile_liam', 'images/profile_pics/liam.png');
    this.load.image('profile_mario', 'images/profile_pics/mario.png');
    this.load.image('profile_may', 'images/profile_pics/may.png');
    this.load.image('profile_sonya', 'images/profile_pics/sonya.png');
    this.load.image('profile_tj', 'images/profile_pics/tj.png');
    this.load.image('profile_tom', 'images/profile_pics/tom.png');
    this.load.image('profile_xander', 'images/profile_pics/xander.png');

    // audio
    this.load.audio('cannonFire', 'audio/cannon_fire.ogg');
    this.load.audio('popSound', 'audio/pop.ogg');
    this.load.audio('guileTheme', 'audio/guile_theme.mp3')

    // fonts
    this.load.bitmapFont('carrier_command', 'fonts/carrier_command.png', 'fonts/carrier_command.xml');
  },

  create: function() {
    this.state.start('Intro');
  },
};