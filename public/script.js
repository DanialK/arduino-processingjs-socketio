var dialogue = document.getElementById('dialogue');
var box = document.getElementById('angle');
socket.on('connected', function(){
	dialogue.innerHTML = "Socket Connected";
});
socket.on('opened', function(){
	dialogue.innerHTML = "Connected to Arduino";
});
socket.on('data', function (data) {
	box.innerHTML = data;
	angle = data;
});