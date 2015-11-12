# plain-conf
plain-conf is just a loader for your configuration files. Put all your configurations files (production.js, development.js, etc.) under the conf/ directory. And require them via `require(‘plain-conf)`. According to your current `ENV` plain-conf will load the configuration. Your configuration could be a plain JSON Blob or any arbitrary pice of JavaScript code. 
