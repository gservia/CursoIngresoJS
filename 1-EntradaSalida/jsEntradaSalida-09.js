/*
Autor: Gabriel Servia
Ejercicio: 09 bis
Enunciado:
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".
*/
function mostrarAumento()
{

	var sueldo;
	var porcentajeDeAumento;
	var nuevoSueldo;

	sueldo=document.getElementById('txtIdSueldo').value;
	sueldo=parseInt(sueldo);

	//porcentajeDeAumento=10;
	porcentajeDeAumento=prompt("Ingrese el porcentaje de aumento");
	porcentajeDeAumento=parseInt(porcentajeDeAumento);

	nuevoSueldo=sueldo*(1+porcentajeDeAumento/100);
	nuevoSueldo=parseInt(nuevoSueldo);

	document.getElementById('txtIdResultado').value=nuevoSueldo;
	
}
