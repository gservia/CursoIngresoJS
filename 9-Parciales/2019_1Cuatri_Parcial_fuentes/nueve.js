/*
Autor: Gabriel Servia
Parcial 2019 - Ejercicio 9
Enunciado:
Realizar el algoritmo que permita ingresar el nombre de un país, cantidad de habitantes en millones
entre 1 y 7000 (validar) la temperatura mínima que se registra en su territorio(entre -50 y 50) hasta
que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) El nombre del pais con menos habitantes
c) la cantidad de paises que superan los 40 grados.
d) el promedio de habitantes entre los paises ingresados
f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
Testeo con los siguientes valores
(pais=argentina;habitantes = 50; t =-300(mal) ,-15(bien) )
(pais=tunes;habitantes = 10; t =1 )
(pais=islandia;habitantes = -150(mal), 15(bien); t =-13 )
(pais=china;habitantes = 2000; t =-12 )
*/
function mostrar()
{
	var pais;
	var cantidadDeHabitantes;
	var temperatura;
	var temperaturasPares;
	var habitantesMinima;
	var paisesSuperanCuarentaGrados;
	var promedioDeHabitantes;
	var cantidadDePaises;
	var temperaturaMinima;
	var paisConTempMinima;
	var paisConMenosHabitantes;
	var sumaHabitantes;
	var flagContinuar;
	var flagPrimerValorHabitantes;
	var flagPrimerValorTempMinima;

	sumaHabitantes = 0;
	cantidadDePaises = 0;
	temperaturasPares = 0;
	paisesSuperanCuarentaGrados = 0;
	flagContinuar=true;
	flagPrimerValorHabitantes=true;
	flagPrimerValorTempMinima=true;

	while(flagContinuar == true)
	{
		pais=prompt("Ingresar el pais:");

		cantidadDeHabitantes=prompt("¿Cuantos habitantes tiene en millones? (Numero entre 1 y 7000)");
		cantidadDeHabitantes=parseInt(cantidadDeHabitantes);

		while(cantidadDeHabitantes < 1 || cantidadDeHabitantes > 7000)
		{
			cantidadDeHabitantes=prompt("Ingrese los habitantes en millones. Solo se aceptan entre 1 y 7000:");
			cantidadDeHabitantes=parseInt(cantidadDeHabitantes);
		}

		temperatura=prompt("¿Cual es la temperatura minima del pais? (Numero entre -50° y 50°)");
		temperatura=parseInt(temperatura);

		while(temperatura < -50 || temperatura > 50)
		{
			temperatura=prompt("Solo se aceptan temperaturas entre -50° y 50°:");
			temperatura=parseInt(temperatura);
		}

		// a) La cantidad de temperaturas pares

		if(temperatura%2 == 0)
		{
			temperaturasPares++;
		}

		// b) El nombre del pais con menos habitantes

		if(flagPrimerValorHabitantes == true)
		{
			flagPrimerValorHabitantes=false;
			habitantesMinima=cantidadDeHabitantes;
			paisConMenosHabitantes=pais;			
		}
		else
		{
			if(cantidadDeHabitantes < habitantesMinima)
			{
				habitantesMinima=cantidadDeHabitantes;
				paisConMenosHabitantes=pais;
			}
		}

		// c) La cantidad de paises que superan los 40 grados

		if(temperatura > 40)
		{
			paisesSuperanCuarentaGrados++;
		}

		// d) El promedio de habitantes entre los paises ingresados

		sumaHabitantes=sumaHabitantes+cantidadDeHabitantes;

		cantidadDePaises++;

		// f) La temperatura mínima ingresada, y nombre del pais que registro esa temperatura

		if(flagPrimerValorTempMinima == true)
		{
			flagPrimerValorTempMinima=false;
			temperaturaMinima=temperatura;
			paisConTempMinima=pais;
		}
		else
		{
			if(temperatura < temperaturaMinima)
			{
				temperaturaMinima=temperatura;
				paisConTempMinima=pais;
			}
		}

		flagContinuar = confirm("¿Desea continuar cargando paises?");
	}

	promedioDeHabitantes=sumaHabitantes/cantidadDePaises;

	document.write("Cantidad de temperaturas pares: "+temperaturasPares+
		"<br>Pais con menos habitantes: "+paisConMenosHabitantes+
		"<br>Cantidad de paises que superan los 40 grados: "+paisesSuperanCuarentaGrados+
		"<br>Promedio de habitantes: "+promedioDeHabitantes+
		"<br>Pais con la temperatura mas baja: "+paisConTempMinima+" "+temperaturaMinima+"°");
}
