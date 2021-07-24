/*
Autor: Gabriel Servia
WHILE Ejercicio 07
Enunciado:
Al presionar el botón pedir  números  hasta que
el USUARIO QUIERA e informar la suma acumulada y
el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;

	contador=0;
	acumulador=0;
	respuesta='si';


	while(respuesta == 'si')
	{
		numeroIngresado=prompt("Ingrese el "+(contador+1)+"° numero:");
		numeroIngresado=parseInt(numeroIngresado);

		respuesta=prompt("¿Quiere continuar? Responda 'si' o 'no':");
		
		acumulador=acumulador+numeroIngresado;
		contador++;
	}
	
	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=acumulador/contador;
	
}// FIN DE LA FUNCIÓN
