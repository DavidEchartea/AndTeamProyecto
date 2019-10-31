function suma(){
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
	var pliegues = document.getElementById('resultadoPliegues').value;
	var txtedad = document.getElementById('edad').value;
	var edad = parseInt(txtedad);
	 switch(pliegues)
	 {
	 	case "15":
	 	alert("Caso 15");
	 	if (edad > 16 && edad < 30)
	 	{
	 		var grasa = 4.8;
	 		document.getElementById('txtWoomer').value = grasa;
	 	}

	 	else
	 	{
			 alert("Datos Invalidos, intente de nuevo!");
	 	}

	 	break;

	 	case "20":
	 	alert("Caso 20");
	 	break;

	 	case "25":
	 	alert("Caso 25");
		break;
		 
		case "30":
		alert("Caso 30");
		break;
			
		case "35":
	 	alert("Caso 35");
		 break;
		 
		case "40":
		alert("Caso 40");
		break;

		case"45":
		alert("Caso 45");
		break;

		case "50":
		break;

		case "55":
		break;

		case "60":
		break;

		case "65":
		break;

		case "70":
		break;

		case "75":
		break;

		case "80":
		break;

		case "85":
		break;

		case "90":
		break;

		case "95":
		break;

		case "100":
		break;
	 }
}