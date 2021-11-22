<?php
    // $koneksi = mysqli_connect("localhost","root","","db_skripsi");

    // $sqlFuzzy = 'SELECT * FROM tb_fuzzy';

    // $queryFuzzy = mysqli_query($koneksi, $sqlFuzzy);
    $koneksi = mysqli_connect("localhost","monito13_tillandsia","monitoringtillandsia","monito13_tillandsiadb");

    $sqlFuzzy = 'SELECT * FROM tb_fuzzy';

    $queryFuzzy = mysqli_query($koneksi, $sqlFuzzy);
?>
