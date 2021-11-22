// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

var messagePayloadSuhu = 0;
var messagePayloadKelembapan = 0;
var messagePayloadCahaya = 0;
var messagePayloadTanggal = 0;

var messagePayloadShDingin = 0;
var messagePayloadShNormal = 0;
var messagePayloadShPanas = 0;

var messagePayloadRhKering = 0;
var messagePayloadRhNormal = 0;
var messagePayloadRhBasah = 0;

var messagePayloadStatusLampu = 0;

var connectPoint = 0;

// Called after form input is processed
function startConnect() {
  // Generate a random client ID
//   MAQIATTO
//   clientID = "krisna123";

  // Fetch the hostname/IP address and port number from the form
//   host = "maqiatto.com";
//   port = 8883;

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
  connectPoint = 1;
  console.log(connectPoint);
}

// Called when the client connects
function onConnect() {
  // Fetch the MQTT topic from the form
  topicSuhu = "lyne.dre@gmail.com/suhusaya";
  topicKelembapan = "lyne.dre@gmail.com/kelembapansaya";
  topicCahaya = "lyne.dre@gmail.com/cahayasaya";
  topicTanggal = "lyne.dre@gmail.com/ntp_tanggal";
  
  topicShDingin = "lyne.dre@gmail.com/shDingin";
  topicShNormal = "lyne.dre@gmail.com/shNormal";
  topicShPanas = "lyne.dre@gmail.com/shBasah";
  
  topicRhKering = "lyne.dre@gmail.com/rhKering";
  topicRhNormal = "lyne.dre@gmail.com/rhNormal";
  topicRhBasah = "lyne.dre@gmail.com/rhBasah";

  topicStatusLampu = "lyne.dre@gmail.com/statusLampu";

  topicFuzzyPenyiraman = "lyne.dre@gmail.com/fuzzypenyiraman";
  topicFuzzySaatIni = "lyne.dre@gmail.com/fuzzypenyiramansaatini";
  topicFuzzyLampu = "lyne.dre@gmail.com/fuzzylampu";

  // Print output for the user in the messages div
  // document.getElementById("pesansuhu").innerHTML += '<span>Subscribing to: ' + topic + '</span><br/>';

  // Subscribe to the requested topic
  client.subscribe(topicSuhu);
  client.subscribe(topicKelembapan);
  client.subscribe(topicCahaya);
  client.subscribe(topicTanggal);

  client.subscribe(topicShDingin);
  client.subscribe(topicShNormal);
  client.subscribe(topicShPanas);

  client.subscribe(topicRhKering);
  client.subscribe(topicRhNormal);
  client.subscribe(topicRhBasah);

  client.subscribe(topicStatusLampu);

  client.subscribe(topicFuzzyPenyiraman);
  client.subscribe(topicFuzzySaatIni);
  client.subscribe(topicFuzzyLampu);

  connectPoint = 1;
  console.log(connectPoint);
}

// Called when the client loses its connection
function onConnectionLost(responseObject) {
  console.log("onConnectionLost: Connection Lost");
  if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost: " + responseObject.errorMessage);
  }
}

var suhu = "";
var kelembapan = "";
var cahaya = "";

