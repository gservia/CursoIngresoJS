/*
Autor: Gabriel Servia
IF Ejercicio 04
Enunciado:
Al ingresar una edad debemos informar si la persona
es adolescente, edad entre 13 y 17 años (inclusive).
*/
function mostrar()
{
	var edad;
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if(edad<18 && edad>12)
	{
		alert("Adolescente");
	}


}//FIN DE LA FUNCIÓN