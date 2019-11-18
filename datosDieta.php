<?php
session_start();
  $idControl =  $_SESSION['idControl'];

include './bd/conexion.php';
$jsondata["success"] = false;

if(isset($_GET['id'])){
$qryTabla="INSERT INTO dietatemp(idControl, idNutrimento) 
    VALUES ('".$idControl."',".$_GET['id'].")";

if( mysqli_query($link, $qryTabla)==true){
	$jsondata["success"] = true;
}

}
header('Content-type: application/json; charset=utf-8');
echo json_encode($jsondata, JSON_FORCE_OBJECT);
exit();
?>