// Called when a message arrives
function onMessageArrived(message) {
  if (message.destinationName == topicSuhu) {
	console.log("onMessageArrived: " + message.payloadString);
	document.getElementById("pesansuhu").innerHTML = '<span>' + message.payloadString + ' Celcius</span>';
	messagePayloadSuhu = parseInt(message.payloadString);
	console.log("Suhu "+messagePayloadSuhu);
  }if (message.destinationName == topicKelembapan) {
	console.log("onMessageArrived: " + message.payloadString);
	document.getElementById("pesankelembapan").innerHTML = '<span>' + message.payloadString + ' %</span>';
	messagePayloadKelembapan = parseInt(message.payloadString);
	console.log("Kelembapan "+messagePayloadKelembapan);	  
  }if (message.destinationName == topicCahaya) {
	console.log("onMessageArrived: " + message.payloadString);
	document.getElementById("pesancahaya").innerHTML = '<span>' + message.payloadString + ' LUX</span>';
	messagePayloadCahaya = parseInt(message.payloadString);
	console.log("Cahaya "+messagePayloadCahaya);	  
  }if (message.destinationName == topicTanggal) {
	console.log("onMessageArrived: " + message.payloadString);
	document.getElementById("pesanntp").innerHTML = '<span>Time ' + message.payloadString + '</span>';
	messagePayloadTanggal = parseInt(message.payloadString);
	console.log("Time "+messagePayloadTanggal);	  
  }if (message.destinationName == topicStatusLampu) {
  console.log("onMessageArrived: " + message.payloadString);
  document.getElementById("pesanLampu").innerHTML = '<span>' + message.payloadString + '</span>';
  messagePayloadStatusLampu = parseInt(message.payloadString);
  console.log(""+messagePayloadStatusLampu);	  
  }if (message.destinationName == topicFuzzySaatIni) {
  console.log("onMessageArrived: " + message.payloadString);
  document.getElementById("fuzzysaya").innerHTML = '<span>' + message.payloadString + '</span>';
  messagePayloadFuzzySaatIni = parseInt(message.payloadString);
  console.log(""+messagePayloadFuzzySaatIni);	  
  }if (message.destinationName == topicFuzzyLampu) {
  console.log("onMessageArrived: " + message.payloadString);
  document.getElementById("fuzzylampu").innerHTML = '<span>' + message.payloadString + '</span>';
  messagePayloadFuzzyLampu = parseInt(message.payloadString);
  console.log(""+messagePayloadFuzzyLampu);	  
  }

  updateScroll(); // Scroll to bottom of window
}

// Called when the disconnection button is pressed
function startDisconnect() {
  client.disconnect();
  document.getElementById("pesansuhu").innerHTML = '<span></span><br/>';
  document.getElementById("pesankelembapan").innerHTML = '<span></span><br/>';
  document.getElementById("pesancahaya").innerHTML = '<span></span><br/>';
  document.getElementById("pesanntp").innerHTML = '<span></span><br/>';

  document.getElementById("pesansuhu").innerHTML = '<span>Disconnected</span><br/>';
  document.getElementById("pesankelembapan").innerHTML = '<span>Disconnected</span><br/>';
  document.getElementById("pesancahaya").innerHTML = '<span>Disconnected</span><br/>';
  document.getElementById("pesanntp").innerHTML = '<span>Disconnected</span><br/>';

  document.getElementById("pesanstatuslampu").innerHTML = '<span>Disconnected</span><br/>';
  document.getElementById("fuzzylampu").innerHTML = '<span>Disconnected</span><br/>';

  updateScroll(); // Scroll to bottom of window
  connectPoint = 0;
  console.log(connectPoint);
}

function updateScrollDisconnect() {

}

// Updates #messages div to auto-scroll
function updateScroll() {
  var element = document.getElementById("pesansuhu");
  var element1 = document.getElementById("pesankelembapan");
  var element2 = document.getElementById("pesancahaya");
  var element3 = document.getElementById("pesanntp");
  var element4 = document.getElementById("pesanLampu");
  var element5 = document.getElementById("fuzzysaya");

  element.scrollTop = element.scrollHeight;
  element1.scrollTop = element1.scrollHeight;
  element2.scrollTop = element2.scrollHeight;
  element3.scrollTop = element3.scrollHeight;
  element4.scrollTop = element4.scrollHeight;
  element5.scrollTop = element5.scrollHeight;
  
}

function publishNilaiFuzzy() {
  pesanfuzzy = document.getElementById("pesanfuzzy").innerHTML;
  pesanfuzzy = new Paho.MQTT.Message(pesanfuzzy.toString());
  pesanfuzzy.destinationName = "lyne.dre@gmail.com/fuzzypenyiraman";
  client.send(pesanfuzzy);
  console.log(pesanfuzzy);

  // pipaMessage = new Paho.MQTT.Message(OutPipa.toString());
	// pipaMessage.destinationName = "zakariyaapw09@gmail.com/statuspipa";
	// client.send(pipaMessage);
}

