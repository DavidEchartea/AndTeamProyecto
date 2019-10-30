<?php
	session_start();
	if(empty($_SESSION['usr'])){
		echo"Debe autentificarse";
		exit();
	}

	include_once '../bd/conexion.php';

	$opcion = mysqli_real_escape_string($link, $_POST['txtOpc']);
	switch ($opcion) {
		case 'add':
			//consultar el query para insertar en la tabla de la bd..

			//$idPaciente= mysqli_real_escape_string($link, $_POST['txtOpc']);
			$nombre_paciente = mysqli_real_escape_string($link, $_POST['txtNombre']);
            $apellido_pat = mysqli_real_escape_string($link, $_POST['txtAPaterno']);
            $apellido_mat = mysqli_real_escape_string($link, $_POST['txtAMaterno']);
            $telefono = mysqli_real_escape_string($link, $_POST['txtTelefono']);
            $estatura = mysqli_real_escape_string($link, $_POST['txtEstatura']);
            $peso= mysqli_real_escape_string($link, $_POST['txtPeso']);
            $correo= mysqli_real_escape_string($link, $_POST['txtCorreo']);
			$edad= mysqli_real_escape_string($link, $_POST['txtEdad']);
			$objetivo= mysqli_real_escape_string($link, $_POST['txtObjetivo']);
			
					echo "OBO";
            $strQry="INSERT INTO `paciente`(`nombre_paciente`, `apellido_pat`, `apellido_mat`, `estatura`, `edad`, `peso`, `correo`, `telefono`, `objetivo`) 
            VALUES ('$nombre_paciente','$apellido_pat','$apellido_mat','$estatura','$edad','$peso','$correo','$telefono','$objetivo')";
			
			$result = mysqli_query($link, $strQry) or die("Error al OBO ejecutar el query: ".mysqli_error($link));

			//redirigie el programa al script html de captura de datos
			echo "<script type='text/javascript'>
			window.location.href='./altacliente.php'
			</script>";

			break;

		//opcion modificar...
		 case 'upd':

			$idPaciente= mysqli_real_escape_string($link, $_POST['txtId']);
			$nombre_paciente = mysqli_real_escape_string($link, $_POST['txtNombre']);
            $apellido_pat = mysqli_real_escape_string($link, $_POST['txtAPaterno']);
            $apellido_mat = mysqli_real_escape_string($link, $_POST['txtAMaterno']);
            $telefono = mysqli_real_escape_string($link, $_POST['txtTelefono']);
            $estatura = mysqli_real_escape_string($link, $_POST['txtEstatura']);
            $peso= mysqli_real_escape_string($link, $_POST['txtPeso']);
            $correo= mysqli_real_escape_string($link, $_POST['txtCorreo']);
			$edad= mysqli_real_escape_string($link, $_POST['txtEdad']);
			$objetivo= mysqli_real_escape_string($link, $_POST['txtObjetivo']);

			$strQry = "UPDATE paciente SET `nombre_paciente`='$nombre_paciente',`apellido_pat`='$apellido_pat',`apellido_mat`='$apellido_mat',`estatura`='$estatura',`edad`='$edad',`peso`='$peso',`correo`='$correo',`telefono`='$telefono',`objetivo`='$objetivo' WHERE
				idPaciente = '$idPaciente'";

			$result = mysqli_query($link, $strQry) or die("*°°* Error al ejecutar el query:".mysqli_error($link));

			//redirigie el programa al script html de actualizacion de datos
			echo "<script type='text/javascript'>
			window.location.href='./altacliente.php'
			</script>";
			
			break;
	}

?>