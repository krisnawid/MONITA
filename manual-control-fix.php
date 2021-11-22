<?php include 'sidebar.php'?>

<!-- Container Fluid-->
<div class="container-fluid" id="container-wrapper">
    <div class="card mb-3">
        <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-primary">Manual Control</h6>
        </div>
        <div class="card-body">
            <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" onchange="valueChanged()" id="customSwitch1">
                <label class="custom-control-label" for="customSwitch1"></label>
            </div>
            <p>Control Relay Lampu</p>
            <button type="button" class="btn btn-primary" value="1" onclick="valueChangedButtonLampON()">ON</button>
            <button type="button" class="btn btn-primary" value="0" onclick="valueChangedButtonLampOFF()">OFF</button>
            <p class="mt-5">Control Relay Siram</p>
            <button type="button" class="btn btn-primary" onclick="valueChangedButtonSiram()">Siram</button>
        </div>
    </div>
</div>
<!---Container Fluid-->

<?php include 'footer.php'?>