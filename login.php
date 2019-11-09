<?php

?>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Jekyll v3.8.5">
    <title>Iniciar Sesion</title>

    <!-- Bootstrap core CSS -->
<link rel="stylesheet" href="css/bootstrap.min.css">
<script src="js/jquery-3.4.1.min.js"></script>
<script src="js/bootstrap.min.js"></script>

<link rel="icon" href="./img/muscle.png" type="image/png">

    <style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }

      .letter{
        color: #9e5454;
      }

      .btn-secondary{
        background-color: #9e5454;
      }
      
      div {background-color: #333436}
      h1{color: white}
      
    </style>
    <!-- Custom styles for this template -->
    <link href="css/signin.css" rel="stylesheet">
  </head>

<body class="text-center" background="./img/fondo.png">
  
  <div class="container" >
    <form action="qryautentica.php" method="post" class="form-signin" width="500"> 
    <img class="mb-4" src="./img/AndTeam.jpeg" alt="" width="200" height="200">
    <h1 class="h4 mb-4 font-weight-normal letter" >Bienvenido César Andres</h1>

    <div class="form-group">
    <label for="usuario" class="sr-only">Usuario</label>
    <input type="user-select" id="usuario" name="usuario" class="form-control" placeholder="Usuario" required autofocus>
    </div>

    <div class="form-group">
    <label for="contraseña" class="sr-only">Contraseña</label>
    <input type="password" id="password" name="password" class="form-control" 
    placeholder="Contraseña" required>
    </div>

    <div class="form-group">
    <button class="btn btn-lg btn-secondary btn-block" type="submit" name="btnAceptar">Entrar</button>
    <p class="mt-5 mb-3 text-muted">&copy;Attitude Nutrition Discipline Team </p>
     </div>

    </form> 
  
  </div>
</body>
</html>
