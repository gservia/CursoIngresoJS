/*
Autor: Gabriel Servia
Parcial 2019 - Ejercicio 3
*/
function mostrar()
{

	var precio;
	var porcentajeDeDescuento;
	var descuento;
	var precioFinal;

	precio=prompt("Ingrese el precio:");
	precio=parseInt(precio);
	
	porcentajeDeDescuento=prompt("Ingrese el porcentaje de descuento:");
	porcentajeDeDescuento=parseInt(porcentajeDeDescuento);


	descuento=precio*porcentajeDeDescuento/100;

	precioFinal=precio-descuento;


	document.getElementById('elPrecioFinal').value=precioFinal;

}
