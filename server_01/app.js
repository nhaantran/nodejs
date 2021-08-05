const EventEmitter = require('events');
const Logger = require('./module.js');
const logger = new Logger;

// register a listener
logger.on('messagelogged',function(arg){ // (arg) => 
    console.log('Listener called!',arg);
});
// trigger an event
logger.log('message');
