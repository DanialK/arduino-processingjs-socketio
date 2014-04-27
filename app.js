var http = require('http');
var express = require('express');
var app = express();
var SerialPort = require("serialport").SerialPort;
var server = http.createServer(app).listen(3000);
var io = require('socket.io').listen(server);

app.use(express.static(__dirname + '/public'));

var serialport = new SerialPort("/dev/tty.usbmodem1421"); // replace this address with your port address
serialport.on('open', function(){
	// Now server is connected to Arduino
	console.log('Serial Port Opend');

	var lastValue;
	io.sockets.on('connection', function (socket) {
		//Connecting to client 
		console.log('Socket connected');
		socket.emit('connected');
		var lastValue;

		serialport.on('data', function(data){
			var angle = data[0];
			if(lastValue !== angle){
				socket.emit('data', angle);
			}
			lastValue = angle;
		});
	});
});