// startConnect();

// Area Chart Example
var chartColors = {
	red: 'rgb(255, 99, 132)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgb(255, 205, 86)',
	green: 'rgb(75, 192, 192)',
	blue: 'rgb(54, 162, 235)',
	purple: 'rgb(153, 102, 255)',
	grey: 'rgb(201, 203, 207)'
};

function randomScalingFactor() {
	return (messagePayloadSuhu*5/2);
}

function onRefresh(chart) {
	chart.data.datasets[0].data.push({
		x: Date.now(),
		y: messagePayloadSuhu
	});
	chart.data.datasets[1].data.push({
		x: Date.now(),
		y: messagePayloadKelembapan
	});
	chart.data.datasets[2].data.push({
		x: Date.now(),
		y: messagePayloadCahaya
	});
	
	// chart.config.data.datasets.forEach(function(dataset) {
		
		// dataset.data.push({
		// 	x: Date.now(),
		// 	y: messagePayloadSuhu
		// });
		
		// dataset.data.push({
		// 	x: Date.now(),
		// 	y: messagePayloadKelembapan
		// });
	// });
}

var color = Chart.helpers.color;
var config = {
	type: 'line',
	data: {
		datasets: [{
			label: 'Dataset 1 (Suhu)',
			backgroundColor: color(chartColors.red).alpha(0.5).rgbString(),
			borderColor: chartColors.red,
			fill: false,
			lineTension: 0,
			borderDash: [8, 4],
			data: []
		}, {
			label: 'Dataset 2 (Kelembapan)',
			backgroundColor: color(chartColors.blue).alpha(0.5).rgbString(),
			borderColor: chartColors.blue,
			fill: false,
			cubicInterpolationMode: 'monotone',
			data: []
		}, {
			label: 'Dataset 3 (Cahaya)',
			backgroundColor: color(chartColors.yellow).alpha(0.5).rgbString(),
			borderColor: chartColors.yellow,
			fill: false,
			cubicInterpolationMode: 'monotone',
			data: []
		}]
	},
	options: {
		title: {
			display: true,
			text: 'Line chart (hotizontal scroll) sample'
		},
		scales: {
			xAxes: [{
				type: 'realtime',
				realtime: {
					duration: 20000,
					refresh: 2000,
					delay: 5000,
					onRefresh: onRefresh
				}
			}],
			yAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'value'
				}
			}]
		},
		tooltips: {
			mode: 'nearest',
			intersect: false
		},
		hover: {
			mode: 'nearest',
			intersect: false
		}
	}
};

window.onload = function() {
	var ctx = document.getElementById('myChart').getContext('2d');
  window.myChart = new Chart(ctx, config);
};

function startConnectSuhu() {
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
      onSuccess: onConnectSuhu,
  });

  // Set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
//   client.ledState = ledState;
	connectPoint = 1;
	console.log(connectPoint);
}

function startConnectKelembapan() {
  // Generate a random client ID
  clientID = "krisna123";

  // Fetch the hostname/IP address and port number from the form
  host = "ue957f79.ap-southeast-1.emqx.cloud";
  // port = 8883;
  port = 8083;
  // Print output for the user in the messages div
  // document.getElementById("pesansuhu").innerHTML += '<span>Connecting to: ' + host + ' on port: ' + port + '</span><br/>';
  // document.getElementById("pesansuhu").innerHTML += '<span>Using the following client value: ' + clientID + '</span><br/>';

  // Initialize new Paho client connection
  client = new Paho.MQTT.Client(host, Number(port), "krisna");

  // Connect the client, if successful, call onConnect function
  client.connect({
      // userName: "lyne.dre@gmail.com",
      userName: "krisna.widi.kw",
      password: "sou887wl23",
      onSuccess: onConnectKelembapan,
  });

  // Set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
	//   client.ledState = ledState;
	connectPoint = 1;
	console.log(connectPoint);
}

