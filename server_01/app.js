const logger = require('./module.js');

logger('Hello');

const path = require('path');
var pathobj = path.parse(__filename);
console.log(pathobj);

const os = require('os');
var ospf = os.platform();
var osarc= os.arch();
var osttmem= os.totalmem();
var osfmem = os.freemem();
console.log('Platform: '+ospf);
console.log('Architect: '+osarc);
console.log(`Total mem: ${osttmem}`);
console.log(`Free mem: ${osfmem}`);
console.log('-------------------------------------------');

const EventEmitter = require('events');
const emitter = new EventEmitter;

// register a listener
emitter.on('messagelogged',function(arg){
    console.log('Listener called!',arg);
});
// trigger an event
emitter.emit('messagelogged', {id : 1, url : 'http://'});
