var child_process = require('child_process');

module.exports = function (grunt, options) {

  grunt.registerMultiTask('run', function () {

    var splits = this.data.command.split(' ');
    var command = splits[0];
    var args = splits.splice(1);

    var done = this.async();

    var wdio = child_process.spawn(
      command,
      args,
      {
        cwd: process.cwd(),
        stdio: 'inherit'
      }
          
    );

    // Check the exit code
    wdio.on('exit', function (code) {
      if (code) {
        throw new Error('running:' + this.data.command);
      }
      done(true);
    }.bind(this));

  });

  return {
    options: {},
    webdriver: {
      command: './node_modules/.bin/wdio wdio.conf.js'
    }
  };

};
