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
	var sexo = document.getElementById('sexo');
	
	if (sexo == "Hombre" || sexo == "hombre" || sexo == "Masculino" || sexo == "masculino")
	{
		alert("Eres hombre");
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
		}
	}
	else if(sexo == "Mujer" || sexo == "mujer" || sexo == "Femenino" || sexo == "femenino")
	{
		alert("Eres mujer");
	}

}