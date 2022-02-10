const events=require('events');
const EventEmitter=events.EventEmitter;

const eventEmitter= new EventEmitter();


//publisher of the event
eventEmitter.on('test', ()=>{
    console.log('this is the first part test events');
})

eventEmitter.on('test', ()=>{
    console.log('this is the second part test event');
})

eventEmitter.on('add',(a,b)=>{
    console.log('sum of a and b' ,(a+b));
})

eventEmitter.emit('add',12,14);
//listener of the event
eventEmitter.emit('test');

//event names
console.log(eventEmitter.eventNames());

const prod=(a,b)=>{
    console.log('the product results', (a*b));
}

eventEmitter.on('product',prod);

eventEmitter.emit('product',12,10);

//Events names before removing events
console.log(eventEmitter.eventNames());

//remove all the listeners


eventEmitter.removeListener('product',prod)

//event names after removing events
console.log(eventEmitter.eventNames());



//once and on
const eventEmitter2 = new EventEmitter();
eventEmitter2.once('demo1', ()=>{
    console.log('this is the first publisher of demo1 event');
})
eventEmitter2.on('demo1', ()=>{
    console.log('this is the second publisher of demo1 event');
})
eventEmitter2.emit('demo1')
eventEmitter2.emit('demo1')


//once
const eventEmitter3 = new EventEmitter();

eventEmitter3.once('demo1', ()=>{
    console.log('this is the first publisher of once event');
})
eventEmitter3.once('demo1', ()=>{
    console.log('this is the second publisher of once event');
})
eventEmitter3.emit('demo1')
eventEmitter3.emit('demo1')


//on
const eventEmitter1 = new EventEmitter();

eventEmitter1.on('demo1', ()=>{
    console.log('this is the first publisher of on event');
})
eventEmitter1.on('demo1', ()=>{
    console.log('this is the second publisher of on event');
})

eventEmitter1.emit('demo1')
eventEmitter1.emit('demo1')







