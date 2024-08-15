const myevents = require('events');

class evnt extends myevents{}

const myevnt = new evnt();

myevnt.on('start', () => {
    console.log("Started");
});

myevnt.on('data', (data) => {
    console.log('data recevied', data);
})

myevnt.emit('start');
myevnt.emit('data',{message: "DD"});