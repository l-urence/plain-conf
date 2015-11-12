# simple-conf
simple-conf is just a loader for your configuration files. Put all your configurations files (production.js, development.js, etc.) under the conf/ directory. And require them via `require(‘simple-conf)`. According to your current `ENV` simple-conf will load the configuration. Your configuration could be a simple JSON Blob or any arbitrary pice of JavaScript code. 
