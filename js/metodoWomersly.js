function Woomer(){
  var datosH = [
   ["4.8", "...", "...", "...", "10.5", "...", "...", "..."],       // fila 0
   ["8.1","12.2","12.2","14.6", "14.1", "17.0", "19.5", "21.4"],
   ["10.5","14.2","15.0","15.6"],
   ["12.9","16.2","17.7","18.6"],
   ["14.7","17.7","19.6","20.8"],
   ["16.4","19.4","21.4","23.4"],
   ["17.7","20.4","23.0","24.7"],
   ["19.0","21.5","24.6","26.5"],
   ["20.0","22.5","25.9","27.9"],
   ["21.2","23.5","27.1","29.2"],
   ["22.2","24.3","28.2","30.4"],
   ["23.1","25.1","29.3","31.6"],
   ["24.0","25.9","30.3","32.7"],
   ["24.8","26.6","31.2","33.8"],
   ["25.3","27.2","32.1","34.8"],
   ["26.2","27.8","33.0","35.8"],
   ["26.9","28.4","33.7","36.6"],
   ["27.6","29.0","34.4","37.4"],
   // Resto de las filas
];
var pliegues = document.getElementById('resultadoPliegues').value;
var edad = document.getElementById('edad').value;
var sexo = document.getElementById('sexo').value;

var fila = getFila(pliegues);
var columna = getColumna(sexo, edad);
if ((typeof fila === 'undefined')){
   alert("Se uso regla de 3 simple");
}else{
  alert("Se uso el arreglo")
  var grasa = datosH[fila][columna];
  document.getElementById('txtWoomer').value = grasa;
}
}
function getFila(pliegues) {
       if (pliegues % 5 == 0) {
         // Divisible por 5, uso la tabla.
         return (pliegues / 5) - 3;
       } else {
          // No divisible, utilizo la regla de 3 del cliente.
           reglaDeTres(pliegues);
       }
     }
function reglaDeTres(pliegues){

   if((pliegues > 15) && (pliegues < 20)){
      var grasamod = (pliegues * 4.8) / 15;
      document.getElementById('txtWoomer').value=grasamod.toFixed(2);}
   else if ((pliegues > 20) && (pliegues < 25))
   {
      var grasamod = (pliegues * 8.1) / 20;
      document.getElementById('txtWoomer').value=grasamod.toFixed(2);
   }
   else if((pliegues > 25) && (pliegues < 30))
   {
      var grasamod = (pliegues * 10.5) / 25;
      document.getElementById('txtgrasaCorp').value = grasamod.toFixed(2);
   }
   else if ((pliegues > 30) && (pliegues < 35))
   {
      var grasamod = (pliegues * 12.9) / 30;
      document.getElementById('txtgrasaCorp').value = grasamod.toFixed(2);
   }

   else if((pliegues > 35) && (pliegues < 40))
   {
      var gramod = (pliegues * 14.7) / 35;
      document.getElementById('txtgrasaCorp').value=grasamod.toFixed(2);
   }

   if ((pliegues > 40) && (pliegues < 45)) 
   {
      var grasamod = (pliegues * 16.4) / 40;
      document.getElementById('txtgrasaCorp').value=grasamod.toFixed(2);
   }

   else if ((pliegues > 45) && (pliegues < 50)) 
   {
      var grasamod = (pliegues * 17.7) / 45;
      document.getElementById('txtgrasaCorp').value=grasamod.toFixed(2);
   }

   else if ((pliegues > 50) && (pliegues < 55)) 
   {
      var grasamod = (pliegues * 19) /50;
      document.getElementById('txtgrasaCorp').value=grasamod.toFixed(2);
   }

   else if ((pliegues > 55) && (pliegues < 60)) 
   {
      var grasamod = (pliegues * 20.1) / 55;
      document.getElementById('txtgrasaCorp').value=grasamod.toFixed(2);
   }

   else if ((pliegues > 60) && (pliegues < 65)) 
   {
      var grasamod = (pliegues * 21.2) / 60;
      document.getElementById('txtgrasaCorp').value=grasamod.toFixed(2);
   }

   else if ((pliegues > 65) && (pliegues<70)) 
   {
      var grasamod= (pliegues * 22.2) / 65;
      document.getElementById('txtgrasaCorp').value=grasamod.toFixed(2);
   }

   else if ((pliegues>70) && (pliegues < 75))
   {
      var grasamod = (pliegues * 23.1) / 70;
      document.getElementById('txtgrasaCorp').value=grasamod.toFixed(2);
   }

   else if ((pliegues>75) && (pliegues<80)) 
   {
      var grasamod = (pliegues * 24) / 75;
      document.getElementById('txtgrasaCorp').value=grasamod.toFixed(2);
   }

    else if ((pliegues> 80) && (pliegues<85))
    {
      var grasamod = (pliegues * 24.8) / 80;
      document.getElementById('txtgrasaCorp').value=grasamod.toFixed(2);
    }

    else if ((pliegues> 85) && (pliegues<90))
    {
      var grasamod = (pliegues * 25.3) / 85;
      document.getElementById('txtgrasaCorp').value=grasamod.toFixed(2);
    }

    else if ((pliegues> 90) && (pliegues<95))
    {
      var grasamod = (pliegues * 26.2) / 90;
      document.getElementById('txtgrasaCorp').value=grasamod.toFixed(2);
    }

    else if((pliegues > 95) && (pliegues<100))
    {
      var grasamod = (pliegues * 26.9) / 95;
      document.getElementById('txtgrasaCorp').value=grasamod.toFixed(2);
    }

    else if ((pliegues>100) && (pliegues<105))
    {
      var grasamod = (pliegues * 27.6)/100;
      document.getElementById('txtgrasaCorp').value=grasamod.toFixed(2);
    }

    else if ((pliegues>105) && (pliegues<110))
    {
      var grasamod = (pliegues * 28.2)/105;
      document.getElementById('txtgrasaCorp').value=grasamod.toFixed(2);
    }

    else if ((pliegues>110) && (pliegues<115))
    {
      var grasamod = (pliegues * 28.8)/110;
      document.getElementById('txtgrasaCorp').value=grasamod.toFixed(2);
    }


}

function getColumna(sexo, edad) {
  if (sexo == 'Masculino') {
     return getColumnaMasculino(edad);
  } else {
     return getColumnaFemenino(edad);
  }
}

function getColumnaMasculino(edad) {
   if (edad >= 50) {
      return 3;
   } else if (edad == 49) {
      return 2;
   } else if ((edad >= 30) && (edad <= 39)) {
      return 1;
   } else if ((edad >= 17) && (edad <= 29)) {
      return 0;
   } else {
      alert("Edad no está en la tabla");
   }
}

function getColumnaFemenino(edad) {
   if (edad >= 50) {
      return 7;
   } else if (edad >= 44 && edad <= 49) {
      return 6;
   } else if (edad >= 30 && edad <= 39) {
      return 5;
   } else if (edad >= 16 && edad <= 29) {
      return 4;
   } else {
      alert("Edad no está en la tabla");
   }
}

