<?php
  session_start();
  if (empty($_SESSION['usr'])) {
    echo "Debe autentificarse!";
    exit();
  }
  include '../bd/conexion.php';

  $qry='SELECT idPaciente,nombre_paciente,apellido_pat,apellido_mat FROM paciente ORDER BY nombre_paciente ASC';

  $tablaBD = mysqli_query($link,$qry);
  if(mysqli_num_rows($tablaBD)>0){
?>

<!DOCTYPE html>
<html>
<meta charset="utf-8">
<head>
  <title>Alta Clientes</title>
  <link rel="stylesheet"  href="estilos.css">

  <link href="/docs/4.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

  <style type="text/css">
  .my-custom-scrollbar {
    position: relative;
    height: 200px;
    overflow: auto;
  }
  .table-wrapper-scroll-y {
    display: block;
  }
 
  sticky-footer{
  flex-shrink: none;
  }

  .card > .card-header {
  background: #333436; color: #F4F5F6; }
  .container-fluid{
    background: #949494
  }

  .navbar-dark .navbar-nav .nav-link{
    color: rgb(158,84,84);
  }

  .background{
    background-color: #9e5454;
  }

  .letter{
    color: #ffffff;
  }

  .img-container {
        text-align: center;
        background-color:#313534;
  }

  </style>

</head>
<body>

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="../menu.html">
        <img src="../img/pesas.png" width="70" height="50">
      </a>
      
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link active" href="../clientes/altacliente.php">Alta cliente</a>
        <a class="nav-item nav-link" href="../crearplan.php">Crear plan</a>
        <a class="nav-item nav-link" href="../expediente/expediente.php">Expediente</a>
        <a class="nav-item nav-link" href="../entrenamiento/altaentrenamiento.php">Entrenamiento</a>
      </div>
  </div>
  </nav>
  <div class="img-container">
    <img src="../img/logo1.png">
  </div>
  <div class="card text-center">
    <div class="card-header">
      Alta Clientes
    </div>
  </div>
<form id='frmAltaClientes' action='./qryclientes.php' method="POST">

  <div class="container-fluid">
  

  <div class="row">

    <div class="col">
      <div class="form-group">
        <input type='hidden' id="txtOpc"class="form-control" name="txtOpc" placeholder="id">
      </div>
      <div class="form-group">
        <input type="text" id="txtNombre" name="txtNombre"class="form-control" placeholder="Nombre(s)">
      </div>
      <div class="form-group">
      <input type="text" id="txtAPaterno" name="txtAPaterno"class="form-control" placeholder="Apellido Paterno">
      </div>
      <div class="form-group">
      <input type="text" id="txtAMaterno" name="txtAMaterno"class="form-control" placeholder="Apellido Materno">
      </div>
      <div class="form-group">
      <input type="text" id="txtCorreo" name="txtCorreo"class="form-control" placeholder="Correo">
      </div>
      <div class="form-group">
      <input type="text" id="txtObjetivo" name="txtObjetivo"class="form-control" placeholder="Objetivo">
      </div>
    </div>

    <div class="col">
      <div class="form-group">
      </div>
      <div class="form-group">
      <input type="text" id="txtEdad" name="txtEdad"class="form-control" placeholder="Edad">
      </div>
      <div class="form-group">
      <input type="text" id="txtEstatura" name="txtEstatura"class="form-control" placeholder="Estatura">
      </div>
      <div class="form-group">
      <input type="text" id="txtPeso" name="txtPeso"class="form-control" placeholder="Peso Inicial">
      </div>
      <div class="form-group">
      <input type="text" id="txtTelefono" name="txtTelefono"class="form-control" placeholder="Telefono">
      </div>
    </div>

    </div><!--ROW-->

     <div class="row">
      <div class="col">
        <div class="card text-center">
          <div class="table-wrapper-scroll-y my-custom-scrollbar">

            <table class="table table-hover table-dark">
              <thead>
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Apellido Paterno</th>
                  <th scope="col">Apellido Materno</th>
                </tr>
              </thead>
      <?php
        while ($registo =mysqli_fetch_array($tablaBD)) {
          $idPaciente=$registo['idPaciente'];
          $nombre_paciente=$registo['nombre_paciente'];
          $apellido_pat=$registo['apellido_pat'];
          $apellido_mat=$registo['apellido_mat'];

           echo " <tr onclick='javascript: window.location.href=\"./updClientes.php?idPaciente=$idPaciente\";'>

              <td>$nombre_paciente</td> <td>$apellido_pat</td> <td>$apellido_mat</td>"; } 
        echo "</table>";
        }else{
          echo"
          <table border='0' align='
          center' bordercolor='#FF3333'>
          <tr><td></td></tr>
          <tr align='center'>
          <td align='center'>
            <td align='center'> <font color='#FF3333'> No existen registros en la tabla de clientes</font></td>
           </tr>
          </table>
          </div>
          ";
        }

            mysqli_free_result($tablaBD);
        mysqli_close($link);
    ?>
    
        </div>
        </div>
      </div>
    </div>
    </div><!--Container-->
    <div class="card text-center">
      <div class="card-header">
      <button type="button" name="btnAgregar" class="btn btn-secondary  background letter" onclick="javascript: grabar('clientes')"> Agregar </button>
      <button type="button" class="btn btn-secondary  float-left background letter" href="./menu.html">Volver al menu</button>
      </div>
    </div>
  </form>
      <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
      <div class="container text-center">
        <a>Attitude Nutrition Discipline Team</a>
      </div>
      </footer>

</body>
<script type='text/javascript' src='../js/funciones.js'></script>
</html>