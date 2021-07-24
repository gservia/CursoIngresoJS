/* 
Autor: Gabriel Servia
Ejercicio: 04
Enunciado:
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;
	var mensaje;

	nombre=prompt("Ingrese nombre");
	mensaje="Su nombre es: "+nombre;

	document.getElementById('txtIdNombre').value=mensaje;
}
