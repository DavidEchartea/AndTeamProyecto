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
    <title> Modificar Clientes</title>
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

  <link rel='stylesheet' href='../css/bootstrap.min.css'>
  <script src='../js/jquery-3.4.1.min.js'></script>
  <script src='../js/bootstrap.min.js' ></script>

  <link rel='icon' href='../img/muscle.png' type='image/png'>
  <link rel='stylesheet' type='text/css' href='../css/estilos.css'>
  </head>
  <body>
  <nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
      <a class='navbar-brand' href='./menu.html'>
        <img src='../img/pesas.png' width='65' height='50'>
      </a>
      
    
  <div class='collapse navbar-collapse' id='navbarNavAltMarkup'>
      <div class='navbar-nav'>
        <a class='nav-item nav-link active' href='../clientes/altacliente.php'>Alta cliente</a>
        <a class='nav-item nav-link' href='../crearplan.php'>Crear plan</a>
        <a class='nav-item nav-link' href='../expediente/expediente.php'>Expediente</a>
        <a class='nav-item nav-link' href='../entrenamiento/altaentrenamiento.php'>Entrenamiento</a>
      </div>
  </div>
  </nav>
  <div class='img-container'>
        <img src='../img/logo1.png'>
      </div>
      <div class='card text-center'>
        <div class='card-header'>
        Modificando Clientes
        <span><img src='../img/edit-user.png'></span>
        </div>
      </div>
    <form  name='frmUpdPaciente' id='frmUpdPaciente' action='./qryclientes.php' method='POST'>

<div class='container-fluid' id='divcont'> <!--CONTAINER--> 

  <div class='d-flex justify-content-center align-items-center container'> <!--DIV FORM-->
  
    <div class='col'> <!--DIV COL--> 

      <div class='form-group'>
        <input type='hidden' id='txtOpc'class='form-control' name='txtOpc'>
      </div>

      <div class='form-group'>
        <label>Nombre(s):</label>
        <input type='text' class='form-control' name='txtNombre' id='txtNombre' value='$nombre_paciente' disabled>
      </div>

      <div class='form-group'>
        <label>Apellido Paterno:</label>
        <input type='text' class='form-control' name='txtAPaterno' id='txtAPaterno' value='$apellido_pat' disabled>
      </div>

      <div class='form-group'>
        <label>Apellido Materno:</label>
        <input type='text' class='form-control' name='txtAMaterno' id='txtAMaterno' value='$apellido_mat' disabled>
      </div>

      <div class='form-group'>
        <label>Correo:</label>
        <input type='text' class='form-control' name='txtCorreo' id='txtCorreo' value='$correo'>
      </div>

      <div class='form-group'>
        <label>Objetivo:</label>
        <input type='text' class='form-control' name='txtObjetivo' id='txtObjetivo' value='$objetivo'>
      </div>

    </div> <!--DIV COL--> 

  <div class='col'>
    <div class='form-group'>
      <label>Edad:</label>
      <input type='text' class='form-control' name='txtEdad' id='txtEdad' value='$edad' maxlength='2'>
    </div>

      <div class='form-group'>
        <label>Estatura:</label>
        <input type='text' class='form-control' name='txtEstatura' id='txtEstatura' value='$estatura'>
      </div>

      <div class='form-group'>
        <label>Peso Inicial:</label>
        <input type='text' class='form-control' name='txtPesoInicial' id='txtPesoInicial' value='$pesoIni' disabled>
      </div>

      <div class='form-group'>
        <label>Telefono:</label>
        <input type='text' class='form-control' name='txtTelefono' id='txtTelefono' value='$telefono' maxlength='10'>
      </div>

  </div>

  </div> <!--DIV FORM-->

  </form>  
</div> <!--CONTAINER--> 
  <div class='card text-center'> <!--DIV BOTONES-->
    <div class='card-header'>
      <input type='hidden' name='txtOpc' id='txtOpc'>
      <input type='hidden' name='txtId' id='txtId'>

      <button type='button' id='btnGuardar' name='btnGuardar' class='btn btn-secondary float-center' onClick='enviar(\"upd\")'> Guardar Cambios <span><img src='../img/save.png'></span></button>
      <button type='button' class='btn btn-secondary  float-center' onClick='enviar(\"regresar\")'><span><img src='../img/return.png'></span> Volver al menu</button>
    </div>
  </div> <!--DIV BOTONES-->
  
  <footer class='py-4 bg-dark text-white-50'>
      <div class='container text-center'>
        <a>Attitude Nutrition Discipline Team</a>
      </div>
  </footer>
  </body>
  <script type='text/javascript' src='http://services.iperfect.net/js/IP_generalLib.js'></script>
  <script type='text/javascript'>

$(document).ready(function(){

      var height = $(window).height();

      $('#divcont').height(height);
});

</script>
  </html>
  ";
  ?>