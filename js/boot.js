var giveUsJobs = giveUsJobs || {};

giveUsJobs.Boot = function(){};

//setting game configuration and loading the assets for the loading screen
giveUsJobs.Boot.prototype = {

  create: function() {
    //loading screen will have a white background
    this.game.stage.backgroundColor = '#fff';

    //scaling options
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.minWidth = 240;
    this.scale.minHeight = 180;
    this.scale.maxWidth = 800;
    this.scale.maxHeight = 600;

    //have the game centered horizontally
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;

    //screen size will be set automatically
    this.scale.setScreenSize(true);

    //physics system for movement
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
  
    this.state.start('Preload');
  }
};