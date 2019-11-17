<!DOCTYPE html>
<html>
<meta charset="utf-8">
<head>
	<title>Entrenamiento</title>
	
  <link rel="stylesheet" href="../css/bootstrap.min.css">
  <script src="../js/jquery-3.4.1.min.js"></script>
  <script src="../js/bootstrap.min.js"></script>

  <link rel="icon" href="../img/muscle.png" type="image/png">
  <link rel="stylesheet" type="text/css" href="../css/estilos.css">
  <link href="https://www.flaticon.es/autores/freepik" title="Freepik">
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
      	<a class="nav-item nav-link" href="../expediente/expediente.php">Expediente</a>
        <a class="nav-item nav-link active" href="../entrenamiento/altaentrenamiento.php">Entrenamiento</a>
    	</div>
 	</div>
	</nav>
  <div class="img-container">
    <img src="../img/logo1.png">
  </div>
  <div class="card text-center">
    <div class="card-header">
      Entrenamiento Mode Beast
      <span><img src="../img/quemar.png"></span>
    </div>
  </div>
  <form id='frmEntrenamiento' action='./qryEntrenamiento.php' method="POST">

  <div class="container-fluid">

  <div class="container">
    <div class="form-row">
    <div class="col my-2">
      <label>Lunes: </label>
    </div>
    <div class="col my-2">
      <input type="text" class="form-control" placeholder="Musculo">
    </div>
    <div class="col-7 my-2">
      <textarea class="form-control" placeholder="Rutina" rows="2"></textarea>
    </div>
    </div>

    <div class="form-row">
    <div class="col my-2">
      <label>Martes: </label>
    </div>
    <div class="col my-2">
      <input type="text" class="form-control" placeholder="Musculo">
    </div>
    <div class="col-7 my-2">
       <textarea class="form-control" placeholder="Rutina" rows="3"></textarea>
    </div>
    </div>

    <div class="form-row">
    <div class="col my-2">
      <label>Miercoles: </label>
    </div>
    <div class="col my-2">
      <input type="text" class="form-control" placeholder="Musculo">
    </div>
    <div class="col-7 my-2">
       <textarea class="form-control" placeholder="Rutina" rows="3"></textarea>
    </div>
    </div>

    <div class="form-row">
    <div class="col my-2">
      <label>Jueves: </label>
    </div>
    <div class="col my-2">
      <input type="text" class="form-control" placeholder="Musculo">
    </div>
    <div class="col-7 my-2">
       <textarea class="form-control" placeholder="Rutina" rows="3"></textarea>
    </div>
    </div>

    <div class="form-row">
    <div class="col my-2">
      <label>Viernes: </label>
    </div>
    <div class="col my-2">
      <input type="text" class="form-control" placeholder="Musculo">
    </div>
    <div class="col-7 my-2">
       <textarea class="form-control" placeholder="Rutina" rows="3"></textarea>
    </div>
    </div>

    <div class="form-row">
    <div class="col my-2">
      <label>Sabado: </label>
    </div>
    <div class="col my-2">
      <input type="text" class="form-control" placeholder="Musculo">
    </div>
    <div class="col-7 my-2">
       <textarea class="form-control" placeholder="Rutina" rows="3"></textarea>
    </div>
    </div>

    <div class="form-row">
    <div class="col my-2">
      <label>Domingo: </label>
    </div>
    <div class="col my-2">
      <input type="text" class="form-control" placeholder="Musculo">
    </div>
    <div class="col-7 my-2">
       <textarea class="form-control" placeholder="Rutina" rows="3"></textarea>
    </div>
    </div>
  </div>


   </div> 
  </div>
  </div>


  </div>

  <div class="card text-center">
    <div class="card-header">
    <button type="button" class="btn btn-secondary  float-left background letter" href="../menu.html"><span><img src='../img/return.png'></span> Volver al menu</button>
    <button type="button" class="btn btn-secondary  float-center background letter" href="#">Guardar <span><img src='../img/save.png'></span></button>
    </div>
    </div>

<footer id="sticky-footer" class="py-4 bg-dark text-white-50">
    <div class="container text-center">
      <a>Attitude Nutrition Discipline Team</a>
    </div>
  </footer>

</body>
</html>