function startConnectCahaya() {
  // Generate a random client ID
  clientID = "krisna123";

  // Fetch the hostname/IP address and port number from the form
  host = "ue957f79.ap-southeast-1.emqx.cloud";
  port = 8083;

  // Print output for the user in the messages div
  // document.getElementById("pesansuhu").innerHTML += '<span>Connecting to: ' + host + ' on port: ' + port + '</span><br/>';
  // document.getElementById("pesansuhu").innerHTML += '<span>Using the following client value: ' + clientID + '</span><br/>';

  // Initialize new Paho client connection
  client = new Paho.MQTT.Client(host, Number(port), "krisna");

  // Connect the client, if successful, call onConnect function
  client.connect({
      userName: "lyne.dre@gmail.com",
      password: "sou887wl23",
      onSuccess: onConnectCahaya,
  });

  // Set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
//   client.ledState = ledState;
	connectPoint = 1;
	console.log(connectPoint);
}

// Called when the client connects
function onConnectSuhu() {
  // Fetch the MQTT topic from the form
  topicSuhu = "lyne.dre@gmail.com/suhusaya";
  // Print output for the user in the messages div
  // document.getElementById("pesansuhu").innerHTML += '<span>Subscribing to: ' + topic + '</span><br/>';

  // Subscribe to the requested topic
  client.subscribe(topicSuhu);
}

// Called when the client connects
function onConnectKelembapan() {
  // Fetch the MQTT topic from the form
  topicSuhu = "lyne.dre@gmail.com/suhusaya";
  // Print output for the user in the messages div
  // document.getElementById("pesansuhu").innerHTML += '<span>Subscribing to: ' + topic + '</span><br/>';

  // Subscribe to the requested topic
  client.subscribe(topicKelembapan);
}

function onConnectCahaya() {
  // Fetch the MQTT topic from the form
  topicSuhu = "lyne.dre@gmail.com/suhusaya";
  // Print output for the user in the messages div
  // document.getElementById("pesansuhu").innerHTML += '<span>Subscribing to: ' + topic + '</span><br/>';

  // Subscribe to the requested topic
  client.subscribe(topicCahaya);
}

function startDisconnectSuhu() {
	if (connectPoint == 1) {
		document.getElementById("pesansuhu").innerHTML = '<span></span><br/>';
		document.getElementById("pesansuhu").innerHTML = '<span>Disconnected</span><br/>';
		updateScroll();
	}else{
		client.disconnect()
		document.getElementById("pesansuhu").innerHTML = '<span></span><br/>';
		document.getElementById("pesansuhu").innerHTML = '<span>Disconnected</span><br/>';
		connectPoint == 0;
		updateScroll();
	}
	 // Scroll to bottom of window
}

function startDisconnectKelembapan() {
	if (connectPoint == 1) {
		document.getElementById("pesankelembapan").innerHTML = '<span></span><br/>';
		document.getElementById("pesankelembapan").innerHTML = '<span>Disconnected</span><br/>';
		updateScroll(); // Scroll to bottom of window
	}else{
		client.disconnect();
		document.getElementById("pesankelembapan").innerHTML = '<span></span><br/>';
		document.getElementById("pesankelembapan").innerHTML = '<span>Disconnected</span><br/>';
		connectPoint == 0;
		updateScroll(); // Scroll to bottom of window
	}
}

function startDisconnectCahaya() {
	if (connectPoint == 1) {
		document.getElementById("pesancahaya").innerHTML = '<span></span><br/>';
		document.getElementById("pesancahaya").innerHTML = '<span>Disconnected</span><br/>';
		updateScroll(); // Scroll to bottom of window
	}else{
		client.disconnect();
		document.getElementById("pesancahaya").innerHTML = '<span></span><br/>';
		document.getElementById("pesancahaya").innerHTML = '<span>Disconnected</span><br/>';
		connectPoint == 0;
		updateScroll(); // Scroll to bottom of window
	}
}

setInterval(publishNilaiFuzzy,5000);