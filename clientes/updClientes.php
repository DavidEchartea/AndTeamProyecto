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


     <link href='/docs/4.3/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'>
  <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'>
  <script src='https://code.jquery.com/jquery-3.3.1.slim.min.js' integrity='sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo' crossorigin='anonymous'></script>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js' integrity='sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1' crossorigin='anonymous'></script>
  <script src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js' integrity='sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM' crossorigin='anonymous'></script>

    <style type='text/css'>
    .img-container
    {
      text-align: center;
      background-color:#313534;
    } 

    .card > .card-header
    {
      background: #333436; color: #F4F5F6; 
    }
    .background
    {
      background-color: #9e5454;
    }
    .letter
    {
      color: #ffffff;
    }
    

    .footerp
    {
      bottom:0; !important
      position: fixed; !important
      text-align: center;
      width: 100%;
    }

    </style>
  </head>
  <body>
  <nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
      <a class='navbar-brand' href='./menu.html'>
        <img src='../img/pesas.png' width='65' height='50'>
      </a>
      
    
  <div class='collapse navbar-collapse' id='navbarNavAltMarkup'>
      <div class='navbar-nav'>
        <a class='nav-item nav-link' href='./altacliente.php'>Alta cliente</a>
        <a class='nav-item nav-link' href='#'>Crear plan</a>
        <a class='nav-item nav-link active' href='#''>Expediente</a>
      </div>
  </div>
  </nav>
  <div class='img-container'>
        <img src='../img/logo1.png'>
      </div>
      <div class='card text-center'>
        <div class='card-header'>
        Modificando Clientes
        </div>
      </div>
    <form  name='frmUpdPaciente' id='frmUpdPaciente' action='./qryclientes.php' method='POST'>

<div class='container-fluid'> <!--CONTAINER--> 
      

  <div class='d-flex justify-content-center align-items-center container '> <!--DIV FORM-->
  
  <div class='col'> <!--DIV COL--> 
    <div class='form-group'>
      <input type='hidden' id='txtOpc'class='form-control' name='txtOpc' placeholder='id'>
    </div>
    <div class='form-group'>
      <label>Nombre(s):</label>
      <input type='text' class='form-control' name='txtNombre' id='txtNombre' value='$nombre_paciente' disabled>
    </div>
    <div class='form-group'>
    <input type='text' id='txtAPaterno' name='txtAPaterno'class='form-control'>
    </div>
    <div class='form-group'>
    <input type='text' id='txtAMaterno' name='txtAMaterno'class='form-control'>
    </div>
    <div class=form-group'>
    <input type='text' id='txtCorreo' name='txtCorreo'class='form-control'>
    </div>
    <div class='form-group'>
    <input type='text' id='txtObjetivo' name='txtObjetivo'class='form-control'>
    </div>
  </div> <!--DIV COL--> 

  <div class='col'>
      <div class='form-group'>
      </div>
      <div class='form-group'>
      <input type'text' id='txtEdad' name='txtEdad'class='form-control'>
      </div>
      <div class='form-group'>
      <input type='text' id='txtEstatura' name='txtEstatura'class='form-control'>
      </div>
      <div class='form-group'>
      <input type='text' id='txtPeso' name='txtPeso'class='form-control' >
      </div>
      <div class='form-group'>
      <input type='text' id='txtTelefono' name='txtTelefono'class='form-control'>
      </div>
    </div>

  </div> <!--DIV FORM-->

  </form>  
</div> <!--CONTAINER--> 
<div class='card text-center'> <!--DIV BOTONES-->
      <div class='card-header'>

      <input type='hidden' name='txtOpc' id='txtOpc'>
      <input type='hidden' name='txtId' id='txtId'>

      <button type='button' id='btnGuardar' name='btnGuardar' class='btn btn-secondary float-center background letter' onClick='enviar(\"upd\")'> Guardar Cambios </button>
      <button type='button' class='btn btn-secondary  float-center background letter' onClick='enviar(\"regresar\")'>Volver al menu</button>
      </div>
      </div> <!--DIV BOTONES-->
  
  <footer class='py-4 bg-dark text-white-50 footerp'>
      <div class='container text-center'>
        <a>Attitude Nutrition Discipline Team</a>
      </div>
  </footer>
  </body>
  <script type='text/javascript' src='http://services.iperfect.net/js/IP_generalLib.js'></script>
  </html>
  ";
  ?>