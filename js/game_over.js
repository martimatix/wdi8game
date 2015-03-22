var giveUsJobs = giveUsJobs || {};

giveUsJobs.GameOver = function(){};

giveUsJobs.GameOver.prototype = {
  create: function() {

    var gameOver = "Game Over"
    var t = this.game.add.bitmapText(10, 30, 'carrier_command', gameOver, 70);
    t.align = 'center';
    
    var line1;
    if (giveUsJobs.win) {
      t.tint = 0x4aff02;
      line1 = "Well done!\n\nEveryone got jobs! :)";
    } else {
      t.tint = 0xFF0268;
      line1 = "Oh no! Some people didn't get jobs.";
    }

    var line2 = "\n\n\n\nClick or tap to play again"
    var text = line1 + line2;
    var t = this.game.add.bitmapText(30, this.game.height/2, 'carrier_command', text,18);
  
  },
  update: function() {
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('Game');
    }
  }
};