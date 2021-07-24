/*
Autor: Gabriel Servia
SWITCH Ejercicio 03
Enunciado:
Al seleccionar un mes informar:
si es Febrero: "Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
*/
function mostrar()
{
	
	var mesDelAño;
	var mensaje;

	// Entrada
	mesDelAño=document.getElementById('txtIdMes').value;

	// Logica
	switch(mesDelAño)
	{
		case 'Febrero':
			mensaje="Este mes no tiene más de 29 días."
		break;	
		default:
			mensaje="Este mes tiene 30 o más días";
		break;
	}

	// Salida
	alert(mensaje);

}//FIN DE LA FUNCIÓN
