<?php

  session_start();
  $idControl =  $_SESSION['idControl'];

   include './bd/conexion.php';
?>

<div class="d-flex align-items-center justify-content-center">
  
  <table class="table table-striped table-dark" id="tablaAjax">
  <thead>
    <tr>
      <th scope="col" class="thead">Nombre</th>
      <th scope="col" class="the"> Proteinas </th>
      <th scope="col" class="thead">Carbohidratos</th>
      <th scope="col" class="thead">Grasas</th>
    </tr>
  </thead>
  <?php
    
    $qry = "SELECT idNutri, nombre_nutri, proteinas, carbohidratos, grasas 
            FROM proteinas INNER JOIN dietatemp on idNutrimento = idNutri where idControl = '".$idControl."'";
    $result= mysqli_query($link,$qry);
    while ($ver = mysqli_fetch_row($result)) {
  ?>
  <tr>
    <td><?php echo $ver[1] ?></td>
    <td><?php echo $ver[2] ?></td>
    <td><?php echo $ver[3] ?></td>
    <td><?php echo $ver[4] ?></td>
  </tr>
  <?php 
    }
  
   ?>
</table>
</div>