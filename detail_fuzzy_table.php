<?php
    include ('databases/conSQL.php');
    $id = $_GET["id"];

    $idFuzzy = '';

    $sqlDetailFuzzy = "SELECT * FROM tb_fuzzy WHERE id_fuzzy = $id";
    $queryDetailFuzzy = mysqli_query($koneksi, $sqlDetailFuzzy);
 
    while ($rowDetailFuzzy = mysqli_fetch_array($queryDetailFuzzy)) {

?>
<?php include 'sidebar.php'?>

<!-- Container Fluid-->
<div class="container-fluid" id="container-wrapper">
    <div class="card mb-3">
        <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h5 class="m-0 font-weight-bold text-primary">Hasil Perhitungan Fuzzy</h5>
        </div>
        <div class="card-body">
          <div class="form-group">
            <label for="FungsiKeanggotaan1">Id Fuzzy</label>
            <input class="form-control" type="text" placeholder="<?php echo $id ?>"
              id="FungsiKeanggotaan1" readonly>
          </div>
          <hr class="sidebar-divider">
          <h6>Fungsi Keanggotaan</h6>
          <div class="form-group">
            <label for="exampleFormControlReadonly">Suhu Dingin</label>
            <input class="form-control" type="text" placeholder="<?php echo $rowDetailFuzzy["fk_shDingin"] ?>"
              id="exampleFormControlReadonly" readonly>
          </div>
          <div class="form-group">
            <label for="exampleFormControlReadonly">Suhu Normal</label>
            <input class="form-control" type="text" placeholder="<?php echo $rowDetailFuzzy["fk_shNormal"] ?>"
              id="exampleFormControlReadonly" readonly>
          </div>
          <div class="form-group">
            <label for="exampleFormControlReadonly">Suhu Panas</label>
            <input class="form-control" type="text" placeholder="<?php echo $rowDetailFuzzy["fk_shPanas"] ?>"
              id="exampleFormControlReadonly" readonly>
          </div>
          <div class="form-group">
            <label for="exampleFormControlReadonly">Kelembapan Kering</label>
            <input class="form-control" type="text" placeholder="<?php echo $rowDetailFuzzy["fk_rhKering"] ?>"
              id="exampleFormControlReadonly" readonly>
          </div>
          <div class="form-group">
            <label for="exampleFormControlReadonly">Kelembapan Normal</label>
            <input class="form-control" type="text" placeholder="<?php echo $rowDetailFuzzy["fk_rhNormal"] ?>"
              id="exampleFormControlReadonly" readonly>
          </div>
          <div class="form-group">
            <label for="exampleFormControlReadonly">Kelembapan Basah</label>
            <input class="form-control" type="text" placeholder="<?php echo $rowDetailFuzzy["fk_rhBasah"] ?>"
              id="exampleFormControlReadonly" readonly>
          </div>
        </div>
    </div>
</div>
<!---Container Fluid-->

<?php 
    }
include 'footer.php'
?>