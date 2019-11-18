function Woomer(){
  var datosH = [
   ["4.8", "...", "...", "...",  "10.5", "...", "...", "..."], // fila 15 pliegues
   ["8.1", "12.2","12.2","14.6", "14.1", "17.0", "19.8", "21.4"], // fila 20 pliegues   
   ["10.5","14.2","15.0","15.6", "16.8", "19.4", "22.2", "24.0"], // fila 25 pliegues
   ["12.9","16.2","17.7","18.6", "19.3", "21.8", "24.5", "26.6"], // fila 30 pliegues
   ["14.7","17.7","19.6","20.8", "21.5", "23.7", "26.4", "28.5"], // fila 35 pliegues
   ["16.4","19.4","21.4","23.4", "23.4", "25.5", "28.2", "30.3"], // fila 40 pliegues
   ["17.7","20.4","23.0","24.7", "25.0", "26.9", "29.6", "31.9"], // fila 45 pliegues
   ["19.0","21.5","24.6","26.5", "26.5", "28.2", "31.0", "33.4"], // fila 50 pliegues
   ["20.0","22.5","25.9","27.9", "27.8", "29.4", "32.1", "34.6"], // fila 55 pliegues
   ["21.2","23.5","27.1","29.2", "29.1", "30.6", "33.2", "35.7"], // fila 60 pliegues
   ["22.2","24.3","28.2","30.4", "30.3", "31.6", "34.1", "36.7"], // fila 65 pliegues
   ["23.1","25.1","29.3","31.6", "31.2", "32.5", "35.0", "37.7"], // fila 70 pliegues
   ["24.0","25.9","30.3","32.7", "32.2", "33.4", "35.9", "38.7"], // fila 75 pliegues
   ["24.8","26.6","31.2","33.8", "33.1", "34.3", "36.7", "39.6"], // fila 80 pliegues
   ["25.3","27.2","32.1","34.8", "34.0", "35.1", "37.5", "40.4"], // fila 85 pliegues
   ["26.2","27.8","33.0","35.8", "34.8", "35.8", "38.3", "41.2"], // fila 90 pliegues
   ["26.9","28.4","33.7","36.6", "35.6", "36.5", "39.0", "41.9"], // fila 95 pliegues
   ["27.6","29.0","34.4","37.4", "36.4", "37.2", "39.7", "42.6"], // fila 100 pliegues
   ["28.2","29.6","35.1","38.3", "37.1", "37.9", "40.4", "43.3"], // fila 105 pliegues
   ["28.8","30.1","35.8","39.0", "37.8", "38.6", "41.0", "43.9"], // fila 110 pliegues
   ["29.4","30.6","36.4","39.7", "38.4", "39.1", "41.5", "44.5"], // fila 115 pliegues
   ["30.0","31.1","37.0","40.4", "39.0", "39.6", "42.0", "45.1"], // fila 120 pliegues
   ["30.5","31.5","37.6","41.1", "39.6", "40.1", "42.5", "45.7"], // fila 125 pliegues
   ["31.0","31.9","38.2","41.8", "40.2", "40.6", "43.0", "46.2"], // fila 130 pliegues
   ["31.5","32.3","38.7","42.4", "40.8", "41.1", "43.5", "46.7"], // fila 135 pliegues
   ["32.0","32.7","39.2","43.0", "41.3", "41.6", "44.0", "47.2"], // fila 140 pliegues
   ["32.5","33.1","39.7","43.6", "41.8", "42.1", "44.0", "47.7"], // fila 145 pliegues
   ["32.9","33.5","40.2","44.1", "42.3", "42.6", "44.5", "48.2"], // fila 150 pliegues
   ["33.3","33.9","40.7","44.6", "42.8", "43.1", "45.5", "48.7"], // fila 155 pliegues
];
var pliegues = document.getElementById('resultadoPliegues').value;
var edad = document.getElementById('edad').value;
var sexo = document.getElementById('sexo').value;

var fila = getFila(pliegues,edad,sexo);
var columna = getColumna(sexo, edad);
if ((typeof fila === 'undefined')){
   //alert("Se uso regla de 3 simple");
}else{
  //alert("Se uso el arreglo")
  var grasa = datosH[fila][columna];
  document.getElementById('txtWoomer').value = grasa;
}
}
function getFila(pliegues,edad,sexo) {
       if (pliegues % 5 == 0) {
         // Divisible por 5, uso la tabla.
         return (pliegues / 5) - 3;
       } else {
          // No divisible, utilizo la regla de 3 del cliente.
           reglaDeTres(pliegues,edad,sexo);
       }
     }
