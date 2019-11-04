<?php
  session_start();
  if (empty($_SESSION['usr']))
  {
    echo "Debe autentificarse!";
    exit();
  }
  include './bd/conexion.php';
  $qryC='SELECT concat(nombre_paciente," ",apellido_pat," ",apellido_mat) AS nombre_paciente,idPaciente FROM paciente order by nombre_paciente ASC';
  $tablaBD= mysqli_query($link,$qryC);
  $qryProte='SELECT nombre_nutri FROM proteinas order by nombre_nutri ASC';
  $qryCarbs='SELECT `nombre_carbs` FROM `carbos` ORDER BY nombre_carbs ASC';
  $qryGrasas='SELECT nombre_grasa FROM grasas ORDER by nombre_grasa ASC';
  $tablaProte = mysqli_query($link,$qryProte);
  $tablaCarbs = mysqli_query($link,$qryCarbs);
  $tablaGrasas= mysqli_query($link,$qryGrasas);
  ?>
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
	<title>Crear Plan</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

  <script type="text/javascript">
    $(document).ready(function() {
      function alerta(mensaje){
        alert(mensaje);
      }

      var metricas = function(id){
      alert(id);
      return  $.getJSON("datosplan.php",{"id": id});
      }
      $('#cmb_plan').on('change',function() {
        //alert(this.value);
        metricas(this.value)
        .done(function(response){
            if(response.success){
              //alert(response.data.mensaje);
              $('#estatura').val(response.data.estatura);
              //alert(response.data.estatura)
              $('#PesoRec').val(response.data.pesoRec);
              $('#PesoMax').val(response.data.pesoMax);
              $('#edad').val(response.data.edad);
              //alert(response.data.edad);
            }
          })
        .fail(function(jqXHR, textStatus, errorThrown){
            alert(textStatus); } );
      });
    });
  </script>

  <script type="text/javascript">
    $(document).ready(function() {
      function alerta(mensaje){
        alert(mensaje);
      }

      var metricas2 = function(id){
        alert(id);
      return  $.getJSON("datosDieta.php",{"id": id});
      }
      $('#cmb_prote').on('change',function() {
        //alert(this.value);
        metricas2(this.value)
        .done(function(response){
            if(response.success){
              $('#txtComida1').val(response.data.comidaJson);
              //alert(response.data.comidaJson);
            }
          })
        .fail(function(jqXHR, textStatus, errorThrown){
            alert(textStatus); } );
      });
    });
  </script>

	<style type="text/css">
  .navbar-dark .navbar-nav .nav-link
  {
    color: rgb(158,84,84);
  }
  .img-container 
  {
    text-align: center;
    background-color:#313534;
  }
  .card > .card-header 
  {
    background: #333436; 
    color: #F4F5F6; 
  }
  .background
  {
    background-color: #9e5454;
  }
  .letter
  {
    color: #ffffff;
  }
  .label
  {
    font-size: 15px;
    float: left;
  }label:after { content: " " }
	</style>

</head>
<body>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  		<a class="navbar-brand" href="./menu.html">
  			<img src="./img/pesas.png" width="65" height="50">
  		</a>
	<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
  	<div class="navbar-nav">
    	<a class="nav-item nav-link" href="./clientes/altacliente.php">Alta cliente</a>
    	<a class="nav-item nav-link active" href="./crearplan.php">Crear plan</a>
    	<a class="nav-item nav-link" href="./expediente/expediente.php">Expediente</a>
      <a class="nav-item nav-link" href="./entrenamiento/altaentrenamiento.php">Entrenamiento</a>
  	</div>
 	</div>
	</nav>
   <div class="img-container">
      <img src="./img/logo1.png">
    </div>
  <div class="card text-center">
    <div class="card-header">
      Crear plan
    </div>
  </div>
  <div class="container-fluid">
