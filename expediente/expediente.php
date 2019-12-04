<!DOCTYPE html>
<html>
<meta charset="utf-8">
<head>
	<title>Expediente</title>
	
	<link rel="stylesheet" href="../css/bootstrap.min.css">
  <script src="../js/jquery-3.4.1.min.js"></script>
  <script src="../js/bootstrap.min.js"></script>
  
  <link rel="icon" href="../img/muscle.png" type="image/png">
  <link rel="stylesheet" type="text/css" href="../css/estilos.css">
</head>
<body>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  		<a class="navbar-brand" href="../menu.html">
  		<img src="../img/pesas.png" width="65" height="50">
  		</a>
  		
	<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    	<div class="navbar-nav">
      	<a class="nav-item nav-link" href="../clientes/altacliente.php">Alta cliente</a>
      	<a class="nav-item nav-link" href="../crearplan.php">Crear plan</a>
      	<a class="nav-item nav-link active" href="../expediente/expediente.php">Expediente</a>
        <a class="nav-item nav-link" href="../entrenamiento/altaentrenamiento.php">Entrenamiento</a>
    	</div>
 	</div>
	</nav>
  <div class="img-container">
    <img src="../img/logo1.png">
  </div>
  <div class="card text-center">
    <div class="card-header">
      Historial
      <span><img src="../img/historial.png"></span>
    </div>
  </div>
  <form id='frmExpediente' action='./qryExpediente.php' method="POST">

<div class="container-fluid" id="divcont">
  <div class="d-flex justify-content-center align-items-center container">
   <div class="input-group">
    <input type="text" class="form-control" placeholder="Buscar...">
    <div class="input-group-append">
      <button class="btn btn-secondary" type="button"> <span> <img src="../img/lupa.png"></span>
      </button>
    </div>
  </div>
  </div>

  <div class='d-flex justify-content-center align-items-center container'> <!--DIV FORM-->
  
    <div class='col'> <!--DIV COL--> 
      <div class='form-group'>
        <input type='hidden'class='form-control'>
      </div>
      <div class='form-group'>
        <label>Nombre(s):</label>
        <input type='text' class='form-control' name='txtNombre' id='txtNombre'>
      </div>

      <div class='form-group'>
        <label>Peso neto:</label>
        <input type='text' class='form-control' name='txtpesoNeto' id='txtpesoNeto'>
      </div>

      <div class='form-group'>
        <label>Porcentaje grasa:</label>
        <input type='text' class='form-control' name='txtporGrasa' id='txtporGrasa'>
      </div>

      <div class='form-group'>
        <label>Porcentaje en masa:</label>
        <input type='text' class='form-control' name='txtporMasa' id='txtporMasa'>
      </div>
    </div> <!--DIV COL--> 
  </div> <!--DIV FORM-->

<div id="grafica">
  <div class="card text-center">
    <div class="card-header">
      Grafica 
      <span><img src="../img/grafica.png"></span>
    </div>
  </div>

  <div class='d-flex justify-content-center align-items-center container'>
    <button class="btn btn-secondary">Mostrar Grafica</button>
  </div>

</div>

</div>
<div class="card text-center">
  <div class="card-header">
  <a class="btn btn-secondary  float-center background letter" href="../menu.html"><span><img src='../img/return.png'></span> Volver al menu</a>
  </div>
</div>
<footer id="sticky-footer" class="py-4 bg-dark text-white-50">
    <div class="container text-center">
      <a>Attitude Nutrition Discipline Team</a>
    </div>
  </footer>

</body>
<script type='text/javascript'>

$(document).ready(function(){

      var height = $(window).height();

      $('#divcont').height(height);
});

</script>
</html>