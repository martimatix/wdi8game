var giveUsJobs = giveUsJobs || {};

giveUsJobs.GameOver = function(){};

giveUsJobs.GameOver.prototype = {
  create: function() {

    //start game text
    var text = "Game Over";
    var style = { font: "30px Arial", fill: "#000", align: "center" };
    var t = this.game.add.text(this.game.width/2, this.game.height/2, text, style);
    t.anchor.set(0.5);
  
  },
  update: function() {
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('Game');
    }
  }
};