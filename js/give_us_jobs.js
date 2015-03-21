var giveUsJobs = giveUsJobs || {};

giveUsJobs.game = new Phaser.Game(800, 600, Phaser.AUTO, '');

giveUsJobs.game.state.add('Boot', giveUsJobs.Boot);
giveUsJobs.game.state.add('Preload', giveUsJobs.Preload);
giveUsJobs.game.state.add('Intro', giveUsJobs.Intro);
giveUsJobs.game.state.add('Game', giveUsJobs.Game);
giveUsJobs.game.state.add('GameOver', giveUsJobs.GameOver);

giveUsJobs.game.state.start('Boot');