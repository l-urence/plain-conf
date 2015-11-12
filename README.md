# plain-conf
plain-conf is just a loader for your configuration files. Put all your configurations files (production.js, development.js, etc.) under the config/ directory. And require it via `require(‘plain-conf’).config`. According to your current `ENV` plain-conf will load the configuration. Your configuration file is just a plain JSON Blob. 
