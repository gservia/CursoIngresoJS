/*
Autor: Gabriel Servia
IF Ejercicio 07
Enunciado:
Al ingresar una edad menor a 18 años y un estado
civil distinto a "Soltero", mostrar el siguiente
mensaje: 'Es muy pequeño para NO ser soltero.'
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
	if(edad < 18)
	{
		if(estadoCivil != "Soltero")
		{
			mensaje="Es muy pequeño para NO ser soltero.";

			// Salida
			alert(mensaje);
		}
	}

}//FIN DE LA FUNCIÓN
