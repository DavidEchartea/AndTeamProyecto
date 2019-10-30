<?php
include './bd/conexion.php';
if(isset($_GET['id'])){
$qryEst='SELECT estatura FROM paciente';
$result= mysqli_query($link,$qryEst);
//aqui hago la consulta
//$PesoMinimo =99;
//$PesoMax=88;
$pesoRec['estatura'];
$jsondata["success"] = true;
$jsondata["data"]["mensaje"]="todo bien";
$jsondata["data"]["pesoRec"]["estatura"];
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