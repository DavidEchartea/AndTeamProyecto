<?php
session_start();

include_once './bd/conexion.php';

if (!isset($_POST["btnAceptar"])) {exit;}

$usr=$_POST['usuario'];
$pwd=$_POST['password'];

$strQry= "select * from usuarios where nombre_usuario = '".$usr."' and contra='$pwd'";

//ejecutar query
$result = mysqli_query($link,$strQry);


//evalua resultado de qry
if (mysqli_num_rows($result)>0){

	//asigna valores del registro intermedio a vector llamado $registro
	$registro = mysqli_fetch_array($result);

	//asigna valores de usuario
	$_SESSION['usr']=$usr;
	$_SESSION['cat']=$registro['cat'];
	header("Location: ./menu.html");
} else{
	echo"
		<script> 
			alert('Usuario y/o contrasena incorrectos');
			window.location.href='./login.php';
			</script>";
}
?>