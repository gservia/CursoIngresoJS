/*
Autor: Gabriel Servia
SWITCH Ejercicio 01
Enunciado:
Al seleccionar un mes informar:
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."
*/
function mostrar()
{
	
	var mesDelAño;
	var mensaje;

	// Entrada
	mesDelAño = txtIdMes.value;

	// Logica
	switch(mesDelAño)
	{
		case 'Enero':
			mensaje="Que comiences bien el año!!!";
		break;
		case 'Marzo':
			mensaje="A clases!!!";
		break;
		case 'Julio':
			mensaje="Se vienen las vacaciones!!!";
		break;
		case 'Diciembre':
			mensaje="Felices fiestas!!!";
		break;
		default:
			mensaje="No ingreso un mes con fiestas ni vacaciones";
		break;
	}

	// Salida
	alert(mensaje);

}//FIN DE LA FUNCIÓN
