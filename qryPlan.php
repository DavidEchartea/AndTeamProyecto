<?php
	session_start();
	if(empty($_SESSION['usr'])){
		echo"Debe autentificarse";
		exit();
	}
	include_once './bd/conexion.php';
	$opcion = mysqli_real_escape_string($link, $_POST['txtOpc']);
	switch ($opcion) {
		case 'add':
			$idPaciente= mysqli_real_escape_string($link, $_POST['txtOpc']);
			$biceptal = mysqli_real_escape_string($link, $_POST['txtBiceptal']);
            $triceptal = mysqli_real_escape_string($link, $_POST['txtTriceptal']);
            $suprailiaco = mysqli_real_escape_string($link, $_POST['txtSuprailiaco']);
            $subEscapular = mysqli_real_escape_string($link, $_POST['txtsubEscapular']);
            $abdominal = mysqli_real_escape_string($link, $_POST['txtAbdominal']);
            $cuadri= mysqli_real_escape_string($link, $_POST['txtCuadriciptal']);
            $pectoral= mysqli_real_escape_string($link, $_POST['txtPectoral']);
            $id_medida_paciente=mysqli_real_escape_string($link, $_POST['txtOpc']);
			
            $qryPlan="INSERT INTO `medidas`(`biciptal`, `tricipal`, `subescapular`, `suprailiaco`, `abdominal`, `cuadriciptal`, `pectoral`, `paciente_medidas`) VALUES ('$biceptal','$triceptal','$suprailiaco','$subEscapular','$abdominal','$cuadri','$pectoral','$id_medida_paciente')";
			
			$result = mysqli_query($link,$qryPlan) or die("Error al OBO ejecutar el query: ".mysqli_error($link));

			//redirigie el programa al script html de captura de datos
			echo "<script type='text/javascript'>
			window.location.href='./crearplan.php'
			</script>";
			break;
	}
?>