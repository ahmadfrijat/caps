const events = require('./events.js');
require('./caps.js');
require('./driver.js');
require('./vendor.js');



events.emit('EVENT ', {
    event: 'pickup',
    time: '2020-03-06T18:27:17.732Z',
    store: '1-206-flowers',
    orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
    customer: 'Jamal Braun',
    address: 'Schmittfort, LA'
    });
events.emit('VENDOR',{
    vendor: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
    event: 'delivered',
    time: '2020-03-06T18:27:20.736Z',
    orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
    customer: 'Jamal Braun',
    address: 'Schmittfort, LA' 
});



events.emit('DRIVER', {
    deiver: 'picked up e3669048-7313-427b-b6cc-74010ca1f8f0', 
    event: 'in-transit',
    time: '2020-03-06T18:27:18.738Z',
    store: '1-206-flowers',
     orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
     customer: 'Jamal Braun',
     address: 'Schmittfort, LA'
});