var giveUsJobs = giveUsJobs || {};

giveUsJobs.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');

giveUsJobs.game.state.add('Boot', giveUsJobs.Boot);
giveUsJobs.game.state.add('Preload', giveUsJobs.Preload);
giveUsJobs.game.state.add('Intro', giveUsJobs.Intro);
giveUsJobs.game.state.add('Game', giveUsJobs.Game);
// giveUsJobs.game.state.add('GameOver', giveUsJobs.MainMenu);

giveUsJobs.game.state.start('Boot');