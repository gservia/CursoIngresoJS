/*
Autor: Gabriel Servia
SWITCH Ejercicio 08
Enunciado:
Al seleccionar un destino informar si
hace FRIO o CALOR en ese destino
*/
function mostrar()
{

	var destinoIngresado;
	var mensaje;
	var clima;

	// Entrada
	destinoIngresado=document.getElementById('txtIdDestino').value;

	// Logica
	switch(destinoIngresado)
	{
		case 'Cataratas':
			clima="calor";
		break;
		default:
			clima="frio";
		break;
	}

	mensaje="En su destino hace "+clima+" durante Julio";

	// Salida
	alert(mensaje);

}//FIN DE LA FUNCIÓN
