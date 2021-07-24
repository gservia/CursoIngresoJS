/*
Autor: Gabriel Servia
IF Ejercicio 02
Enunciado:
Al ingresar una edad debemos informar
solo si la persona es mayor de edad.
*/
function mostrar()
{
	//Tomo la edad
	var edad;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if(edad>17)
	{
		alert("Mayor de edad");
	}

}//FIN DE LA FUNCIÓN
