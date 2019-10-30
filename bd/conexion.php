<?php

$host = "localhost";
$dbuser ="admin";
$dbpass ="admin";
$db = "andteam";

$link = mysqli_connect($host,$dbuser,$dbpass,$db);

if (mysqli_connect_error()) {
	echo "<script>alert('No se pudo conectar con la base de datos.');</script";
	echo "<script>windows.location.href='./login.php';</script>";
	exit();
}
mysqli_select_db($link,'andteam') or die('No se puede abrir la estructura de base de datos'.mysqli_connect_error());
?>