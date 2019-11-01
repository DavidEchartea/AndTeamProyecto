<!DOCTYPE html>
<html>
<meta charset="utf-8">
<head>
	<title>Expediente</title>
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
}
	</style>
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
    </div>
  </div>
  <form id='frmExpediente' action='./qryExpediente.php' method="POST">

  <div class="container-fluid">

  <div class="row">
    <div class="col">
    </div>
    <div class="col">
       <input type='text' id="txtBusqueda"class="form-control" name="txtBusqueda" placeholder="Cliente a buscar">
    </div>

    <div class="col">
    <button type="button" name="btnBuscar" class="btn btn-secondary background letter" onclick="javascript: grabar('cliente')"> Buscar </button>
    </div>
    </div>

  <div class="row">
    <div class="col">
      <div class="form-group">
        <input type='hidden' id="txtOpc"class="form-control" name="txtOpc" placeholder="id">
      </div>
      <div class="form-group">
        <input type="text" id="txtNombreExp" name="txtNombreExp"class="form-control" placeholder="Nombre">
      </div>
      <div class="form-group">
      <input type="text" id="pesoNet" name="pesoNet"class="form-control" placeholder="Peso neto">
      </div>
      <div class="form-group">
      <input type="text" id="porcentajeGrasa" name="porcentajeGrasa"class="form-control" placeholder="Porcentaje en grasa">
      </div>
      <div class="form-group">
      <input type="text" id="porcentajeMasa" name="porcentajeMasa"class="form-control" placeholder="Porcentaje en masa">
      </div>
    </div>

    <div class="col"> <!--columna de grfica-->
      <button> Muestra grafica</button>
    </div>

    </div> <!--ROW-->
  </div>
  <div class="card text-center">
    <div class="card-header">
    <button type="button" class="btn btn-secondary  float-center background letter" href="./menu.html">Volver al menu</button>
    </div>
    </div>
<footer id="sticky-footer" class="py-4 bg-dark text-white-50">
    <div class="container text-center">
      <small>Attitude Nutrition Discipline Team</small>
    </div>
  </footer>

</body>
</html>