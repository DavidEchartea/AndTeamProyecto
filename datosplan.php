<?php
//consulta que es sanitizar entrada
include './bd/conexion.php';

if(isset($_GET['id'])){
$qryEst='SELECT idPaciente,estatura, edad, peso FROM paciente WHERE idPaciente = 1';
$result= mysqli_query($link,$qryEst);
//verificar si el resultado es algo
while ( $row = mysqli_fetch_array($result)){
//aqui hago la consulta
$PesMinimo =$row['estatura'];
$edadJson	=$row['edad'];
$PesRec	=$row['peso'];
$PesMax = $row['idPaciente'];
}
$jsondata["success"] = true;
$jsondata["data"]["mensaje"]="todo bien";
$jsondata["data"]["pesoMinimo"]= $PesMinimo;
$jsondata["data"]["pesoRec"]= $PesRec;
$jsondata["data"]["pesoMax"]= $PesMax;
$jsondata["data"]["edad"]=$edadJson;
//$jsondata["data"]["metricas"]=array();
//$jsondata["data"]["metricas"][]=(99,88,77);
}
else{
$jsondata["success"] = false;
$jsondata["data"]["mensaje"]="todo mal";
$jsondata["data"]["pesoRec"] =88;
//$jsondata["data"]["metricas"]=array();
//$jsondata["data"]["metricas"][]=(0,0,0);
}
header('Content-type: application/json; charset=utf-8');
echo json_encode($jsondata, JSON_FORCE_OBJECT);
exit();
?>