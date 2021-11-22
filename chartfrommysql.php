<?php
  include ('databases/conSQL.php');

  $AVG_Fuzzy = 0;
  $calc_temp_avg13 = 0;
  $totalData = 0;

  $sqlPriodeWaktu = 'SELECT hasil_fuzzy FROM tb_fuzzy ORDER BY id_fuzzy DESC LIMIT 10';
  $sqlPriodeWaktuTemp = 'SELECT * FROM tb_fuzzy WHERE tanggal_fuzzy LIKE "%13"';
  
  $resultTotalBaris = mysqli_query($koneksi, "SELECT COUNT(*) as total FROM tb_fuzzy");
  $resultTotalBaris13 = mysqli_query($koneksi, "SELECT COUNT(*) as total FROM tb_fuzzy WHERE tanggal_fuzzy LIKE '%13'");

  $dataCount = mysqli_fetch_assoc($resultTotalBaris);
  $totalData = $dataCount['total'];
  
  $dataCount13 = mysqli_fetch_assoc($resultTotalBaris13);
  $totalData13 = $dataCount13['total'];

  $queryPriodeWaktu = mysqli_query($koneksi, $sqlPriodeWaktu);
  $queryPriodeWaktuTemp = mysqli_query($koneksi, $sqlPriodeWaktuTemp);

  while ($rowPriodeWaktu = mysqli_fetch_array($queryPriodeWaktu)) {
    $AVG_Fuzzy += (float)$rowPriodeWaktu['hasil_fuzzy'];
  }

  while ($rowPriodeWaktuTemp = mysqli_fetch_array($queryPriodeWaktuTemp)) {
    $calc_temp_avg13 += (float)$rowPriodeWaktuTemp['data_suhu'];
  }

  $AVG_Fuzzy = $AVG_Fuzzy/10;
  $calc_temp_avg13 = $calc_temp_avg13/$totalData13;

?>
<html>
<head>
	<title>MEMBUAT GRAFIK DARI DATABASE MYSQL DENGAN PHP DAN CHART.JS</title>
	<script type="text/javascript" src="js/Chart.js"></script>
</head>
<body>
	<style type="text/css">
	body{
		font-family: roboto;
	}
 
	table{
		margin: 0px auto;
	}
	</style>
    <h1><?php echo $totalData ?></h1>
    <h1><?php echo $calc_temp_avg13 ?></h1>
    <h1>Chart</h1>
 
	<div style="width: 800px;margin: 0px auto;">
    <h6 class="m-0 font-weight-bold text-primary">Suhu</h6>
		<canvas id="myBarChart"></canvas>
	</div>
 
	<br/>
	<br/>
 
	<script>
	Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
    Chart.defaults.global.defaultFontColor = '#858796';

    var chartColors = {
        red: 'rgb(255, 99, 132)',
        orange: 'rgb(255, 159, 64)',
        yellow: 'rgb(255, 205, 86)',
        green: 'rgb(75, 192, 192)',
        blue: 'rgb(54, 162, 235)',
        purple: 'rgb(153, 102, 255)',
        grey: 'rgb(201, 203, 207)'
    };

// Line Chart Example
    var ctx = document.getElementById("myBarChart");
    var myBarChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["13","14", "15", "16", "17", "18", "19", "20"],
        datasets: [{
        label: "Revenue",
        backgroundColor: "#4e73df",
        hoverBackgroundColor: "#2e59d9",
        borderColor: "#4e73df",
        data: [
            <?php 
                echo $calc_temp_avg13;
            ?>,
            32, 
            42, 
            32, 
            54, 
            43, 
            44],
        }],
    },
    options: {
        maintainAspectRatio: false,
        layout: {
        padding: {
            left: 10,
            right: 25,
            top: 25,
            bottom: 0
        }
        },
        scales: {
        xAxes: [{
            time: {
            unit: 'month'
            },
            gridLines: {
            display: false,
            drawBorder: false
            },
            ticks: {
            maxTicksLimit: 6
            },
            maxBarThickness: 25,
        }],
        yAxes: [{
            ticks: {
            min: 0,
            max: 50,
            maxTicksLimit: 5,
            padding: 10,
            // Include a dollar sign in the ticks
            },
            gridLines: {
            color: "rgb(234, 236, 244)",
            zeroLineColor: "rgb(234, 236, 244)",
            drawBorder: false,
            borderDash: [2],
            zeroLineBorderDash: [2]
            }
        }],
        },
        legend: {
        display: false
        },
        tooltips: {
        titleMarginBottom: 10,
        titleFontColor: '#6e707e',
        titleFontSize: 14,
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: '#dddfeb',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10,
        callbacks: {
            label: function(tooltipItem, chart) {
            var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
            return datasetLabel + ': $' + number_format(tooltipItem.yLabel);
                    }
                }
            },
        }
        });
	</script>
</body>
</html>