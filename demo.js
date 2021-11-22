// Called after form input is processed
function startConnect() {
    // Generate a random client ID
    clientID = "krisna123";

    // Fetch the hostname/IP address and port number from the form
    host = "maqiatto.com";
    port = 8883;

    // Print output for the user in the messages div
    // document.getElementById("pesansuhu").innerHTML += '<span>Connecting to: ' + host + ' on port: ' + port + '</span><br/>';
    // document.getElementById("pesansuhu").innerHTML += '<span>Using the following client value: ' + clientID + '</span><br/>';

    // Initialize new Paho client connection
    client = new Paho.MQTT.Client(host, Number(port), "krisna");

    // Connect the client, if successful, call onConnect function
    client.connect({
        userName: "lyne.dre@gmail.com",
        password: "sou887wl23",
        onSuccess: onConnect,
    });

    // Set callback handlers
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;
    
}

// Called when the client connects
function onConnect() {
    // Fetch the MQTT topic from the form
    topic = "lyne.dre@gmail.com/suhusaya";

    // Print output for the user in the messages div
    // document.getElementById("pesansuhu").innerHTML += '<span>Subscribing to: ' + topic + '</span><br/>';

    // Subscribe to the requested topic
    client.subscribe(topic);
}

// Called when the client loses its connection
function onConnectionLost(responseObject) {
    console.log("onConnectionLost: Connection Lost");
    if (responseObject.errorCode !== 0) {
        console.log("onConnectionLost: " + responseObject.errorMessage);
    }
}

// Called when a message arrives
function onMessageArrived(message) {
    console.log("onMessageArrived: " + message.payloadString);
    document.getElementById("pesansuhu").innerHTML = '<span>' + message.payloadString + ' Celcius</span>';

    updateScroll(); // Scroll to bottom of window
}

// Called when the disconnection button is pressed
function startDisconnect() {
    client.disconnect();
    document.getElementById("pesansuhu").innerHTML += '<span>Disconnected</span><br/>';
    updateScroll(); // Scroll to bottom of window
}

// Updates #messages div to auto-scroll
function updateScroll() {
    var element = document.getElementById("pesansuhu");
    element.scrollTop = element.scrollHeight;
}


