function catchyMcMujeres(){
	var triceps = document.getElementById('txtTriceptal').value;
	var supra = document.getElementById('txtSupra').value;
	var cuadricep = document.getElementById('txtCuadriciptal').value;
	var edad = document.getElementById('edad').value;
	var sumaP = parseInt(triceps) + parseInt(supra) + parseInt(cuadricep);
	var densidad  = ((0.0009929 * parseInt(sumaP)) + (0.0000023 * (parseInt(sumaP)*parseInt(sumaP))) - (0.0001392 * parseInt(edad)));
	var porcentajeGrasa = (495 / parseFloat(densidad) - 450);
	document.getElementById('txtCatch').value = new Intl.NumberFormat().format(porcentajeGrasa);
}

function catchyMc(){
	var pecho = document.getElementById('txtPectoral').value;
	var abs = document.getElementById('txtAbdominal').value;
	var cuadricep = document.getElementById('txtCuadriciptal').value;
	var edad = document.getElementById('edad').value;
	var sumaP = parseInt(pecho) + parseInt(abs) + parseInt(cuadricep);
	var densidad  = ((0.0008267 * parseInt(sumaP)) + (0.0000016 * parseInt(edad)) - (0.0002574 * parseInt(edad)));
	var porcentajeGrasa = (495 / parseFloat(densidad) - 450);
	document.getElementById('txtCatch').value = new Intl.NumberFormat().format(porcentajeGrasa);
}

function calcularIMC(){
	var peso = document.getElementById('txtPesoAct').value;
	var estatura = document.getElementById('estatura').value;
	var imc = (parseFloat(peso) / (parseFloat(estatura) * parseFloat(estatura)));
	document.getElementById('txtIMC').value = imc.toFixed(2);
}

function calcularPesos()
{
	var estatura = document.getElementById('estatura').value;
	var pesominimo = (parseFloat(estatura) * parseFloat(estatura)) * 20;
	document.getElementById('estaturashw').value = pesominimo.toFixed(2); 
	var pesorec = (parseFloat(estatura) * parseFloat(estatura)) * 22;
	document.getElementById('estaturashw2').value = pesorec.toFixed(2);
	var pesomax = (parseFloat(estatura) * parseFloat(estatura)) * 25;
	document.getElementById('estaturashw3').value = pesomax.toFixed(2);
}
function suma()
{
	var txtBiceptal = document.getElementById('txtBiceptal').value;
	var txtTriceptal = document.getElementById('txtTriceptal').value;
	var txtSuprailico = document.getElementById('txtSupra').value;
	var txtsubEscapular = document.getElementById('txtsubEscapular').value;
	var pliegue = parseInt(txtBiceptal) + parseInt(txtTriceptal) + parseInt(txtSuprailico) + parseInt(txtsubEscapular);
	document.getElementById('resultadoPliegues').value = pliegue;
	return pliegue;
}

