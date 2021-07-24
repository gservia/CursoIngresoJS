/*
Autor: Gabriel Servia
Parcial 2019 - Ejercicio 7
Enunciado:
Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las alturas en
centimetros(validar entre 0 y 250), el sexo (validar el sexo “f” o “m”) de
5 jugadores de básquet, informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de mujeres que su altura supere los 190 centimetros.
*/
function mostrar()
{

	var alturaEnCm;
	var sexo;
	var sumaDeAlturas;
	var mensaje;
	var contador;
	var promedio;
	var alturaMasBaja;
	var sexoDeJugadorMasBajo;
	var cantidadDeMujeresConAlturaCientoNoventaCm;

	contador=0;
	sumaDeAlturas=0;
	alturaMasBaja=251;
	cantidadDeMujeresConAlturaCientoNoventaCm=0;

	while(contador < 5)
	{

		alturaEnCm=prompt("Ingrese la altura del "+(contador+1)+"° jugador/a de basquet:");
		alturaEnCm=parseInt(alturaEnCm);

		while(alturaEnCm < 1 || alturaEnCm > 250)
		{
			alturaEnCm=prompt("Solo se aceptan alturas de 0 a 250 cm. Ingrese la altura del "+(contador+1)+"° jugador/a de basquet:");
			alturaEnCm=parseInt(alturaEnCm);
		}

		sexo=prompt("Ingresar sexo, “M” para masculino y “F” para femenino:");

		while(sexo != 'M' && sexo != 'F')
		{
			sexo=prompt("Escriba la letra correpondiente: “M” para masculino y “F” para femenino. Ingresar sexo:");
		}

		if(sexo == 'F')
	    {
	        sexo="Femenino";
	    }
	    else
	    {
	        sexo="Masculino";
	    }

		sumaDeAlturas=sumaDeAlturas+alturaEnCm;

		if(alturaEnCm < alturaMasBaja)
		{
			alturaMasBaja=alturaEnCm;
			sexoDeJugadorMasBajo=sexo;
		}

		if(sexo == 'F' && alturaEnCm > 190)
		{
			cantidadDeMujeresConAlturaCientoNoventaCm++;
		}

		contador++;
	}

	promedio=sumaDeAlturas/5;

	if(cantidadDeMujeresConAlturaCientoNoventaCm == 0)
	{
		cantidadDeMujeresConAlturaCientoNoventaCm="No hubo";
	}

	mensaje="Promedio de alturas: "+promedio+" cm\nAltura mas baja: "+alturaMasBaja+" cm (Sexo: "+sexoDeJugadorMasBajo+")\nCantidad de mujeres con altura superior a 190 cm: "+cantidadDeMujeresConAlturaCientoNoventaCm;

	alert(mensaje);
}
