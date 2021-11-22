<?php include 'sidebar.php'?>

<!-- Container Fluid-->
<div class="container-fluid" id="container-wrapper">
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">DataTables</h1>
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="./">Home</a></li>
        <li class="breadcrumb-item">Tables</li>
        <li class="breadcrumb-item active" aria-current="page">DataTables</li>
    </ol>
    </div>

    <!-- Row -->
    <div class="row">
    <!-- Datatables -->
    <div class="col-lg-12">
        <div class="card mb-4">
        <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-primary">DataTables</h6>
        </div>
        <div class="table-responsive p-3">
            <table class="table align-items-center table-flush" id="dataTable">
            <thead class="thead-light">
                <tr>
                <th>Id Fuzzy</th>
                <th>Data Suhu</th>
                <th>Data Kelembapan</th>
                <th>Tanggal Fuzzy</th>
                <th>Waktu Fuzzy</th>
                <th>Hasil Fuzzy Penyiraman</th>
                <th>Aksi</th>
                </tr>
            </thead>
            <tfoot>
                <tr>
                <th>Id Fuzzy</th>
                <th>Data Suhu</th>
                <th>Data Kelembapan</th>
                <th>Tanggal Fuzzy</th>
                <th>Waktu Fuzzy</th>
                <th>Hasil Fuzzy Penyiraman</th>
                <th>Aksi</th>
                </tr>
            </tfoot>
            <tbody>
            <?php
                while ($rowFuzzy = mysqli_fetch_array($queryFuzzy)) {
                    echo'
                    <tr>
                        <td>'.$rowFuzzy['id_fuzzy'].'</td>
                        <td>'.$rowFuzzy['data_suhu'].'</td>
                        <td>'.$rowFuzzy['data_kelembapan'].'</td>
                        <td>'.$rowFuzzy['tanggal_fuzzy'].'</td>
                        <td>'.$rowFuzzy['waktu_fuzzy'].'</td>
                        <td>'.$rowFuzzy['hasil_fuzzy'].'</td>
                        <td><a href="detail_fuzzy_table.php?id='.$rowFuzzy['id_fuzzy'].'" class="btn btn-sm btn-primary">Go Here</a></td>
                    </tr>
                    ';
                }
            ?>
            </tbody>
            </table>
        </div>
        </div>
    </div>
<!---Container Fluid-->

<!-- Scroll to top -->
<a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
</a>

<script src="vendor/jquery/jquery.min.js"></script>
<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="vendor/jquery-easing/jquery.easing.min.js"></script>
<script src="js/ruang-admin.min.js"></script>
<!-- Page level plugins -->
<script src="vendor/datatables/jquery.dataTables.min.js"></script>
<script src="vendor/datatables/dataTables.bootstrap4.min.js"></script>

<!-- Page level custom scripts -->
<script>
$(document).ready(function () {
    $('#dataTable').DataTable(); // ID From dataTable 
    $('#dataTableHover').DataTable(); // ID From dataTable with Hover
});
</script>