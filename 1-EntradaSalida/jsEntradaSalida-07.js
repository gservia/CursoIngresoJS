/*
Autor: Gabriel Servia
Ejercicio: 07
Enunciado:
Debemos lograr tomar Los numeros por ID,
transformarlos a enteros (parseInt),realizar la operación
correcta y mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"
*/ 
function sumar()
{	
	var primerNumero;
	var segundoNumero;
	var suma;

	primerNumero=document.getElementById('txtIdNumeroUno').value;
	primerNumero=parseInt(primerNumero);
	
	segundoNumero=document.getElementById('txtIdNumeroDos').value;
	segundoNumero=parseInt(segundoNumero);

	suma=primerNumero+segundoNumero;

	alert("La suma es: "+suma);	
}

function restar()
{

	var primerNumero;
	var segundoNumero;
	var resta;

	primerNumero=document.getElementById('txtIdNumeroUno').value;
	primerNumero=parseInt(primerNumero);
	
	segundoNumero=document.getElementById('txtIdNumeroDos').value;
	segundoNumero=parseInt(segundoNumero);

	resta=primerNumero-segundoNumero;

	alert("La resta es: "+resta);
	
}

function multiplicar()
{ 

	var primerNumero;
	var segundoNumero;
	var multiplicacion;

	primerNumero=document.getElementById('txtIdNumeroUno').value;
	primerNumero=parseInt(primerNumero);
	
	segundoNumero=document.getElementById('txtIdNumeroDos').value;
	segundoNumero=parseInt(segundoNumero);

	multiplicacion=primerNumero*segundoNumero;

	alert("La multiplicacion es: "+multiplicacion);

}

function dividir()
{

	var primerNumero;
	var segundoNumero;
	var division;

	primerNumero=document.getElementById('txtIdNumeroUno').value;
	primerNumero=parseInt(primerNumero);
	
	segundoNumero=document.getElementById('txtIdNumeroDos').value;
	segundoNumero=parseInt(segundoNumero);

	division=primerNumero/segundoNumero;

	alert("La division es: "+division);
	
}