function calgrasa()
{
	var txtpliegues = document.getElementById('resultadoPliegues').value;
	var txtedad = document.getElementById('edad').value;
	var edad = parseInt(txtedad);
	var pliegues = parseInt(txtpliegues);
	var sexo = document.getElementById('sexo').value;
	
	if (sexo == "Masculino")
	{
		if ((edad > 16) && (edad < 30))
		{
			if (pliegues == 15)
			{
				var grasa = 4.8;
				document.getElementById('txtgrasaCorp').value = grasa;
			}

			else if((pliegues > 15) && (pliegues < 20))
			{
				var grasamod = (pliegues * 4.8) / 15;
				document.getElementById('txtgrasaCorp').value=grasamod;
			}

			if (pliegues == 20) 
			{
				var grasa = 8.1;
				document.getElementById('txtgrasaCorp').value=grasa;
				
			}

			else if ((pliegues > 20) && (pliegues < 25))
			{
				var grasamod = (pliegues * 8.1) / 20;
				document.getElementById('txtgrasaCorp').value=grasamod;
			}

			if (pliegues == 25) 
			{
				var grasa = 10.5;
				document.getElementById('txtgrasaCorp').value= grasa;
			}
			else if((pliegues > 25) && (pliegues < 30))
			{
				var grasamod = (pliegues * 10.5) / 25;
				document.getElementById('txtgrasaCorp').value = grasamod;
			}

			if (pliegues == 30) 
			{
				var grasa = 12.9;
				document.getElementById('txtgrasaCorp').value = grasa;
			}
			else if ((pliegues > 30) && (pliegues < 35))
			{
				var grasamod = (pliegues * 12.9) / 30;
				document.getElementById('txtgrasaCorp').value = grasamod;
			}

			if (pliegues == 35)
			{
				var grasa = 14.7;
				document.getElementById('txtgrasaCorp').value=grasa;
			}
			else if((pliegues > 35) && (pliegues < 40))
			{
				var gramod = (pliegues * 14.7) / 35;
				document.getElementById('txtgrasaCorp').value=grasamod;
			}

			if (pliegues == 40)
			{
				var grasa = 16.4;
				document.getElementById('txtgrasaCorp').value=grasa;
			}

			if ((pliegues > 40) && (pliegues < 45)) 
			{
				var grasamod = (pliegues * 16.4) / 40;
				document.getElementById('txtgrasaCorp').value=grasamod;
			}

			if (pliegues == 45) 
			{
				var grasa = 17.7;
				document.getElementById('txtgrasaCorp').value=grasa;
			}
			else if ((pliegues > 45) && (pliegues < 50)) 
			{
				var grasamod = (pliegues * 17.7) / 45;
				document.getElementById('txtgrasaCorp').value=grasamod;
			}

			if (pliegues == 50)
			{
				var grasa = 19;
				document.getElementById('txtgrasaCorp').value=grasa;
			}
			else if ((pliegues > 50) && (pliegues < 55)) 
			{
				var grasamod = (pliegues * 19) /50;
				document.getElementById('txtgrasaCorp').value=grasamod;
			}

			if (pliegues == 55) 
			{
				var grasa = 20.1;
				document.getElementById('txtgrasaCorp').value=grasa;
			}
			else if ((pliegues > 55) && (pliegues < 60)) 
			{
				var grasamod = (pliegues * 20.1) / 55;
				document.getElementById('txtgrasaCorp').value=grasamod;
			}

			if (pliegues == 60)
			{
				var grasa = 21.2;
				document.getElementById('txtgrasaCorp').value=grasa;
			}
			else if ((pliegues > 60) && (pliegues < 65)) 
			{
				var grasamod = (pliegues * 21.2) / 60;
				document.getElementById('txtgrasaCorp').value=grasamod;
			}

			if (pliegues == 65) 
			{
				var grasa = 22.2;
				document.getElementById('txtgrasaCorp').value=grasa;
			}
			else if ((pliegues > 65) && (pliegues<70)) 
			{
				var grasamod= (pliegues * 22.2) / 65;
				document.getElementById('txtgrasaCorp').value=grasamod;
			}

			if (pliegues == 70) 
			{
				var grasa=23.1;
				document.getElementById('txtgrasaCorp').value=grasa;
			}
			else if ((pliegues>70) && (pliegues < 75))
			{
				var grasamod = (pliegues * 23.1) / 70;
				document.getElementById('txtgrasaCorp').value=grasamod
			}

			if (pliegues == 75) 
			{
				var grasa = 24;
				document.getElementById('txtgrasaCorp').value=grasa;
			}
			else if ((pliegues>75) && (pliegues<80)) 
			{
				var grasamod = (pliegues * 24) / 75;
				document.getElementById('txtgrasaCorp').value=grasamod;
			}
			if (pliegues == 80)
			 {
			 	var grasa = 24.8;
			 	document.getElementById('txtgrasaCorp').value=grasa;
			 }
			 else if ((pliegues> 80) && (pliegues<85))
			 {
			 	var grasamod = (pliegues * 24.8) / 80;
			 	document.getElementById('txtgrasaCorp').value=grasamod;
			 }

			 if (pliegues == 85)
			 {
			 	var grasa = 25.3;
			 	document.getElementById('txtgrasaCorp').value=grasa;
			 }
			 else if ((pliegues> 85) && (pliegues<90))
			 {
			 	var grasamod = (pliegues * 25.3) / 85;
			 	document.getElementById('txtgrasaCorp').value=grasamod;
			 }

			 if (pliegues == 90)
			 {
			 	var grasa = 26.2;
			 	document.getElementById('txtgrasaCorp').value=grasa;
			 }
			 else if ((pliegues> 90) && (pliegues<95))
			 {
			 	var grasamod = (pliegues * 26.2) / 90;
			 	document.getElementById('txtgrasaCorp').value=grasamod;
			 }
			 if (pliegues == 95) 
			 {
			 	var grasa = 26.9;
			 	document.getElementById('txtgrasaCorp').value=grasa;
			 }
			 else if((pliegues > 95) && (pliegues<100))
			 {
			 	var grasamod = (pliegues * 26.9) / 95;
			 	document.getElementById('txtgrasaCorp').value=grasamod;
			 }

			 if (pliegues == 100)
			 {
			 	var grasa = 27.6;
			 	document.getElementById('txtgrasaCorp').value=grasa;
			 }
			 else if ((pliegues>100) && (pliegues<105))
			 {
			 	var grasamod = (pliegues * 27.6)/100;
			 	document.getElementById('txtgrasaCorp').value=grasamod;
			 }
			 if (pliegues == 105)
			 {
			 	var grasa = 28.2;
			 	document.getElementById('txtgrasaCorp').value=grasa;
			 }
			 else if ((pliegues>105) && (pliegues<110))
			 {
			 	var grasamod = (pliegues * 28.2)/105;
			 	document.getElementById('txtgrasaCorp').value=grasamod;
			 }

			 if (pliegues == 110)
			 {
			 	var grasa = 28.8;
			 	document.getElementById('txtgrasaCorp').value=grasa;
			 }
			 else if ((pliegues>110) && (pliegues<115))
			 {
			 	var grasamod = (pliegues * 28.8)/110;
			 	document.getElementById('txtgrasaCorp').value=grasamod;
			 }
		}
	}
	else if(sexo == "Femenino")
	{
	}

}