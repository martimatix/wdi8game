var giveUsJobs = giveUsJobs || {};

giveUsJobs.Intro = function(){};

giveUsJobs.Intro.prototype = {
  create: function() {

    // Black background
    this.game.stage.backgroundColor = '#000';

    // Title
    var title = "WDI SYD\n\nAPR 2015"
    var t = this.game.add.bitmapText(80, 10, 'carrier_command', title, 70);
    t.align = 'center';
    t.tint = 0xFFBD02;

    var line1 = "Your objective: Give all the WDI8\n\nSydney grads a job.\n\n\n"
    var line2 = "Controls: Press space, click mouse\n\nor tap screen to shoot."
    var text = line1 + line2;
    var t = this.game.add.bitmapText(30, this.game.height/2, 'carrier_command', text,18);

    var clickOrStart = "Click or tap to start"
    this.pressStart = this.game.add.bitmapText(30, 500, 'carrier_command', clickOrStart, 30);
    this.pressStart.tint = 0xf002ff;
  },
  update: function() {
    // Blink text
    if (Math.round(this.game.time.now / 1000) % 2 === 0) {
      this.pressStart.visible = true;
    } else {
      this.pressStart.visible = false;
    }

    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('Game');
    }
  }
};