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
function calpesoGrasa(){
	var grasacorp = document.getElementById('txtgrasaCorp').value;
	var peso = document.getElementById('txtPesoAct').value;
	var pesoGrasa = (parseFloat(grasacorp) * parseFloat(peso)) /100;
	document.getElementById('txtpesoGrasa').value= pesoGrasa.toFixed(2);
}
function calmasaMuscular(){
	var pesograsa = document.getElementById('txtpesoGrasa').value;
	var pesoactual = document.getElementById('txtPesoAct').value;
	masamus = parseFloat(pesoactual) - parseFloat(pesograsa);
	document.getElementById('txtmasaMus').value = masamus.toFixed(2);
}
function calrmb(){
	var masaMuscular = document.getElementById('txtmasaMus').value;
	var rmb = (parseFloat(masaMuscular) * 21.6 + 370);
	document.getElementById('txtrmb').value=rmb.toFixed(1);
}
