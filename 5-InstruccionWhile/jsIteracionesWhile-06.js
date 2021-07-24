/*
Autor: Gabriel Servia
WHILE Ejercicio 06
Enunciado:
Al presionar el botón pedir 5 números e
informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;

	while(contador < 5)
	{
		numeroIngresado=prompt("Ingrese el "+(contador+1)+"° numero:");
		numeroIngresado=parseInt(numeroIngresado);
		
		acumulador=acumulador+numeroIngresado;
		contador++;
	}
	
	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
