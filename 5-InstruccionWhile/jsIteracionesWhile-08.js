/*
Autor: Gabriel Servia
WHILE Ejercicio 08
Enunciado:
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.
*/
function mostrar()
{
	var contador;
	var flagRespuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numeroIngresado;
	var contadorNegativos;

	contador=0;
	contadorNegativos=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	flagRespuesta='si';

	while(flagRespuesta == 'si')
	{
		numeroIngresado=prompt("Ingrese el "+(contador+1)+"° numero:");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado < 0)
		{
			multiplicacionNegativos=numeroIngresado*multiplicacionNegativos;
			contadorNegativos++;
		}
		else
		{
			sumaPositivos=numeroIngresado+sumaPositivos;
		}

		contador++;
		flagRespuesta=prompt("¿Quiere continuar? Responda 'si' o 'no':");
	}

	if(contadorNegativos==0)
	{
		multiplicacionNegativos="No se ingresaron numeros negativos";
	}

	document.getElementById('txtIdSuma').value=sumaPositivos;
	document.getElementById('txtIdProducto').value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN
