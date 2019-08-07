// #!/usr/bin/env node
// modified from https://www.custardbelly.com/blog/blog-posts/2014/01/29/cucumberjs-build/index.html
var watch = require('node-watch');
var child_process = require('child_process');
var running = false;
var cucumber;

var JS_EXT = /^.*\.js/i;
var FEATURE_EXT = /^.*\.feature/i;
var options = ['test']

watch(['./cart.js','./features'], {recursive:true}, function(evt, filename) {

  if(!running && (filename.match(JS_EXT) || filename.match(FEATURE_EXT))) {

    running = true;

    cucumber = child_process.spawn('npm', options)
                    .on('exit', function() {
                      running = false;
                    });

    cucumber.stdout.on('data', function(d) {
      console.log(String(d));
    });

    cucumber.stderr.on('data', function(d) {
      console.error(String(d));
    });

  }

});