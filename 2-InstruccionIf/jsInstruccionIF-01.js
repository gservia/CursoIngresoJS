/*
Autor: Gabriel Servia
IF Ejercicio 01
Enunciado:
Al ingresar una edad que sea igual a 15,
mostrar el mensaje "niña bonita".
*/
function mostrar()
{
	//Tomo la edad
	var edad;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	
	if(edad==15)
	{
		alert("Niña bonita");
	}

}//FIN DE LA FUNCIÓN