function reglaDeTres(pliegues,edad,sexo)
{
  if (sexo == 'Masculino')
  {
    if ((edad > 16) && (edad < 30))
    {

     if((pliegues > 15) && (pliegues < 20)){
        var grasamod = (pliegues * 4.8) / 15;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
     else if ((pliegues > 20) && (pliegues < 25))
     {
        var grasamod = (pliegues * 8.1) / 20;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }
     else if((pliegues > 25) && (pliegues < 30))
     {
        var grasamod = (pliegues * 10.5) / 25;
        document.getElementById('txtWoomer').value = grasamod.toFixed(2);
     }
     else if ((pliegues > 30) && (pliegues < 35))
     {
        var grasamod = (pliegues * 12.9) / 30;
        document.getElementById('txtWoomer').value = grasamod.toFixed(2);
     }

     else if((pliegues > 35) && (pliegues < 40))
     {
        var gramod = (pliegues * 14.7) / 35;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

     if ((pliegues > 40) && (pliegues < 45)) 
     {
        var grasamod = (pliegues * 16.4) / 40;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

     else if ((pliegues > 45) && (pliegues < 50)) 
     {
        var grasamod = (pliegues * 17.7) / 45;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

     else if ((pliegues > 50) && (pliegues < 55)) 
     {
        var grasamod = (pliegues * 19.0) /50;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

     else if ((pliegues > 55) && (pliegues < 60)) 
     {
        var grasamod = (pliegues * 20.1) / 55;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

     else if ((pliegues > 60) && (pliegues < 65)) 
     {
        var grasamod = (pliegues * 21.2) / 60;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

     else if ((pliegues > 65) && (pliegues<70)) 
     {
        var grasamod= (pliegues * 22.2) / 65;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

     else if ((pliegues>70) && (pliegues < 75))
     {
        var grasamod = (pliegues * 23.1) / 70;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

     else if ((pliegues>75) && (pliegues<80)) 
     {
        var grasamod = (pliegues * 24) / 75;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

      else if ((pliegues> 80) && (pliegues<85))
      {
        var grasamod = (pliegues * 24.8) / 80;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }

      else if ((pliegues> 85) && (pliegues<90))
      {
        var grasamod = (pliegues * 25.3) / 85;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }

      else if ((pliegues> 90) && (pliegues<95))
      {
        var grasamod = (pliegues * 26.2) / 90;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }

      else if((pliegues > 95) && (pliegues<100))
      {
        var grasamod = (pliegues * 26.9) / 95;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }

      else if ((pliegues>100) && (pliegues<105))
      {
        var grasamod = (pliegues * 27.6)/100;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }

      else if ((pliegues>105) && (pliegues<110))
      {
        var grasamod = (pliegues * 28.2)/105;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }

      else if ((pliegues>110) && (pliegues<115))
      {
        var grasamod = (pliegues * 28.8)/110;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
      else if ((pliegues>115) && (pliegues<120))
      {
        var grasamod = (pliegues * 29.4)/115;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
      else if ((pliegues>120) && (pliegues<125))
      {
        var grasamod = (pliegues * 30.0)/120;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
      else if ((pliegues>125) && (pliegues<130))
      {
        var grasamod = (pliegues * 30.5)/125;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
      else if ((pliegues>130) && (pliegues<135))
      {
        var grasamod = (pliegues * 31.0)/130;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
      else if ((pliegues>135) && (pliegues<140))
      {
        var grasamod = (pliegues * 31.5)/135;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
      else if ((pliegues>140) && (pliegues<145))
      {
        var grasamod = (pliegues * 32.0)/140;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
      else if ((pliegues>145) && (pliegues<150))
      {
        var grasamod = (pliegues * 32.5)/145;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
      else if ((pliegues>150) && (pliegues<155))
      {
        var grasamod = (pliegues * 32.9)/150;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
      else if ((pliegues>155) && (pliegues<160))
      {
        var grasamod = (pliegues * 33.3)/155;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
    }
    else if((edad > 29) && (edad < 40))
    {
      if ((pliegues > 20) && (pliegues < 25))
     {
        var grasamod = (pliegues * 12.2) / 20;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }
     else if((pliegues > 25) && (pliegues < 30))
     {
        var grasamod = (pliegues * 14.2) / 25;
        document.getElementById('txtWoomer').value = grasamod.toFixed(2);
     }
     else if ((pliegues > 30) && (pliegues < 35))
     {
        var grasamod = (pliegues * 16.2) / 30;
        document.getElementById('txtWoomer').value = grasamod.toFixed(2);
     }

     else if((pliegues > 35) && (pliegues < 40))
     {
        var gramod = (pliegues * 17.7) / 35;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

     if ((pliegues > 40) && (pliegues < 45)) 
     {
        var grasamod = (pliegues * 19.4) / 40;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

     else if ((pliegues > 45) && (pliegues < 50)) 
     {
        var grasamod = (pliegues * 20.4) / 45;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

     else if ((pliegues > 50) && (pliegues < 55)) 
     {
        var grasamod = (pliegues * 21.5) /50;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

     else if ((pliegues > 55) && (pliegues < 60)) 
     {
        var grasamod = (pliegues * 22.5) / 55;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

     else if ((pliegues > 60) && (pliegues < 65)) 
     {
        var grasamod = (pliegues * 23.5) / 60;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

     else if ((pliegues > 65) && (pliegues<70)) 
     {
        var grasamod= (pliegues * 24.3) / 65;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

     else if ((pliegues>70) && (pliegues < 75))
     {
        var grasamod = (pliegues * 25.1) / 70;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

     else if ((pliegues>75) && (pliegues<80)) 
     {
        var grasamod = (pliegues * 25.9) / 75;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

      else if ((pliegues> 80) && (pliegues<85))
      {
        var grasamod = (pliegues * 26.6) / 80;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }

      else if ((pliegues> 85) && (pliegues<90))
      {
        var grasamod = (pliegues * 27.2) / 85;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }

      else if ((pliegues> 90) && (pliegues<95))
      {
        var grasamod = (pliegues * 27.8) / 90;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }

      else if((pliegues > 95) && (pliegues<100))
      {
        var grasamod = (pliegues * 28.4) / 95;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }

      else if ((pliegues>100) && (pliegues<105))
      {
        var grasamod = (pliegues * 29.0)/100;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }

      else if ((pliegues>105) && (pliegues<110))
      {
        var grasamod = (pliegues * 29.6)/105;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }

      else if ((pliegues>110) && (pliegues<115))
      {
        var grasamod = (pliegues * 30.1)/110;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
      else if ((pliegues>115) && (pliegues<120))
      {
        var grasamod = (pliegues * 30.6)/115;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
      else if ((pliegues>120) && (pliegues<125))
      {
        var grasamod = (pliegues * 31.1)/120;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
      else if ((pliegues>125) && (pliegues<130))
      {
        var grasamod = (pliegues * 31.5)/125;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
      else if ((pliegues>130) && (pliegues<135))
      {
        var grasamod = (pliegues * 31.9)/130;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
      else if ((pliegues>135) && (pliegues<140))
      {
        var grasamod = (pliegues * 32.3)/135;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
      else if ((pliegues>140) && (pliegues<145))
      {
        var grasamod = (pliegues * 32.7)/140;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
      else if ((pliegues>145) && (pliegues<150))
      {
        var grasamod = (pliegues * 33.1)/145;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
      else if ((pliegues>150) && (pliegues<155))
      {
        var grasamod = (pliegues * 33.5)/150;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
      else if ((pliegues>155) && (pliegues<160))
      {
        var grasamod = (pliegues * 33.9)/155;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
    }
    else if((edad > 39) && (edad < 50))
    {
      if ((pliegues > 20) && (pliegues < 25))
     {
        var grasamod = (pliegues * 12.2) / 20;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }
     else if((pliegues > 25) && (pliegues < 30))
     {
        var grasamod = (pliegues * 15.0) / 25;
        document.getElementById('txtWoomer').value = grasamod.toFixed(2);
     }
     else if ((pliegues > 30) && (pliegues < 35))
     {
        var grasamod = (pliegues * 17.7) / 30;
        document.getElementById('txtWoomer').value = grasamod.toFixed(2);
     }

     else if((pliegues > 35) && (pliegues < 40))
     {
        var gramod = (pliegues * 19.6) / 35;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    if ((pliegues > 40) && (pliegues < 45)) 
     {
        var grasamod = (pliegues * 21.4) / 40;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues > 45) && (pliegues < 50)) 
     {
        var grasamod = (pliegues * 23.0) / 45;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues > 50) && (pliegues < 55)) 
     {
        var grasamod = (pliegues * 24.6) /50;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues > 55) && (pliegues < 60)) 
     {
        var grasamod = (pliegues * 25.9) / 55;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues > 60) && (pliegues < 65)) 
     {
        var grasamod = (pliegues * 27.1) / 60;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues > 65) && (pliegues<70)) 
     {
        var grasamod= (pliegues * 28.2) / 65;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues>70) && (pliegues < 75))
     {
        var grasamod = (pliegues * 29.3) / 70;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues>75) && (pliegues<80)) 
     {
        var grasamod = (pliegues * 30.3) / 75;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues> 80) && (pliegues<85))
      {
        var grasamod = (pliegues * 31.2) / 80;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }

    else if ((pliegues> 85) && (pliegues<90))
    {
      var grasamod = (pliegues * 32.1) / 85;
      document.getElementById('txtWoomer').value=grasamod.toFixed(2);
    }

    else if ((pliegues> 90) && (pliegues<95))
    {
      var grasamod = (pliegues * 33.0) / 90;
      document.getElementById('txtWoomer').value=grasamod.toFixed(2);
    }

    else if((pliegues > 95) && (pliegues<100))
    {
      var grasamod = (pliegues * 33.7) / 95;
      document.getElementById('txtWoomer').value=grasamod.toFixed(2);
    }

    else if ((pliegues>100) && (pliegues<105))
    {
      var grasamod = (pliegues * 34.4)/100;
      document.getElementById('txtWoomer').value=grasamod.toFixed(2);
    }

    else if ((pliegues>105) && (pliegues<110))
    {
      var grasamod = (pliegues * 35.1)/105;
      document.getElementById('txtWoomer').value=grasamod.toFixed(2);
    }

    else if ((pliegues>110) && (pliegues<115))
    {
      var grasamod = (pliegues * 35.8)/110;
      document.getElementById('txtWoomer').value=grasamod.toFixed(2);
    }
    else if ((pliegues>115) && (pliegues<120))
    {
      var grasamod = (pliegues * 36.4)/115;
      document.getElementById('txtWoomer').value=grasamod.toFixed(2);
    }
    else if ((pliegues>120) && (pliegues<125))
    {
      var grasamod = (pliegues * 37.0)/120;
      document.getElementById('txtWoomer').value=grasamod.toFixed(2);
    }
    else if ((pliegues>125) && (pliegues<130))
    {
      var grasamod = (pliegues * 37.6)/125;
      document.getElementById('txtWoomer').value=grasamod.toFixed(2);
    }
    else if ((pliegues>130) && (pliegues<135))
    {
      var grasamod = (pliegues * 38.2)/130;
      document.getElementById('txtWoomer').value=grasamod.toFixed(2);
    }
    else if ((pliegues>135) && (pliegues<140))
    {
      var grasamod = (pliegues * 38.7)/135;
      document.getElementById('txtWoomer').value=grasamod.toFixed(2);
    }
    else if ((pliegues>140) && (pliegues<145))
    {
      var grasamod = (pliegues * 39.2)/140;
      document.getElementById('txtWoomer').value=grasamod.toFixed(2);
    }
    else if ((pliegues>145) && (pliegues<150))
    {
      var grasamod = (pliegues * 39.7)/145;
      document.getElementById('txtWoomer').value=grasamod.toFixed(2);
    }
    else if ((pliegues>150) && (pliegues<155))
    {
      var grasamod = (pliegues * 40.2)/150;
      document.getElementById('txtWoomer').value=grasamod.toFixed(2);
    }
    else if ((pliegues>155) && (pliegues<160))
    {
      var grasamod = (pliegues * 40.7)/155;
      document.getElementById('txtWoomer').value=grasamod.toFixed(2);
    }
  }
    else if(edad > 49)
    {
      if ((pliegues > 20) && (pliegues < 25))
     {
        var grasamod = (pliegues * 14.6) / 20;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }
     else if((pliegues > 25) && (pliegues < 30))
     {
        var grasamod = (pliegues * 15.6) / 25;
        document.getElementById('txtWoomer').value = grasamod.toFixed(2);
     }
     else if ((pliegues > 30) && (pliegues < 35))
     {
        var grasamod = (pliegues * 18.6) / 30;
        document.getElementById('txtWoomer').value = grasamod.toFixed(2);
     }

     else if((pliegues > 35) && (pliegues < 40))
     {
        var gramod = (pliegues * 20.8) / 35;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    if ((pliegues > 40) && (pliegues < 45)) 
     {
        var grasamod = (pliegues * 23.4) / 40;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues > 45) && (pliegues < 50)) 
     {
        var grasamod = (pliegues * 24.7) / 45;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues > 50) && (pliegues < 55)) 
     {
        var grasamod = (pliegues * 26.5) /50;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues > 55) && (pliegues < 60)) 
     {
        var grasamod = (pliegues * 27.9) / 55;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues > 60) && (pliegues < 65)) 
     {
        var grasamod = (pliegues * 29.2) / 60;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues > 65) && (pliegues<70)) 
     {
        var grasamod= (pliegues * 30.4) / 65;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues>70) && (pliegues < 75))
     {
        var grasamod = (pliegues * 31.6) / 70;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues>75) && (pliegues<80)) 
     {
        var grasamod = (pliegues * 32.7) / 75;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues> 80) && (pliegues<85))
      {
        var grasamod = (pliegues * 33.8) / 80;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }

    else if ((pliegues> 85) && (pliegues<90))
    {
      var grasamod = (pliegues * 34.8) / 85;
      document.getElementById('txtWoomer').value=grasamod.toFixed(2);
    }

    else if ((pliegues> 90) && (pliegues<95))
    {
      var grasamod = (pliegues * 35.8) / 90;
      document.getElementById('txtWoomer').value=grasamod.toFixed(2);
    }

    else if((pliegues > 95) && (pliegues<100))
    {
      var grasamod = (pliegues * 36.6) / 95;
      document.getElementById('txtWoomer').value=grasamod.toFixed(2);
    }

    else if ((pliegues>100) && (pliegues<105))
    {
      var grasamod = (pliegues * 37.4)/100;
      document.getElementById('txtWoomer').value=grasamod.toFixed(2);
    }

    else if ((pliegues>105) && (pliegues<110))
    {
      var grasamod = (pliegues * 38.3)/105;
      document.getElementById('txtWoomer').value=grasamod.toFixed(2);
    }

    else if ((pliegues>110) && (pliegues<115))
    {
      var grasamod = (pliegues * 39.0)/110;
      document.getElementById('txtWoomer').value=grasamod.toFixed(2);
    }
    else if ((pliegues>115) && (pliegues<120))
    {
      var grasamod = (pliegues * 39.7)/115;
      document.getElementById('txtWoomer').value=grasamod.toFixed(2);
    }
    else if ((pliegues>120) && (pliegues<125))
    {
      var grasamod = (pliegues * 40.4)/120;
      document.getElementById('txtWoomer').value=grasamod.toFixed(2);
    }
    else if ((pliegues>125) && (pliegues<130))
    {
      var grasamod = (pliegues * 41.1)/125;
      document.getElementById('txtWoomer').value=grasamod.toFixed(2);
    }
    else if ((pliegues>130) && (pliegues<135))
    {
      var grasamod = (pliegues * 41.8)/130;
      document.getElementById('txtWoomer').value=grasamod.toFixed(2);
    }
    else if ((pliegues>135) && (pliegues<140))
    {
      var grasamod = (pliegues * 42.4)/135;
      document.getElementById('txtWoomer').value=grasamod.toFixed(2);
    }
    else if ((pliegues>140) && (pliegues<145))
    {
      var grasamod = (pliegues * 43.0)/140;
      document.getElementById('txtWoomer').value=grasamod.toFixed(2);
    }
    else if ((pliegues>145) && (pliegues<150))
    {
      var grasamod = (pliegues * 43.6)/145;
      document.getElementById('txtWoomer').value=grasamod.toFixed(2);
    }
    else if ((pliegues>150) && (pliegues<155))
    {
      var grasamod = (pliegues * 44.1)/150;
      document.getElementById('txtWoomer').value=grasamod.toFixed(2);
    }
    else if ((pliegues>155) && (pliegues<160))
    {
      var grasamod = (pliegues * 44.6)/155;
      document.getElementById('txtWoomer').value=grasamod.toFixed(2);
    }
  }

  }else // sexo == femenino
  {
    if((edad > 15) && (edad < 30))
    {
      if ((pliegues > 15) && (pliegues < 20))
     {
        var grasamod = (pliegues * 10.5) / 15;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }
      if ((pliegues > 20) && (pliegues < 25))
     {
        var grasamod = (pliegues * 14.1) / 20;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }
     else if((pliegues > 25) && (pliegues < 30))
     {
        var grasamod = (pliegues * 16.8) / 25;
        document.getElementById('txtWoomer').value = grasamod.toFixed(2);
     }
     else if ((pliegues > 30) && (pliegues < 35))
     {
        var grasamod = (pliegues * 19.3) / 30;
        document.getElementById('txtWoomer').value = grasamod.toFixed(2);
     }

     else if((pliegues > 35) && (pliegues < 40))
     {
        var gramod = (pliegues * 21.5) / 35;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    if ((pliegues > 40) && (pliegues < 45)) 
     {
        var grasamod = (pliegues * 23.4) / 40;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues > 45) && (pliegues < 50)) 
     {
        var grasamod = (pliegues * 25.0) / 45;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues > 50) && (pliegues < 55)) 
     {
        var grasamod = (pliegues * 26.5) /50;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues > 55) && (pliegues < 60)) 
     {
        var grasamod = (pliegues * 27.8) / 55;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues > 60) && (pliegues < 65)) 
     {
        var grasamod = (pliegues * 29.1) / 60;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues > 65) && (pliegues<70)) 
     {
        var grasamod= (pliegues * 30.3) / 65;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues>70) && (pliegues < 75))
     {
        var grasamod = (pliegues * 31.2) / 70;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues>75) && (pliegues<80)) 
     {
        var grasamod = (pliegues * 32.2) / 75;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues> 80) && (pliegues<85))
      {
        var grasamod = (pliegues * 33.1) / 80;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }

    else if ((pliegues> 85) && (pliegues<90))
      {
        var grasamod = (pliegues * 34.0) / 85;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }

    else if ((pliegues> 90) && (pliegues<95))
      {
        var grasamod = (pliegues * 34.8) / 90;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }

    else if((pliegues > 95) && (pliegues<100))
      {
        var grasamod = (pliegues * 35.6) / 95;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }

    else if ((pliegues>100) && (pliegues<105))
      {
        var grasamod = (pliegues * 36.4)/100;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }

    else if ((pliegues>105) && (pliegues<110))
      {
        var grasamod = (pliegues * 37.1)/105;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }

    else if ((pliegues>110) && (pliegues<115))
      {
        var grasamod = (pliegues * 37.8)/110;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
    else if ((pliegues>115) && (pliegues<120))
      {
        var grasamod = (pliegues * 38.4)/115;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
    else if ((pliegues>120) && (pliegues<125))
      {
        var grasamod = (pliegues * 39.0)/120;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
    else if ((pliegues>125) && (pliegues<130))
      {
        var grasamod = (pliegues * 39.6)/125;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
    else if ((pliegues>130) && (pliegues<135))
      {
        var grasamod = (pliegues * 40.2)/130;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
    else if ((pliegues>135) && (pliegues<140))
      {
        var grasamod = (pliegues * 40.8)/135;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
    else if ((pliegues>140) && (pliegues<145))
      {
        var grasamod = (pliegues * 41.3)/140;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
    else if ((pliegues>145) && (pliegues<150))
      {
        var grasamod = (pliegues * 41.8)/145;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
    else if ((pliegues>150) && (pliegues<155))
      {
        var grasamod = (pliegues * 42.3)/150;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
    else if ((pliegues>155) && (pliegues<160))
      {
        var grasamod = (pliegues * 42.8)/155;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
    }
    else if((edad > 29) && (edad < 40))
    {
      if ((pliegues > 20) && (pliegues < 25))
     {
        var grasamod = (pliegues * 17.0) / 20;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }
     else if((pliegues > 25) && (pliegues < 30))
     {
        var grasamod = (pliegues * 19.4) / 25;
        document.getElementById('txtWoomer').value = grasamod.toFixed(2);
     }
     else if ((pliegues > 30) && (pliegues < 35))
     {
        var grasamod = (pliegues * 21.8) / 30;
        document.getElementById('txtWoomer').value = grasamod.toFixed(2);
     }

     else if((pliegues > 35) && (pliegues < 40))
     {
        var gramod = (pliegues * 23.7) / 35;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    if ((pliegues > 40) && (pliegues < 45)) 
     {
        var grasamod = (pliegues * 25.5) / 40;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues > 45) && (pliegues < 50)) 
     {
        var grasamod = (pliegues * 26.9) / 45;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues > 50) && (pliegues < 55)) 
     {
        var grasamod = (pliegues * 28.2) /50;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues > 55) && (pliegues < 60)) 
     {
        var grasamod = (pliegues * 29.4) / 55;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues > 60) && (pliegues < 65)) 
     {
        var grasamod = (pliegues * 30.6) / 60;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues > 65) && (pliegues<70)) 
     {
        var grasamod= (pliegues * 31.6) / 65;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues>70) && (pliegues < 75))
     {
        var grasamod = (pliegues * 32.5) / 70;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues>75) && (pliegues<80)) 
     {
        var grasamod = (pliegues * 33.4) / 75;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues> 80) && (pliegues<85))
      {
        var grasamod = (pliegues * 34.3) / 80;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }

    else if ((pliegues> 85) && (pliegues<90))
      {
        var grasamod = (pliegues * 35.1) / 85;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }

    else if ((pliegues> 90) && (pliegues<95))
      {
        var grasamod = (pliegues * 35.8) / 90;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }

    else if((pliegues > 95) && (pliegues<100))
      {
        var grasamod = (pliegues * 36.5) / 95;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }

    else if ((pliegues>100) && (pliegues<105))
      {
        var grasamod = (pliegues * 37.2)/100;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }

    else if ((pliegues>105) && (pliegues<110))
      {
        var grasamod = (pliegues * 37.9)/105;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }

    else if ((pliegues>110) && (pliegues<115))
      {
        var grasamod = (pliegues * 38.6)/110;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
    else if ((pliegues>115) && (pliegues<120))
      {
        var grasamod = (pliegues * 39.1)/115;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
    else if ((pliegues>120) && (pliegues<125))
      {
        var grasamod = (pliegues * 39.6)/120;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
    else if ((pliegues>125) && (pliegues<130))
      {
        var grasamod = (pliegues * 40.1)/125;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
    else if ((pliegues>130) && (pliegues<135))
      {
        var grasamod = (pliegues * 40.6)/130;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
    else if ((pliegues>135) && (pliegues<140))
      {
        var grasamod = (pliegues * 41.1)/135;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
    else if ((pliegues>140) && (pliegues<145))
      {
        var grasamod = (pliegues * 41.6)/140;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
    else if ((pliegues>145) && (pliegues<150))
      {
        var grasamod = (pliegues * 42.1)/145;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
    else if ((pliegues>150) && (pliegues<155))
      {
        var grasamod = (pliegues * 42.6)/150;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
    else if ((pliegues>155) && (pliegues<160))
      {
        var grasamod = (pliegues * 43.1)/155;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
    }
    else if((edad > 39) && (edad < 50))
    {
      if ((pliegues > 20) && (pliegues < 25))
     {
        var grasamod = (pliegues * 19.8) / 20;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }
     else if((pliegues > 25) && (pliegues < 30))
     {
        var grasamod = (pliegues * 22.2) / 25;
        document.getElementById('txtWoomer').value = grasamod.toFixed(2);
     }
     else if ((pliegues > 30) && (pliegues < 35))
     {
        var grasamod = (pliegues * 24.5) / 30;
        document.getElementById('txtWoomer').value = grasamod.toFixed(2);
     }

     else if((pliegues > 35) && (pliegues < 40))
     {
        var gramod = (pliegues * 26.4) / 35;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    if ((pliegues > 40) && (pliegues < 45)) 
     {
        var grasamod = (pliegues * 28.2) / 40;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues > 45) && (pliegues < 50)) 
     {
        var grasamod = (pliegues * 29.6) / 45;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues > 50) && (pliegues < 55)) 
     {
        var grasamod = (pliegues * 31.0) /50;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues > 55) && (pliegues < 60)) 
     {
        var grasamod = (pliegues * 32.1) / 55;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues > 60) && (pliegues < 65)) 
     {
        var grasamod = (pliegues * 33.2) / 60;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues > 65) && (pliegues<70)) 
     {
        var grasamod= (pliegues * 34.1) / 65;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues>70) && (pliegues < 75))
     {
        var grasamod = (pliegues * 35.0) / 70;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues>75) && (pliegues<80)) 
     {
        var grasamod = (pliegues * 35.9) / 75;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues> 80) && (pliegues<85))
      {
        var grasamod = (pliegues * 36.7) / 80;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }

    else if ((pliegues> 85) && (pliegues<90))
      {
        var grasamod = (pliegues * 37.5) / 85;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }

    else if ((pliegues> 90) && (pliegues<95))
      {
        var grasamod = (pliegues * 38.3) / 90;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }

    else if((pliegues > 95) && (pliegues<100))
      {
        var grasamod = (pliegues * 39.0) / 95;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }

    else if ((pliegues>100) && (pliegues<105))
      {
        var grasamod = (pliegues * 39.7)/100;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }

    else if ((pliegues>105) && (pliegues<110))
      {
        var grasamod = (pliegues * 40.4)/105;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }

    else if ((pliegues>110) && (pliegues<115))
      {
        var grasamod = (pliegues * 41.0)/110;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
    else if ((pliegues>115) && (pliegues<120))
      {
        var grasamod = (pliegues * 41.5)/115;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
    else if ((pliegues>120) && (pliegues<125))
      {
        var grasamod = (pliegues * 42.0)/120;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
    else if ((pliegues>125) && (pliegues<130))
      {
        var grasamod = (pliegues * 42.5)/125;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
    else if ((pliegues>130) && (pliegues<135))
      {
        var grasamod = (pliegues * 43.0)/130;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
    else if ((pliegues>135) && (pliegues<140))
      {
        var grasamod = (pliegues * 43.5)/135;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
    else if ((pliegues>140) && (pliegues<145))
      {
        var grasamod = (pliegues * 44.0)/140;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
    else if ((pliegues>145) && (pliegues<150))
      {
        var grasamod = (pliegues * 44.5)/145;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
    else if ((pliegues>150) && (pliegues<155))
      {
        var grasamod = (pliegues * 45.0)/150;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
    else if ((pliegues>155) && (pliegues<160))
      {
        var grasamod = (pliegues * 45.5)/155;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
    }
    else if (edad > 49)
    {
      if ((pliegues > 20) && (pliegues < 25))
     {
        var grasamod = (pliegues * 21.4) / 20;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }
     else if((pliegues > 25) && (pliegues < 30))
     {
        var grasamod = (pliegues * 24.0) / 25;
        document.getElementById('txtWoomer').value = grasamod.toFixed(2);
     }
     else if ((pliegues > 30) && (pliegues < 35))
     {
        var grasamod = (pliegues * 26.6) / 30;
        document.getElementById('txtWoomer').value = grasamod.toFixed(2);
     }

     else if((pliegues > 35) && (pliegues < 40))
     {
        var gramod = (pliegues * 28.5) / 35;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    if ((pliegues > 40) && (pliegues < 45)) 
     {
        var grasamod = (pliegues * 30.3) / 40;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues > 45) && (pliegues < 50)) 
     {
        var grasamod = (pliegues * 31.9) / 45;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues > 50) && (pliegues < 55)) 
     {
        var grasamod = (pliegues * 33.4) /50;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues > 55) && (pliegues < 60)) 
     {
        var grasamod = (pliegues * 34.6) / 55;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues > 60) && (pliegues < 65)) 
     {
        var grasamod = (pliegues * 35.7) / 60;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues > 65) && (pliegues<70)) 
     {
        var grasamod= (pliegues * 36.7) / 65;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues>70) && (pliegues < 75))
     {
        var grasamod = (pliegues * 37.7) / 70;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues>75) && (pliegues<80)) 
     {
        var grasamod = (pliegues * 38.7) / 75;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
     }

    else if ((pliegues> 80) && (pliegues<85))
      {
        var grasamod = (pliegues * 39.6) / 80;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }

    else if ((pliegues> 85) && (pliegues<90))
      {
        var grasamod = (pliegues * 40.4) / 85;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }

    else if ((pliegues> 90) && (pliegues<95))
      {
        var grasamod = (pliegues * 41.2) / 90;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }

    else if((pliegues > 95) && (pliegues<100))
      {
        var grasamod = (pliegues * 41.9) / 95;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }

    else if ((pliegues>100) && (pliegues<105))
      {
        var grasamod = (pliegues * 42.6)/100;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }

    else if ((pliegues>105) && (pliegues<110))
      {
        var grasamod = (pliegues * 43.3)/105;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }

    else if ((pliegues>110) && (pliegues<115))
      {
        var grasamod = (pliegues * 43.9)/110;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
    else if ((pliegues>115) && (pliegues<120))
      {
        var grasamod = (pliegues * 44.5)/115;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
    else if ((pliegues>120) && (pliegues<125))
      {
        var grasamod = (pliegues * 45.1)/120;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
    else if ((pliegues>125) && (pliegues<130))
      {
        var grasamod = (pliegues * 45.7)/125;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
    else if ((pliegues>130) && (pliegues<135))
      {
        var grasamod = (pliegues * 46.2)/130;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
    else if ((pliegues>135) && (pliegues<140))
      {
        var grasamod = (pliegues * 46.7)/135;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
    else if ((pliegues>140) && (pliegues<145))
      {
        var grasamod = (pliegues * 47.2)/140;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
    else if ((pliegues>145) && (pliegues<150))
      {
        var grasamod = (pliegues * 47.7)/145;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
    else if ((pliegues>150) && (pliegues<155))
      {
        var grasamod = (pliegues * 48.2)/150;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
    else if ((pliegues>155) && (pliegues<160))
      {
        var grasamod = (pliegues * 48.7)/155;
        document.getElementById('txtWoomer').value=grasamod.toFixed(2);
      }
    }
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
   } else if ((edad >= 40) && (edad <= 49)) {
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
   } else if (edad >= 40 && edad <= 49) {
      return 6;
   } else if (edad >= 30 && edad <= 39) {
      return 5;
   } else if (edad >= 16 && edad <= 29) {
      return 4;
   } else {
      alert("Edad no está en la tabla");
   }
}