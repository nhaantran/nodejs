var url = 'http://mamnonanhmai.tk';

const EventEmitter = require('events');
class logger extends EventEmitter{
    log(message) {
        // send an http request
        console.log(message);

        // trigger an event
        this.emit('messagelogged', {id : 1, url : 'http://helloworld.com'})
    }
}
module.exports = logger;