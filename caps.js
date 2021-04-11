const events = require('./events.js');

events.on('EVENT ', e => {
    console.log(`EVENT {event ${e.event}`);
});