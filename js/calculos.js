function suma(){
	var biceptal = document.getElementById('Biceptal').value;
	var triceptal = document.getElementById('Triceptal').value;
	var supra = document.getElementById('Suprailico').value;
	var subEsc = document.getElementById('subEsc').value;
	var pliegue = parseInt(biceptal) + parseInt(triceptal) + parseInt(supra) + parseInt(subEsc);
	document.getElementById('resultado').value = pliegue;
	return pliegue;
	}

function calgrasa()
{
	var pliegues = document.getElementById('resultado').value;
	var txtedad = document.getElementById('edad').value;
	var edad = parseInt(txtedad);
	 switch(pliegues)
	 {
	 	case "15":
	 	alert("Caso 15");
	 	if (edad > 16 && edad < 30)
	 	{
	 		var grasa = 4.8;
	 		document.getElementById('grasa').value = grasa;
	 	}

	 	else
	 	{
	 		alert("Datos Invalidos");
	 	}

	 	break;

	 	case "20":
	 	alert("Caso 20");
	 	break;

	 	case "25":
	 	alert("Caso 25");
	 	break;
	 }
}