<form id='frmPlan' > 
    <div class="d-flex justify-content-center align-items-center container ">
      <div class="row">
        <div class="col my-2">
          <select id="cmb_plan" name="cmb_plan"  class="form-control">
            <option selected value="0">Elige un cliente</option>
          <?php  
                $estaturaJson = 0;
                $PesoMax = 0;
                $PesoRec = 0; 
                $edadJson =0;
                
              while ($registro = mysqli_fetch_array($tablaBD)) {
              echo "<option value='".$registro['idPaciente']."' >";  
              echo $registro['nombre_paciente'];
              echo"</option>";
              }
          ?>       
          </select>
        </div>
      </div>
    </div>
    <?php
        echo"
      <div class='my-2 d-flex justify-content-center'>

      <div class='input-group-text'>Peso Minimo: </div>      
      <input id='estaturashw' name='estaturashw' type='text' class='col-sm-2' disabled>

      <div class='input-group-text'>Peso Recomendado: </div>
      <input id='estaturashw2' name='estaturashw2'type='text' class='col-sm-2'  disabled>

      <div class='input-group-text'>Peso Maximo: </div>
      <input id='estaturashw3' name='estaturashw3'type='text' class='col-sm-2'  disabled>

      <input type='hidden' name='edad' id='edad' value='$edadJson'>
      <input type='hidden' name='estatura' id='estatura' value='$estaturaJson'>
      ";?>
    </div>
  <div class='my-3 d-flex justify-content-center'>
    <input type="hidden" name="" id="resultadoPliegues">
    <div class='input-group-text'>Biceptal: </div>      
    <input type="text" class="form-control" id="txtBiceptal" name="txtBiceptal" placeholder="Biceptal" autofocus required>

    <div class='input-group-text'>Triceptal: </div>
    <input type="text" class="form-control" id="txtTriceptal" name="txtTriceptal" placeholder="Triceptal" required>

    <div class='input-group-text'>Suprailico: </div>
    <input type="text" class="form-control" id="txtSupra" name="txtSupra"placeholder="Suprailiaco" required>

    <div class='input-group-text'>Sub Escapular: </div>
    <input type="text" class="form-control" id="txtsubEscapular" name="txtsubEscapular"placeholder="Sub Escapular" required>
      
  </div>
  
  <div class='my-3 d-flex justify-content-center'>

    <div class='input-group-text'>Pectoral: </div>      
    <input type="text" class="form-control" id="txtPectoral"name="txtPectoral" placeholder="Pectoral" required >

    <div class='input-group-text'>Abdominal: </div>   
    <input type="text" class="form-control" id="txtAbdominal" name="txtAbdominal"placeholder="Abdominal" required>

    <div class='input-group-text'>Cuadriciptal: </div> 
    <input type="text" class="form-control" id="txtCuadriciptal" name="txtCuadriciptal"placeholder="Cuadriciptal" required>

    <div class='input-group-text'>Peso Actual: </div>
    <input type="text" class="form-control" id="txtPesoAct" name="txtPesoAct"placeholder="Peso Actual" required>

  </div>

  <div class='my-3 d-flex justify-content-center'>

    <div class='input-group-text'>IMC: </div>      
    <input type="text" class="form-control" id="txtIMC" name="txtIMC"placeholder="IMC" disabled>

    <div class='input-group-text'>Masa Muscular: </div>
    <input type="text" class="form-control" id="txtmasaMus" name="txtmasaMus"placeholder="Masa Muscular" disabled>

    <div class='input-group-text'>Peso Grasa: </div>
    <input type="text" class="form-control" id="txtpesoGrasa" name="txtpesoGrasa"placeholder="Peso: Grasa" disabled>

    <div class='input-group-text'>Grasa Corporal: </div>
    <input type="text" class="form-control" id="txtgrasaCorp"name="txtgrasaCorp" placeholder="Grasa Corporal" disabled>
      
  </div>
  
  <div class='my-3 d-flex justify-content-center'>
    <div class='input-group-text'>Catch & McCarthy: </div>      
    <input type="text" class="col-sm-2" id="txtCatch" name="txtCatch" placeholder="Catch & McCarthy" disabled>

    <div class='input-group-text'>Woomersly: </div>
    <input type="text" class="col-sm-2" id="txtWoomer"name="txtWoomer" placeholder="Woomersly" disabled>

     <div class='input-group-text'>Ritmo Metabolico Basal: </div>
    <input type="text" class="col-sm-2" id="txtmetabolico" placeholder="Ritmo Metabolico Basal" disabled>
	</div>

  <div class="d-flex justify-content-center align-items-center container">
    <button type="button" name="btnCalculos" class="btn btn-secondary background letter" 
          onclick="suma();calgrasa();calcularPesos();calcularIMC();catchyMc();">Calcular Medidas</button>
    <button type="button" name="btnGuardar" class="btn btn-secondary background letter" 
        onclick="javascript: grabar('medidas');">Guardar datos</button>  
  </div>

  <div class="my-3">
  <div class="input-group mb-3">
  <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelect01">Proteinas</label>
  </div>
  <select class="custom-select" id="cmb_prote" name="cmb_prote">
    <option selected>Elige una opcion</option>
    <?php  
              while ($registro = mysqli_fetch_array($tablaProte)) {
              $nombre_nutri = $registro['nombre_nutri'];
              echo "<option value='$nombre_nutri'>$nombre_nutri</option>";
                    }
    ?>
  </select>
  <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelect01">Carbohidratos</label>
  </div>
      <select class="custom-select" id="cmb_carbs">
        <option selected>Elige una opcion</option>
                <?php  
                  while ($registro = mysqli_fetch_array($tablaCarbs)) {
                  $nombre_carbs = $registro['nombre_carbs'];
                  echo "<option value='$nombre_carbs'>$nombre_carbs</option>";
                  }
                ?>
      </select>
  <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelect01">Grasas</label>
  </div>
  <select class="custom-select" id="cmb_grasas">
    <option selected>Elige una opcion</option>
            <?php  
              while ($registro = mysqli_fetch_array($tablaGrasas)) {
              $nombre_grasa = $registro['nombre_grasa'];
              echo "<option value='$nombre_grasa'>$nombre_grasa</option>";
              }
            ?>
  </select>

  </div>
  </div>
  <div class="d-flex align-items-center justify-content-center">
    <button class="btn btn-secondary background letter">AHHHHH</button>
  </div>
  <div class="container">
       <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <a class="nav-link active" id="comida1" data-toggle="tab" href="#comida1" role="tab" aria-controls="comida1" aria-selected="true">Comida 1</a>
            <a class="nav-link" id="comida2" data-toggle="tab" href="#comida2" role="tab" aria-controls="comida2" aria-selected="false">Comida 2</a>
            <a class="nav-link" id="comida3" data-toggle="tab" href="#comida3" role="tab" aria-controls="comida3" aria-selected="false">Comida 3</a>
            <a class="nav-link" id="comida4" data-toggle="tab" href="#comida4" role="tab" aria-controls="comida4" aria-selected="false">Comida 4</a>
            <a class="nav-link" id="comida5" data-toggle="tab" href="#comida5" role="tab" aria-controls="comida5" aria-selected="false">Comida 5</a>
            <a class="nav-link" id="comida6" data-toggle="tab" href="#comida6" role="tab" aria-controls="comida6" aria-selected="false">Comida 6</a>
            <a class="nav-link" id="comida7" data-toggle="tab" href="#comida7" role="tab" aria-controls="comida7" aria-selected="false">Comida 7</a>
          </div>
          <div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
          <div class="tab-pane fade show active" id="comida1" role="tabpanel" aria-labelledby="comida1">
            <textarea class="form-control" id="txtComida1" rows="3"></textarea>
          </div>
          <div class="tab-pane fade" id="comida2" role="tabpanel" aria-labelledby="comida2">
            <textarea class="form-control" id="txtComida2" rows="3"></textarea>
          </div>
          <div class="tab-pane fade" id="comida3" role="tabpanel" aria-labelledby="comida3">
            <textarea class="form-control" id="txtComida3" rows="3"></textarea>
          </div>
          <div class="tab-pane fade" id="comida4" role="tabpanel" aria-labelledby="comida4">
            <textarea class="form-control" id="txtComida4" rows="3"></textarea>
          </div>
          <div class="tab-pane fade" id="comida5" role="tabpanel" aria-labelledby="comida5">
            <textarea class="form-control" id="txtComida5" rows="3"></textarea>
          </div>
          <div class="tab-pane fade" id="comida6" role="tabpanel" aria-labelledby="comida6">
            <textarea class="form-control" id="txtComida6" rows="3"></textarea>
          </div>
          <div class="tab-pane fade" id="comida7" role="tabpanel" aria-labelledby="comida7">
            <textarea class="form-control" id="txtComida7" rows="3"></textarea>
          </div>
        </div>
  </div>
    
  <div class="d-flex justify-content-center align-items-center container">
    <div class="col-sm-2 my-1">
      <input type="text" class="form-control" id="txtrequeridas" placeholder="Requeridas">
    </div>
    <div class="col-sm-2 my-2">
      <input type="text" class="form-control" id="txtconsumidas" placeholder="Consumidas">
    </div>
  </div>
  <div class="my-3 d-flex justify-content-center align-items-center">
    <button type="button" class="btn btn-secondary background letter">Generar PDF</button>
    <button type="button" class="btn btn-secondary background letter">Agregar entrenamiento</button>
    <button type="button" class="btn btn-secondary background letter">Agregar menu</button>
  </div>

  <div class="my-2">
  <div class="card text-center">
    <div class="card-header">
      Suplementos a manejar
    </div>
  </div>
    <div class="row">
      <div class="col">
      <textarea id="txtSuplementos" rows="3" class="form-control" placeholder="Ingrese suplementos aqui..."></textarea>
      </div>
    </div>
    
  </div>
  </div>
</form>
<footer class="py-4 bg-dark text-white-50 sticky-footer">
    <div class="container text-center">
      <small>Attitude Nutrition Discipline Team</small>
    </div>
    </footer>
</body>
<script type='text/javascript' src='./js/funciones.js'></script>
<script src='./js/calculos.js'></script>
</html>