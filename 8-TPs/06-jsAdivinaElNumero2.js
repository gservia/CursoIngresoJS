/*
Autor: Gabriel Servia
TP Ejercicio 6 Adivina el numero v2.0
Enunciado:
En esta oportunidad el juego evaluará tus
aptitudes a partir de la cantidad de intentos, 
por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.
*/

var numeroSecreto;
var contadorIntentos;
var numeroUsuario;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto=Math.floor((Math.random() * 100) + 1);
	console.log(numeroSecreto);

	contadorIntentos=0;

}

function verificar()
{

	numeroUsuario=document.getElementById('txtIdNumero').value;
	numeroUsuario=parseInt(numeroUsuario);

	contadorIntentos=contadorIntentos+1;
	
	document.getElementById('txtIdIntentos').value=contadorIntentos;



	switch(numeroUsuario)
	{
		case numeroSecreto:
			switch(contadorIntentos)
			{
				case 1:
					mensaje="Usted es un psíquico";
				break;
				case 2:
					mensaje="Excelente percepción";
				break;
				case 3:
					mensaje="Esto es suerte";
				break;
				case 4:
					mensaje="Excelente técnica";
				break;
				case 5:
					mensaje="Usted está en la media";
				break;
				case 6:
				case 7:
				case 8:
				case 9:
				case 10:
					mensaje="Falta tecnica";
				break;
				default:
					mensaje="Afortunado en el amor!!";
				break;
			}
		break;
		default:
			if(numeroUsuario < numeroSecreto)
			{
				mensaje="Falta para llegar al numero secreto";
			}
			else
			{
				mensaje="Te pasaste! Es menor el numero secreto";
			}
		break;
	}

	alert(mensaje);
}