/*
Autor: Gabriel Servia
WHILE Ejercicio 09
Enunciado:
Al presionar el botón pedir  números  hasta que el
usuario quiera, mostrar el número máximo y el número
mínimo ingresado.
*/
function mostrar()
{	
	
	// Declarar variables
	var flagPrimerIngreso;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var flagContinuar;

	// Iniciar variables
	flagPrimerIngreso=true;
	flagContinuar="si";

	while(flagContinuar == "si")
	{
		numeroIngresado=prompt("Ingrese un numero:");
		numeroIngresado=parseInt(numeroIngresado);

		if(flagPrimerIngreso == true)
		{
			flagPrimerIngreso=false;
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
		}
		else
		{
			if(numeroIngresado > numeroMaximo)
			{
				numeroMaximo=numeroIngresado;
			}

			if(numeroIngresado < numeroMinimo)
			{
				numeroMinimo=numeroIngresado;
			}
		}

		flagContinuar=prompt("¿Quiere continuar? Responda 'si' o 'no':");
	}

	document.getElementById('txtIdMaximo').value=numeroMaximo;
	document.getElementById('txtIdMinimo').value=numeroMinimo;

}//FIN DE LA FUNCIÓN
