var dialogue = document.getElementById('dialogue');
var box = document.getElementById('angle');
socket.on('connected', function(){
	dialogue.innerHTML = "Socket Connected";
});
socket.on('disconnect', function(){
	dialogue.innerHTML = "Socket Disconnected";
});
socket.on('data', function (data) {
	box.innerHTML = data;
	angle = data;
});