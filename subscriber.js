var mqtt = require('mqtt')
var client  = mqtt.connect([{ host: 'ws://iotechome.herokuapp.com', port: 3000 }])

client.on('connect', function () {
  	client.subscribe('outTopic', function (err) {
 	 });
});

client.on('message', function (topic, message) {
	// message is Buffer
	console.log(message.toString());
});
