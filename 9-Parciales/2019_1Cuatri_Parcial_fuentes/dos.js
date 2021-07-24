/*
Autor: Gabriel Servia
Parcial 2019 - Ejercicio 2
*/
function mostrar()
{

	var nombrePersonaUno;
	var nombrePersonaDos;
	var pesoPersonaUno;
	var pesoPersonaUno;
	var sumaDePesos;
	var promedioDePeso;
	var cantidadDePersonas;
	var mensaje;

	nombrePersonaUno=prompt("PERSONA 1: ¿Cuál es su nombre?");
	pesoPersonaUno=prompt("PERSONA 1: ¿Cuál es su peso en KG?");
	pesoPersonaUno=parseInt(pesoPersonaUno);

	nombrePersonaDos=prompt("PERSONA 2: ¿Cuál es su nombre?");
	pesoPersonaDos=prompt("PERSONA 2: ¿Cuál es su peso en KG?");
	pesoPersonaDos=parseInt(pesoPersonaDos);

	sumaDePesos=pesoPersonaUno+pesoPersonaDos;

	cantidadDePersonas=2;

	promedioDePeso=sumaDePesos/cantidadDePersonas;

	mensaje="Ustedes se llaman "+nombrePersonaUno+" y "+nombrePersonaDos+", pesan "
			+pesoPersonaUno+" y "+pesoPersonaDos+" kilos respectivamente, que sumados son "
			+sumaDePesos+" kilos y el promedio de peso es "+promedioDePeso+" kilos.";

	alert(mensaje);
  
}
