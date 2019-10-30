function grabar(opc){
		switch(opc){
			case 'clientes':
			document.getElementById("txtOpc").value = 'add';
			
			if(document.getElementById("txtNombre").value == '') {
				alert('Error en los datos reviselos!');
				document.getElementById("txtNombre").focus();
				return false;
			}
			if (document.getElementById("txtAPaterno").value == '') {
				alert('Error en los datos reviselos!');
				document.getElementById("txtAPaterno").focus();
				return false;
			}
			if (document.getElementById("txtAMaterno").value == '') {
				alert('Error en los datos reviselos!');
				document.getElementById("txtAMaterno").focus();
				return false;
			}
			if (document.getElementById("txtCorreo").value == '') {
				alert('Error en los datos reviselos!');
				document.getElementById("txtCorreo").focus();
				return false;
			}
			if(document.getElementById("txtObjetivo").value == '') {
				alert('Error en los datos reviselos!');
				document.getElementById("txtObjetivo").focus();
				return false;
			}
			if(document.getElementById("txtEdad").value == '') {
				alert('Error en los datos reviselos!');
				document.getElementById("txtEdad").focus();
				return false;
			}
			if(document.getElementById("txtEstatura").value == '') {
				alert('Error en los datos reviselos!');
				document.getElementById("txtEstatura").focus();
				return false;
			}
			if(document.getElementById("txtPeso").value == '') {
				alert('Error en los datos reviselos!');
				document.getElementById("txtPeso").focus();
				return false;
			}
			if(document.getElementById("txtTelefono").value == '') {
				alert('Error en los datos reviselos!');
				document.getElementById("txtTelefono").focus();
				return false;
			}
			document.getElementById("frmAltaClientes").submit();
			break;


			case 'paciente':
			document.getElementById("txtOpc").value = 'add';
			
			if(document.getElementById("txtNombre").value == '') {
				alert('Error en los datos reviselos!');
				document.getElementById("txtNombre").focus();
				return false;
			}
			if (document.getElementById("txtAPaterno").value == '') {
				alert('Error en los datos reviselos!');
				document.getElementById("txtAPaterno").focus();
				return false;
			}
			if (document.getElementById("txtAMaterno").value == '') {
				alert('Error en los datos reviselos!');
				document.getElementById("txtAMaterno").focus();
				return false;
			}
			if (document.getElementById("txtTelefono").value == '') {
				alert('Error en los datos reviselos!');
				document.getElementById("txtTelefono").focus();
				return false;
			}
			if(document.getElementById("txtEstatura").value == '') {
				alert('Error en los datos reviselos!');
				document.getElementById("txtEstatura").focus();
				return false;
			}
			if(document.getElementById("txtPeso").value == '') {
				alert('Error en los datos reviselos!');
				document.getElementById("txtPeso").focus();
				return false;
			}
			if(document.getElementById("txtCorreo").value == '') {
				alert('Error en los datos reviselos!');
				document.getElementById("txtCorreo").focus();
				return false;
			}
			if(document.getElementById("txtEdad").value == '') {
				alert('Error en los datos reviselos!');
				document.getElementById("txtEdad").focus();
				return false;
			}
			if(document.getElementById("txtObjetivo").value == '') {
				alert('Error en los datos reviselos!');
				document.getElementById("txtObjetivo").focus();
				return false;
			}
			document.getElementById("frmAddPaciente").submit();
			break;

			case 'medidas':
			document.getElementById("cmb_plan").value = 'add';
			
			if(document.getElementById("txtBiceptal").value == '') {
				alert('Error en los datos reviselos!');
				document.getElementById("txtBiceptal").focus();
				return false;
			}
			if (document.getElementById("txtTriceptal").value == '') {
				alert('Error en los datos reviselos!');
				document.getElementById("txtTriceptal").focus();
				return false;
			}
			if (document.getElementById("txtSuprailiaco").value == '') {
				alert('Error en los datos reviselos!');
				document.getElementById("txtSuprailiaco").focus();
				return false;
			}
			if (document.getElementById("txtsubEscapular").value == '') {
				alert('Error en los datos reviselos!');
				document.getElementById("txtsubEscapular").focus();
				return false;
			}
			if(document.getElementById("txtAbdominal").value == '') {
				alert('Error en los datos reviselos!');
				document.getElementById("txtAbdominal").focus();
				return false;
			}
			if(document.getElementById("txtCuadriciptal").value == '') {
				alert('Error en los datos reviselos!');
				document.getElementById("txtCuadriciptal").focus();
				return false;
			}
			if(document.getElementById("txtPectoral").value == '') {
				alert('Error en los datos reviselos!');
				document.getElementById("txtPectoral").focus();
				return false;
			}
			document.getElementById("frmPlan").submit();
			break;
		}
	}