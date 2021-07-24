/*
Autor: Gabriel Servia
WHILE Ejercicio 05
Enunciado:
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.
*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado=prompt("Ingrese f para femenino ó m para masculino:");

	while(sexoIngresado != "f" && sexoIngresado != "m")
	{
		
		sexoIngresado=prompt("Vuelva a intentar! Solo ingrese la 'f' para femenino ó 'm' para masculino:");

	}

	document.getElementById('txtIdSexo').value=sexoIngresado;

}//FIN DE LA FUNCIÓN
