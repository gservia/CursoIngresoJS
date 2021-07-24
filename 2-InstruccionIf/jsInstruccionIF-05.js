/*
Autor: Gabriel Servia
IF Ejercicio 05
Enunciado:
Al ingresar una edad solo debemos informar
si la persona NO es adolescente.
*/
function mostrar()
{
	var edad;
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if(edad>17 || edad<13)
	{
		alert("No es adolescente");
	}


}//FIN DE LA FUNCIÓN
