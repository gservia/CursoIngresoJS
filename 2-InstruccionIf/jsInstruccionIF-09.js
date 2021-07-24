/*
Autor: Gabriel Servia
IF Ejercicio 09
Enunciado:
Al presionar el Botón, mostrar un número Random
del 1 al 10 inclusive.
*/
function mostrar()
{

	var numeroAleatorio;
	var mensaje;

	//Genero el número RANDOM entre 1 y 10
	numeroAleatorio=Math.floor(Math.random() * 10) + 1;

	mensaje="Su numero random es: "+numeroAleatorio;

	alert(mensaje);	


}//FIN DE LA FUNCIÓN
