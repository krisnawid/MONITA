<?php
    $koneksi = mysqli_connect("localhost","root","","db_tillandsia");

    $nilai_suhu = $_GET["suhu"];
    $nilai_kelembapan = $_GET["kelembapan"];
    $nilai_cahaya = $_GET["cahaya"];
    $nilai_fuzzy = $_GET["fuzzy"];
    $nilai_waktu = $_GET["waktu"];
    $nilai_tanggal = $_GET["tanggal"];
    
    $nilai_shDingin = $_GET["shDingin"];
    $nilai_shNormal = $_GET["shNormal"];
    $nilai_shPanas = $_GET["shPanas"];
    
    $nilai_rhKering = $_GET["rhKering"];
    $nilai_rhNormal = $_GET["rhNormal"];
    $nilai_rhBasah = $_GET["rhBasah"];
    
    mysqli_query($koneksi, "insert into tb_suhu (data_suhu,data_kelembapan,waktu_dht,tanggal_dht) values('$nilai_suhu','$nilai_kelembapan','$nilai_waktu','$nilai_tanggal')");
    mysqli_query($koneksi, "insert into tb_cahaya (data_cahaya,tanggal_cahaya,waktu_cahaya) values('$nilai_cahaya','$nilai_waktu','$nilai_tanggal')");
    mysqli_query($koneksi, "insert into tb_fuzzy (hasil_fuzzy,data_suhu,data_kelembapan,data_cahaya,tanggal_fuzzy,waktu_fuzzy,fk_shDingin,fk_shNormal,fk_shPanas,fk_rhKering,fk_rhNormal,fk_rhBasah) values('$nilai_fuzzy','$nilai_suhu','$nilai_kelembapan','$nilai_cahaya','$nilai_tanggal','$nilai_waktu','$nilai_shDingin','$nilai_shNormal','$nilai_shPanas','$nilai_rhKering','$nilai_rhNormal','$nilai_rhBasah')");
    
?>