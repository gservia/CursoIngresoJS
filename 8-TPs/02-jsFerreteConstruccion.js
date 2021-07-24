/*
Autor: Gabriel Servia
TP Ejercicio 2
Enunciado:
2.	Para el departamento de Construcción:
A.	mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

	// Asumimos que las medidas ingresadas por el usuario son en metros

	var largo;
	var ancho;
	var perimetro;
	var metrosDeAlambre;

	largo=document.getElementById('txtIdLargo').value;
	largo=parseInt(largo);
	ancho=document.getElementById('txtIdAncho').value;
	ancho=parseInt(ancho);

	perimetro=largo*2+ancho*2;

	metrosDeAlambre=perimetro*3;

	alert("Necesita "+metrosDeAlambre+" metros de alambre");

}
function Circulo () 
{

	// Asumimos que las medidas ingresadas por el usuario son en metros

	var radio;
	var pi;
	var longitud;
	var metrosDeAlambre;

	radio=document.getElementById('txtIdRadio').value;
	radio=parseInt(radio);

	pi=3.14;

	longitud=2*pi*radio;

	metrosDeAlambre=longitud*3;

	alert("Necesita "+metrosDeAlambre+" metros de alambre");

}
function Materiales () 
{

	// Asumimos que las medidas ingresadas por el usuario son en metros
	
	var largo;
	var ancho;
	var metroCuadrado;
	var bolsaCementoPorMetroCuadrado;
	var bolsaCalPorMetroCuadrado;
	var bolsaCementoNecesarias;
	var bolsaCalNecesarias;

	largo=document.getElementById('txtIdLargo').value;
	largo=parseInt(largo);
	ancho=document.getElementById('txtIdAncho').value;
	ancho=parseInt(ancho);

	bolsaCementoPorMetroCuadrado=2;
	bolsaCalPorMetroCuadrado=3;

	metroCuadrado=largo*ancho;

	bolsaCementoNecesarias=bolsaCementoPorMetroCuadrado*metroCuadrado;

	bolsaCalNecesarias=bolsaCalPorMetroCuadrado*metroCuadrado;

	alert("Necesita "+bolsaCementoNecesarias+" bolsas de cemento, y "+bolsaCalNecesarias+" bolsas de cal");

}
