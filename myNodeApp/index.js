// API : https://pushbots.com/developer/api/1
var pushbots = require('pushbots');
var Pushbots = new pushbots.api({
    id: '56502e33177959a40c8b4568',
    secret: '1ce856328560152f4a22a4d42d2188bb'
});
Pushbots.setMessage("Hello from pushbots node module", 1);
Pushbots.customFields({
    "openURL": "http://www.vinsync.com/"
});
Pushbots.push(function(response) {
    console.log('Push Response : ', response);
});
