/*
Autor: Gabriel Servia
SWITCH Ejercicio 02
Enunciado:
Al seleccionar un mes informar:
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARACIÓN: tomamos a Julio y Agosto como los meses de Invierno.
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
		case 'Marzo':
		case 'Abril':
		case 'Mayo':
		case 'Junio':
			mensaje="Falta para el invierno."
		break;	
		case 'Julio':
		case 'Agosto':
			mensaje="Abrigate que hace frio.";
		break;
		default:
			mensaje="Ya pasamos el frio, ahora calor!!!";
		break;
	}

	// Salida
	alert(mensaje);

}//FIN DE LA FUNCIÓN
