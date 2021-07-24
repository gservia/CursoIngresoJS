/*
Autor: Gabriel Servia
SWITCH Ejercicio 04
Enunciado:
Al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/
function mostrar()
{
	
	var mesDelAño;

	// Entrada
	mesDelAño=document.getElementById('txtIdMes').value;

	// Logica
	switch(mesDelAño)
	{
		case 'Abril':
		case 'Junio':
		case 'Septiembre':
		case 'Noviembre':
			mensaje="Tiene 30 días";
		break;
		case 'Febrero':
			mensaje="Tiene 28 días";
		break;	
		default:
			mensaje="Tiene 31 días";
		break;
	}

	// Salida
	alert(mensaje);

}//FIN DE LA FUNCIÓN
