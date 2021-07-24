/*
Autor: Gabriel Servia
IF Ejercicio 06
Enunciado:
Al ingresar una edad debemos informar si la persona
es mayor de edad (mas de 18 años) o adolescente
(entre 13 y 17 años) o niño (menor a 13 años).
*/
function mostrar()
{
	
	var edad;
	var mensaje;

	//Asumimos que el usuario solo ingresa numeros positivos
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if(edad>17)
	{
		mensaje="Adulto";
	}
	else
	{
		if(edad>12)
		{
			mensaje="Adolescente";
		}
		else
		{
			mensaje="Niño";
		}
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN
