/*
Autor: Gabriel Servia
SWITCH Ejercicio 05
Enunciado:
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
*/
function mostrar()
{

	var horaDelDia;
	var mensaje;

	// Entrada
	horaDelDia=document.getElementById('txtIdHora').value;
	horaDelDia=parseInt(horaDelDia);

	// Logica
	switch(horaDelDia)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje="Es de mañana";
		break;
		default:
			mensaje="No es de mañana";
	}

	// Salida
	alert(mensaje);

}//FIN DE LA FUNCIÓN
