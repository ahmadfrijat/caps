const events = require('./events.js');

events.on('EVENT ', e => {
   
    console.log(`time ${e.time}`);
    console.log(`  payload:`);
    console.log(`   store ${e.store}`);
    console.log(`   orderID ${e.orderID}`);
    console.log(`   customer ${e.customer}`);
    console.log(`   address ${e.address}`);
})
events.on('DRIVER', e => {
    console.log(`DRIVER ${e.deiver}`);
    console.log(`time ${e.time}`);
    console.log(`  payload:`);
    console.log(`   store ${e.store}`);
    console.log(`   orderID ${e.orderID}`);
    console.log(`   customer ${e.customer}`);
    console.log(`   address ${e.address}`);
})




