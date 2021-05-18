
var events=require('events');
var eventEmitter=new events.EventEmitter();

//Create a new event Handler:
var myEventHandler=function(){
    console.log("Hello wolrd");
}

//Assighhn the event handler to event:
eventEmitter.on('stream',myEventHandler);

//Fire the scream EVENT:
eventEmitter.emit('stream');