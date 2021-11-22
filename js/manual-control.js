var messagePayloadSuhuUdara = 0;
var messagePayloadKelembabanUdara = 0;
var messagePayloadKelembabanTanah = 0;
var messagePayloadOutLampu = 0;
var messagePayloadOutKipas = 0;
var messagePayloadOutSolenoid = 0;

// Called after form input is processed
function startConnect() {
      // Generate a random client ID
//   MAQIATTO
//   clientID = "krisna123";

  // Fetch the hostname/IP address and port number from the form
//   host = "maqiatto.com";
//   port = 8883;
    // Generate a random client ID
    clientID = "krisna_mosquitto";

	// host = "localhost";
  // port = 9001;
  host = "ue957f79.ap-southeast-1.emqx.cloud";
  port = 8083;
  
    // Print output for the user in the messages div
    // document.getElementById("pesansuhu").innerHTML += '<span>Connecting to: ' + host + ' on port: ' + port + '</span><br/>';
    // document.getElementById("pesansuhu").innerHTML += '<span>Using the following client value: ' + clientID + '</span><br/>';
  
    // Initialize new Paho client connection
    client = new Paho.MQTT.Client(host, Number(port), clientID);
  
    // Connect the client, if successful, call onConnect function
    client.connect({
        // userName: "lyne.dre@gmail.com",
        userName: "krisna.widi.kw",
        password: "sou887wl23",
        onSuccess: onConnect,
    });
  
    // Set callback handlers
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;
  //   client.ledState = ledState;
  }

  function onConnect() {
    // Fetch the MQTT topic from the form
    topicLampuManual = "lyne.dre@gmail.com/lampumanual";
  
    client.subscribe( topicLampuManual);
  }

  function onConnectionLost(responseObject) {
    console.log("onConnectionLost: Connection Lost");
    if (responseObject.errorCode !== 0) {
        console.log("onConnectionLost: " + responseObject.errorMessage);
    }
  }

  function onMessageArrived(message) {
    // if (message.destinationName == topicOutControl) {
    //     console.log("onMessageArrived: " + message.payloadString);
    //   }
    //   updateScroll();
  }

  function updateScroll() {
    var element = document.getElementById("switch");
    element.scrollTop = element.scrollHeight;;
  }

  function valueChanged(){
    var checkBox = document.getElementById("customSwitch1");

        if(checkBox.checked == true){
            var message = new Paho.MQTT.Message("1");
            message.destinationName = "lyne.dre@gmail.com/manual";
            client.send(message);
            console.log(message);
        } else {
            var message = new Paho.MQTT.Message("0");
            message.destinationName = "lyne.dre@gmail.com/manual";
            client.send(message);
            console.log(message);
        }
  }

 
  function valueChangedButtonLampON(){
    var buttonLamp = document.getElementById("manual-lampu");

    var message = new Paho.MQTT.Message("1");
    message.destinationName = "lyne.dre@gmail.com/lampumanual";
    client.send(message);
    console.log(message);

  }

  function valueChangedButtonLampOFF(){
    var buttonLamp = document.getElementById("manual-lampu");

    var message = new Paho.MQTT.Message("0");
    message.destinationName = "lyne.dre@gmail.com/lampumanual";
    client.send(message);
    console.log(message);

  }

  function valueChangedButtonSiram(){
    var buttonSiram = document.getElementById("manual-siram");

    var message = new Paho.MQTT.Message("1");
    message.destinationName = "lyne.dre@gmail.com/sirammanual";
    client.send(message);
    console.log(message);
  }

  function lampChange(){
            var slider = document.getElementById("myRange");
            var output = document.getElementById("demo");
            output.innerHTML = slider.value;

            slider.oninput = function() {
                output.innerHTML = slider.value;
            }
  }

  startConnect();