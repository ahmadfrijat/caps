const events = require('./events.js');

events.on('VENDOR', e => {
    // console.log(`EVENT {event ${e.event}`);
    console.log(`VENDOR: Thank you for delivering  ${e.vendor}`);
    console.log(`event : ${e.event}`);
    console.log(`time : ${e.time}`);
    console.log(`  payload :`);
    console.log(`   orderID ${e.orderID}`);
    console.log(`   customer ${e.customer}`);
    console.log(`   address ${e.address}`);
})

