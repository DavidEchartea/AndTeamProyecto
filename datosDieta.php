<?php

include './bd/conexion.php';
$jsondata["success"] = false;
$jsondata["data"]["mensaje"]="todo mal";

if(isset($_GET['id'])){
$qryTabla='SELECT idNutri,nombre_nutri,proteinas,carbohidratos,grasas 
		   FROM proteinas WHERE idNutri = 1';
$result= mysqli_query($link,$qryTabla);
while ( $row = mysqli_fetch_array($result)){
$idNurti =$row['idNutri'];
$nombre_nutri=$row['nombre_nutri'];
$proteinas=$row['proteinas'];
$carbohidratos = $row['carbohidratos'];
$grasas = $row['grasas'];
}
$jsondata["success"] = true;
$jsondata["data"]["mensaje"]="todo bien";
$jsondata["data"]["comidaJson"]= $nombre_nutri;
}
header('Content-type: application/json; charset=utf-8');
echo json_encode($jsondata, JSON_FORCE_OBJECT);
exit();
?>