<?php
//consulta que es sanitizar entrada 
include './bd/conexion.php';

$jsondata["success"] = false;
$jsondata["data"]["mensaje"]="todo mal";

if(isset($_GET['id'])){
$qryEst='SELECT idPaciente,estatura, edad, peso FROM paciente WHERE idPaciente = '.$_GET['id'];
$result= mysqli_query($link,$qryEst);
//verificar si el resultado es algo
while ( $row = mysqli_fetch_array($result)){
$estaturaJson =$row['estatura'];
$edadJson	=$row['edad'];
$PesRec	=$row['peso'];
$PesMax = $row['idPaciente'];
}
$jsondata["success"] = true;
$jsondata["data"]["mensaje"]="todo bien";
$jsondata["data"]["estatura"]= $estaturaJson;
$jsondata["data"]["pesoRec"]= $PesRec;
$jsondata["data"]["pesoMax"]= $PesMax;
$jsondata["data"]["edad"]=$edadJson;
}

header('Content-type: application/json; charset=utf-8');
echo json_encode($jsondata, JSON_FORCE_OBJECT);
exit();
?>