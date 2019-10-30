<?php

session_start();
  if(empty($_SESSION['usr'])){
    echo "Debe auteniticarse";
		exit();
  }
  
  include '../bd/conexion.php';

   $id=$_GET['idPaciente'];
   $strQry= "SELECT * FROM paciente WHERE idPaciente=$id;";
   $tablaBD=mysqli_query($link,$strQry);

  $registro=mysqli_fetch_array($tablaBD);

   $nombre_paciente=$registro['nombre_paciente'];
   $apellido_pat=$registro['apellido_pat'];
   $apellido_mat=$registro['apellido_mat'];
   $correo=$registro['correo'];
   $objetivo=$registro['objetivo'];
   $edad=$registro['edad'];
   $estatura=$registro['estatura'];
   $pesoIni=$registro['peso'];
   $telefono=$registro['telefono'];
   

   echo "
  <html>
  <head>
  	<title></title>
  	<script type='text/javascript'>
  		function enviar(opc){
  			switch(opc){

  				case 'upd':
  					document.getElementById('txtOpc').value = 'upd';
  					document.getElementById('txtId').value = '".$id."';
  					document.getElementById('frmUpdPaciente').submit();
  				break;
          
          case 'del':
            document.getElementById('txtOpc').value = 'del';
            document.getElementById('txtId').value = '".$id."';
            document.getElementById('frmUpdPaciente').submit();
          break;


  				case 'regresar':
  					window.location.href = './altacliente.php';
  				break;
  			}
  			
  		}
  	</script>
    <meta charset='utf-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>
     <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js'></script>
  <!-- Latest compiled and minified CSS -->
  <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' integrity='sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u' crossorigin='anonymous'>

  <!-- Optional theme -->
  <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css' integrity='sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp' crossorigin='anonymous'>

  <!-- Latest compiled and minified JavaScript -->
  <script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js' integrity='sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa' crossorigin='anonymous'> </script>

  </head>
  <body>
  	<form  name='frmUpdPaciente' id='frmUpdPaciente' action='./qryClientes.php' method='POST'>
  		<div class='panel panel-primary'>

      <div class='panel-heading'>Modificando Cliente</div>

      <table align='center' width='400' border='0'>
        <tr>
          <td align='right' width='200'>Id:&nbsp&nbsp</td>
          <td>$id</td>
        </tr>
  			 <tr>
          <td align='right'>Nombres: &nbsp&nbsp</td>
          <td><input type='text' name='txtNombre' id='txtNombre' value='$nombre_paciente' ></td>
        </tr>

           <tr>
  				<td align='right'>Apellido Paterno:&nbsp&nbsp</td>
  				<td><input type='text' name='txtAPaterno' id='txtAPaterno' value='$apellido_pat'></td>
            </tr>

             <tr>
  				<td align='right'>Apellido Materno:&nbsp&nbsp</td>
  				<td><input type='text' name='txtAMaterno' id='txtAMaterno' value='$apellido_mat'></td>
            </tr>

             <tr>
  				<td align='right'>Correo:&nbsp&nbsp</td>
  				<td><input type='text' name='txtCorreo' id='txtCorreo' value='$correo' autofocus></td>
            </tr>

             <tr>
  				<td align='right'>Objetivo:&nbsp&nbsp</td>
  				<td><input type='text' name='txtObjetivo' id='txtObjetivo' value='$objetivo' autofocus></td>
            </tr>
            <tr>
          <td align='right'>Edad:&nbsp&nbsp</td>
          <td><input type='text' name='txtEdad' id='txtEdad' value='$edad' autofocus></td>
            </tr>
            <tr>
          <td align='right'>Estatura:&nbsp&nbsp</td>
          <td><input type='text' name='txtEstatura' id='txtEstatura' value='$estatura' autofocus></td>
            </tr>
            <td align='right'>Peso Inicial:&nbsp&nbsp</td>
          <td><input type='text' name='txtPeso' id='txtPeso' value='$pesoIni' autofocus></td>
            </tr>
            <td align='right'>Telefono:&nbsp&nbsp</td>
          <td><input type='text' name='txtTelefono' id='txtTelefono' value='$telefono' autofocus></td>
            </tr>
  			</tr>
  			<tr height='80'>
  				<td colspan='2' align='center'>
  					
  					<input type='hidden' name='txtOpc' id='txtOpc'>
  					<input type='hidden' name='txtId' id='txtId'>

  					<input type='button' name='btnGuardar' id='btnGuardar' class='btn btn-info' value='Guardar' style='width: 100px' onClick='enviar(\"upd\")'>

  						<input type='button' name='btnEliminar' id='btnEliminar' class='btn btn-danger' value='Eliminar' style='width: 100px' onClick='enviar(\"del\")'>
  					
  					<input type='button' name='btnRegresar' id='btnRegresar' class='btn btn-info' value='Regresar' style='width: 100px' onClick='enviar(\"regresar\")'>
  				</td>
  			</tr>
  		</table>	
  </form>
  </body>
  <script type='text/javascript' src='http://services.iperfect.net/js/IP_generalLib.js'></script>
  </html>
  ";
  ?>