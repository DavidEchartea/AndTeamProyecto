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
  <link rel="stylesheet" href="../css/bootstrap.min.css">
  <script src="../js/jquery-3.4.1.min.js"></script>
  <script src="../js/bootstrap.min.js"></script>
  <link rel="icon" href="../img/muscle.png" type="image/png">
  <link rel="stylesheet" type="text/css" href="../css/estilos.css">
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
      <span><img src="../img/add-user.png"></span>
    </div>
  </div>
<form id='frmAltaClientes' action='./qryclientes.php' method="POST">

  <div class="container">
  

  <div class="row">

    <div class="col">
      <div class="form-group">
        <input type='hidden' id="txtOpc"class="form-control" name="txtOpc" placeholder="id">
      </div>
      <div class="form-group">
        <label>Nombre:</label>
        <input type="text" id="txtNombre" name="txtNombre"class="form-control" placeholder="Nombre(s)">
      </div>
      <div class="form-group">
      <label>Apellido Paterno:</label>
      <input type="text" id="txtAPaterno" name="txtAPaterno"class="form-control" placeholder="Apellido Paterno">
      </div>
      <div class="form-group">
      <label>Apellido Materno:</label>
      <input type="text" id="txtAMaterno" name="txtAMaterno"class="form-control" placeholder="Apellido Materno">
      </div>
      <div class="form-group">
      <label>Correo:</label>
      <input type="text" id="txtCorreo" name="txtCorreo"class="form-control" placeholder="Correo">
      </div>
      <div class="form-group">
      <label>Objetivo:</label>
      <input type="text" id="txtObjetivo" name="txtObjetivo"class="form-control" placeholder="Objetivo">
      </div>
    </div>

    <div class="col">
      <div class="form-group">
      </div>
      <div class="form-group">
      <label>Edad:</label>
      <input type="text" id="txtEdad" name="txtEdad"class="form-control" placeholder="Edad" maxlength="2">
      </div>
      <div class="form-group">
      <label>Estatura:</label>
      <input type="text" id="txtEstatura" name="txtEstatura"class="form-control" placeholder="Estatura">
      </div>
      <div class="form-group">
      <label>Peso Inicial:</label>
      <input type="text" id="txtPeso" name="txtPeso"class="form-control" placeholder="Peso Inicial" maxlength="3">
      </div>
      <div class="form-group">
      <label>Telefono:</label>
      <input type="text" id="txtTelefono" name="txtTelefono"class="form-control" placeholder="Telefono" maxlength="10">
      </div>
      <label >Sexo:</label>
     <div class="form-check">
      <input class="form-check-input" type="radio" name="sexo" value="Masculino">
      <label class="form-check-label" for="sexo">Masculino</label>
      </div>
      <div class="form-check">
      <input class="form-check-input" type="radio" name="sexo" value="Femenino">
      <label class="form-check-label" for="sexo">Femenino</label>
      </div>
</div>
    </div>

    </div><!--ROW-->

     <div class="row">
      <div class="col">
        <div class="card text-center">
          <div class="card text-center">
            <div class="card-header">
              Clientes
              <span><img src="../img/users.png"></span>
            </div>
          </div>
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
        echo "</table>
                      ";

        }else{
          echo"
          <!DOCTYPE html>
<html>
<meta charset='utf-8'>
<head>
  <title>Alta Clientes</title>
  <link rel='stylesheet'  href='estilos.css'>

  <link rel='stylesheet' href='../css/bootstrap.min.css'>
  <script src='../js/jquery-3.4.1.min.js'></script>
  <script src='../js/bootstrap.min.js'></script>
  <link rel='icon' href='../img/muscle.png' type='image/png'>
  <link rel='stylesheet' type='text/css' href='../css/estilos.css'>
</head>
<body>

  <nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
      <a class='navbar-brand' href='../menu.html'>
        <img src='../img/pesas.png' width='70' height='50'>
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
      Alta Clientes
       <span><img src='../img/add-user.png'></span>
    </div>
  </div>
<form id='frmAltaClientes' action='./qryclientes.php' method='POST'>

  <div class='container'>
  

  <div class='row'>

    <div class='col'>
      <div class='form-group'>
        <input type='hidden' id='txtOpc'class='form-control' name='txtOpc' placeholder='id'>
      </div>
      <div class='form-group'>
        <label>Nombre:</label>
        <input type='text' id='txtNombre' name='txtNombre'class='form-control' placeholder='Nombre(s)'>
      </div>
      <div class='form-group'>
      <label>Apellido Paterno:</label>
      <input type='text' id='txtAPaterno' name='txtAPaterno'class='form-control' placeholder='Apellido Paterno'>
      </div>
      <div class='form-group'>
      <label>Apellido Materno:</label>
      <input type='text' id='txtAMaterno' name='txtAMaterno'class='form-control' placeholder='Apellido Materno'>
      </div>
      <div class='form-group'>
      <label>Correo:</label>
      <input type='text' id='txtCorreo' name='txtCorreo'class='form-control' placeholder='Correo'>
      </div>
      <div class='form-group'>
      <label>Objetivo:</label>
      <input type='text' id='txtObjetivo' name='txtObjetivo'class='form-control' placeholder='Objetivo'>
      </div>
    </div>

    <div class='col'>
      <div class='form-group'>
      </div>
      <div class='form-group'>
      <label>Edad:</label>
      <input type='text' id='txtEdad' name='txtEdad'class='form-control' placeholder='Edad' maxlength='2'>
      </div>
      <div class='form-group'>
      <label>Estatura:</label>
      <input type='text' id='txtEstatura' name='txtEstatura'class='form-control' placeholder='Estatura'>
      </div>
      <div class='form-group'>
      <label>Peso Inicial:</label>
      <input type='text' id='txtPeso' name='txtPeso'class='form-control' placeholder='Peso Inicial' maxlength='3'>
      </div>
      <div class='form-group'>
      <label>Telefono:</label>
      <input type='text' id='txtTelefono' name='txtTelefono'class='form-control' placeholder='Telefono' maxlength='10'>
      </div>
      <label >Sexo:</label>
     <div class='form-check'>
      <input class='form-check-input' type='radio' name='sexo' value='Masculino'>
      <label class='form-check-label' for='sexo'>Masculino</label>
      </div>
      <div class='form-check'>
      <input class='form-check-input' type='radio' name='sexo' value='Femenino'>
      <label class='form-check-label' for='sexo'>Femenino</label>
      </div>
</div>
    </div>

    </div><!--ROW-->
    <div class='container'>
    <div class='alert alert-danger' role='alert'>
      <h4 class='alert-heading'>Aviso, no se encuentra ningun cliente!</h4>
      <p>Por el momento no hay clientes registrados.</p>
    </div>
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
      <button type="button" name="btnAgregar" class="btn btn-secondary" onclick="javascript: grabar('clientes')">Agregar  <span><img src="../img/plus-symbol.png"></span></button>
      <a class="btn btn-secondary  float-left" href="../menu.html"><span><img src="../img/return.png"></span> Volver al menu</a>
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