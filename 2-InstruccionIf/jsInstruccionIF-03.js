/*
Autor: Gabriel Servia
IF Ejercicio 03
Enunciado:
Al ingresar una edad debemos informar si la persona es
mayor de edad, sino informar que es un menor de edad.
*/
function mostrar()
{
	//Tomo la edad
	var edad;
	var mensaje;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if(edad<18)
	{
		mensaje="Menor de edad";
	}
	else
	{
		mensaje="Mayor de edad";
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN