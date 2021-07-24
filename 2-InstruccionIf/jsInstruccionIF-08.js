/*
Autor: Gabriel Servia
IF Ejercicio 08
Enunciado:
Al ingresar una edad menor a 18 años y un estado civil
distinto a "Soltero", NO HACER NADA, pero si no es asi,
y es soltero y no es menor, mostrar el siguiente
mensaje: 'Es soltero y no es menor.'
*/
function mostrar()
{
	var edad;
	var estadoCivil;
	var mensaje;

	// Entrada
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	estadoCivil=document.getElementById('estadoCivil').value;

	// Logica
	if(edad>17)
	{
		if(estadoCivil == "Soltero")
		{
			mensaje="Es soltero y no es menor.";

			// Salida
			alert(mensaje);
		} 
	}

}//FIN DE LA FUNCIÓN