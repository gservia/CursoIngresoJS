/*
Autor: Gabriel Servia
Parcial 2019 - Ejercicio 1
*/
function mostrar()
{

	var ladoUno;
	var ladoDos;
	var ladoTres;
	var perimetroEquilatero;
	var mensaje;

	ladoUno=prompt("Ingrese el primer lado (en cm) de un triangulo equilatero:");
	ladoUno=parseInt(ladoUno);

	ladoDos=prompt("Ingrese el segundo lado (en cm) de un triangulo equilatero:");
	ladoDos=parseInt(ladoDos);

	ladoTres=prompt("Ingrese el tercer lado (en cm) de un triangulo equilatero:");
	ladoTres=parseInt(ladoTres);

	perimetroEquilatero=ladoUno+ladoDos+ladoTres;

	mensaje="El perimetro de su triangulo equilatero es: "+perimetroEquilatero+" cm";

	alert(mensaje);

}
