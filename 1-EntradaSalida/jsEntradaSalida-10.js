/*
Autor: Gabriel Servia
Ejercicio: 10 bis
Enunciado:
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"
*/
function mostrarAumento()
{

	var sueldo;
	var porcentajeDeDescuento;
	var nuevoSueldo;

	sueldo=document.getElementById('txtIdImporte').value;
	sueldo=parseInt(sueldo);

	//porcentajeDeDescuento=25;
	porcentajeDeDescuento=prompt("Ingrese el porcentaje de descuento");
	porcentajeDeDescuento=parseInt(porcentajeDeDescuento);

	nuevoSueldo=sueldo*((100-porcentajeDeDescuento)/100);
	nuevoSueldo=parseInt(nuevoSueldo);

	document.getElementById('txtIdResultado').value=nuevoSueldo;
	
}
