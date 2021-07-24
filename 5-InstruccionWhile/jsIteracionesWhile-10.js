/*
Autor: Gabriel Servia
WHILE Ejercicio 10
Enunciado:
Al presionar el botón pedir números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positivos-negativos).
*/
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivos;
	var cantidadDeCeros;
	var cantidadDeNegativos;
	var cantidadDePositivos;
	var cantidadDePares;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPositivosNegativos;

	sumaNegativos=0;
	sumaPositivos=0;
	cantidadDeCeros=0;
	cantidadDeNegativos=0;
	cantidadDePositivos=0;
	cantidadDePares=0;

	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un numero:");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado==0)
		{
			cantidadDeCeros++;
		}
		else
		{
			if((numeroIngresado%2) == 0)
			{
				cantidadDePares++;
			}

			if(numeroIngresado < 0)
			{
				cantidadDeNegativos++;
				sumaNegativos=sumaNegativos+numeroIngresado;
			}
			else
			{
				cantidadDePositivos++;
				sumaPositivos=sumaPositivos+numeroIngresado;
			}
		}
		
		respuesta=prompt("Desea continuar? Responda 'si'");
	}// Fin del while

	if(cantidadDeNegativos != 0)
	{
		promedioNegativos=sumaNegativos/cantidadDeNegativos;
	}
	else
	{
		promedioNegativos="No hubo numeros negativos";
	}

	if(cantidadDePositivos != 0)
	{
		promedioPositivos=sumaPositivos/cantidadDePositivos;
	}
	else
	{
		promedioPositivos="No hubo numeros positivos";
	}

	diferenciaPositivosNegativos=sumaPositivos+sumaNegativos;

	document.write("Suma de negativos: "+sumaNegativos+
		"<br>Suma de positivos: "+sumaPositivos+
		"<br>Cantidad de positivos: "+cantidadDePositivos+
		"<br>Cantidad de negativos: "+cantidadDeNegativos+
		"<br>Cantidad de ceros: "+cantidadDeCeros+
		"<br>Cantidad de numeros pares: "+cantidadDePares+
		"<br>Promedio de positivos: "+promedioPositivos+
		"<br>Promedio de negativos: "+promedioNegativos+
		"<br>Diferencia entre positivos y negativos: "+diferenciaPositivosNegativos);

}//FIN DE LA FUNCIÓN
