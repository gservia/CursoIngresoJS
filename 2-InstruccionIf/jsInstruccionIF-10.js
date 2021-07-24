/*
Autor: Gabriel Servia
IF Ejercicio 10
Enunciado:
Al presionar el Botón, asignar una nota RANDOM al examen
y mostrar: "EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/
function mostrar()
{
	var notaAleatoria;
	var mensaje;

	// Entrada: Genero el número RANDOM entre 1 y 10
	notaAleatoria=Math.floor(Math.random() * 10) + 1;

	// Logica
	if(notaAleatoria>8)
	{
		mensaje="EXCELENTE. Su nota: "+notaAleatoria;
	}
	else
	{
		if(notaAleatoria>3)
		{
			mensaje="APROBÓ. Su nota: "+notaAleatoria;
		}
		else
		{
			mensaje="Vamos, la proxima se puede. Su nota: "+notaAleatoria;
		}
	}

	// Salida
	alert(mensaje);

}//FIN DE LA FUNCIÓN
