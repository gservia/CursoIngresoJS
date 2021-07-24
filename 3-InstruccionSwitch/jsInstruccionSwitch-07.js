/*
Autor: Gabriel Servia
SWITCH Ejercicio 07
Enunciado:
Al selecionar un destino , indicar el punto cardinal de
nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
*/
function mostrar()
{

	var destinoIngresado;
	var mensaje;
	var puntoCardinal;

	// Entrada
	destinoIngresado=document.getElementById('txtIdDestino').value;

	// Logica
	switch(destinoIngresado)
	{
		case 'Bariloche':
			puntoCardinal="Oeste";
		break;
		case 'Cataratas':
			puntoCardinal="Norte";
		break;
		case 'Mar del plata':
			puntoCardinal="Este";
		break;
		case 'Ushuaia':
			puntoCardinal="Sur";
		break;
	}

	mensaje="Usted se encuentra en el "+puntoCardinal+" de Argentina";

	// Salida
	alert(mensaje);

}//FIN DE LA FUNCIÓN
