/*
Autor: Gabriel Servia
TP Ejercicio 1
Enunciado:
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{

	var precioUno;
	var precioDos;
	var precioTres;
	var suma;

	precioUno=document.getElementById('txtIdPrecioUno').value;
	precioUno=parseInt(precioUno);
	precioDos=document.getElementById('txtIdPrecioDos').value;
	precioDos=parseInt(precioDos);
	precioTres=document.getElementById('txtIdPrecioTres').value;
	precioTres=parseInt(precioTres);

	suma=precioUno+precioDos+precioTres;

	alert("La suma de los precios es: "+suma);
	
}
function Promedio () 
{
	
	var precioUno;
	var precioDos;
	var precioTres;
	var cantidadDeProductos;
	var suma;

	precioUno=document.getElementById('txtIdPrecioUno').value;
	precioUno=parseInt(precioUno);
	precioDos=document.getElementById('txtIdPrecioDos').value;
	precioDos=parseInt(precioDos);
	precioTres=document.getElementById('txtIdPrecioTres').value;
	precioTres=parseInt(precioTres);

	suma=precioUno+precioDos+precioTres;
	cantidadDeProductos=3;

	promedio=suma/cantidadDeProductos;
	promedio=parseInt(promedio);

	alert("El promedio de los precios es: "+promedio);

}
function PrecioFinal () 
{
	
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	var porcentajeIva;
	var precioFinal;

	precioUno=document.getElementById('txtIdPrecioUno').value;
	precioUno=parseInt(precioUno);
	precioDos=document.getElementById('txtIdPrecioDos').value;
	precioDos=parseInt(precioDos);
	precioTres=document.getElementById('txtIdPrecioTres').value;
	precioTres=parseInt(precioTres);

	suma=precioUno+precioDos+precioTres;

	porcentajeIva=21;

	precioFinal=suma*(1+porcentajeIva/100);

	alert("El precio final con IVA es: "+precioFinal);

}
