void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
}

void loop() {
  // read the input on analog pin 0:
  int sensorValue = analogRead(A0);
  // map the value between 0 to 90 :
  float val = map(sensorValue,0,1023,0,90);
  // print out the value :
  Serial.println(val);
}
