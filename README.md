# plain-conf
plain-conf is just a loader for your configuration files. 

## Config
Put all your configurations files (production.js, development.js, etc.) under the config/ directory in your project root and require them via `require(‘plain-conf’).config`. According to your current `NODE_ENV` plain-conf will load the configuration. Your configuration file is just a plain JSON Blob or a node module.

### Example: 
```JavaScript
// If NODE_ENV is set to production plain-conf will lookup the 
// the ./config/production.(js|json) configuration file. 
// For NODE_ENV set to development it will lookup the 
// ./config/development.(js|json) configuration file, etc.
const config = require('plain-conf').config;
``` 

## isDebug
Check if your configuration environment should be debuggable. This will return `true` unless your `NODE_ENV=production`.

### Example
```JavaScript
// For NODE_ENV=production.
const debug = require('plain-conf').isDebug; // false

// For NODE_ENV=development.
const debug = require('plain-conf').isDebug; // true
```


