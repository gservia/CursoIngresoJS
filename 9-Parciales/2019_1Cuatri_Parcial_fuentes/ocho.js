/*
Autor: Gabriel Servia
Parcial 2019 - Ejercicio 8
Enunciado:
Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar)
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.
Testeo con los siguientes datos
( d , -150(mal) , -50(bien))
( z , 0)
( g , 20)
( a , 150(mal) , 0(bien))
( b , 3)
( k , 7)
*/
function mostrar()
{
	var letraIngresada;
	var numeroIngresado;
	var flagContinuar;
	var flagPrimerValor;
	var cantidadDeCeros;
	var cantidadDeNumerosPares;
	var cantidadDeNumerosImpares;
	var promedioDeNumerosPositivos;
	var sumaDeNumerosPositivos;
	var sumaDeNumerosNegativos;
	var numeroMaximo;
	var letraMaximo;
	var numeroMinimo;
	var letraMinimo;
	var cantidadDeNumerosPositivos;

	flagContinuar=true;
	flagPrimerValor=true;
	cantidadDeCeros=0;
	cantidadDeNumerosPares=0;
	cantidadDeNumerosImpares=0;
	sumaDeNumerosPositivos=0;
	sumaDeNumerosNegativos=0;
	cantidadDeNumerosPositivos=0;

	while(flagContinuar==true)
	{

		letraIngresada=prompt("Ingresar una letra:");
		letraIngresada=letraIngresada.toLowerCase();

		while(isNaN(letraIngresada) == false)
		{
			letraIngresada=prompt("Solo se aceptan letras. Vuelva a intentar:");
			letraIngresada=letraIngresada.toLowerCase();
		}

		numeroIngresado=prompt("Ingresar un numero entre -100 y 100:"); // Ponemos el supuesto que el usuario solo ingresa numeros
		numeroIngresado=parseInt(numeroIngresado);

		while(numeroIngresado < -100 || numeroIngresado > 100)
		{
			numeroIngresado=prompt("El numero debe ser entre -100 y 100. Intente una vez mas:");
			numeroIngresado=parseInt(numeroIngresado);
		}

		if(flagPrimerValor == true)
		{
			flagPrimerValor=false;
			numeroMaximo=numeroIngresado;
			letraMaximo=letraIngresada;
			numeroMinimo=numeroIngresado;
			letraMinimo=letraIngresada;
		}
		else
		{
			if(numeroIngresado > numeroMaximo)
			{
				numeroMaximo=numeroIngresado;
				letraMaximo=letraIngresada;
			}

			if(numeroIngresado < numeroMinimo)
			{
				numeroMinimo=numeroIngresado;
				letraMinimo=letraIngresada;
			}
		}

		if(numeroIngresado == 0)
		{
			cantidadDeCeros++;
		}
		else
		{
			if(numeroIngresado%2 == 0)
			{
				cantidadDeNumerosPares++;
			}
			else
			{
				cantidadDeNumerosImpares++;
			}

			if(numeroIngresado < 0)
			{
				sumaDeNumerosNegativos=sumaDeNumerosNegativos+numeroIngresado;
			}
			else
			{
				sumaDeNumerosPositivos=sumaDeNumerosPositivos+numeroIngresado;
				cantidadDeNumerosPositivos++;
			}
		}

		flagContinuar= confirm("¿Desea continuar cargando datos?");
	}

	if(cantidadDeNumerosPositivos == 0)
	{
		promedioDeNumerosPositivos="No se ingresaron numeros positivos";
	}
	else
	{
		promedioDeNumerosPositivos=sumaDeNumerosPositivos/cantidadDeNumerosPositivos;
	}

	if(sumaDeNumerosNegativos == 0)
	{
		sumaDeNumerosNegativos="No se ingresaron numeros negativos";
	}

	document.write("Cantidad de ceros: "+cantidadDeCeros+
		"<br>Cantidad de numeros pares: "+cantidadDeNumerosPares+
		"<br>Cantidad de numeros impares: "+cantidadDeNumerosImpares+
		"<br>Promedio de numeros positivos: "+promedioDeNumerosPositivos+
		"<br>Suma de todos los negativos: "+sumaDeNumerosNegativos+
		"<br>Letra y Numero maximo: "+letraMaximo+" | "+numeroMaximo+
		"<br>Letra y Numero minimo: "+letraMinimo+" | "+numeroMinimo);
}
