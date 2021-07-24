/*
Autor: Gabriel Servia
Parcial 2019 - Ejercicio 4
Enunciado:
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la resta es mayor a 10 ,además de mostrar el resultado,
muestro el mensaje "la resta es xxx y superó el 10".
*/
function mostrar()
{
	var numeroUno;
	var numeroDos;
	var resta;
	var suma;
	var mensaje;

	// Entrada
	numeroUno=prompt("Ingrese el primer numero:");
	numeroDos=prompt("Ingrese el segundo numero:");
	

	// Logica
	if(numeroUno == numeroDos)
	{
		mensaje=numeroUno+numeroDos;
	}
	else
	{
		numeroUno=parseInt(numeroUno);
		numeroDos=parseInt(numeroDos);

		if(numeroUno > numeroDos)
		{
			resta=numeroUno-numeroDos;

			if(resta > 10)
			{
				mensaje="La resta es "+resta+" y superó el 10";
			}
			else
			{
				mensaje="La resta es "+resta;
			}
		}
		else
		{
			suma=numeroUno+numeroDos;

			mensaje="La suma es "+suma;
		}
	}

	// Salida
	alert(mensaje);

}
