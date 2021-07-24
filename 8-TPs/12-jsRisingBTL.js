/*
Autor: Gabriel Servia
TP Ejercicio 12
Enunciado:
RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos
nos pide realizar una carga de datos validada e ingresada por ventanas emergentes
solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.     Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
*/
function ComenzarIngreso () 
{
 	// Definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
    var estadoCivil;
    var sueldoIngresado;
    var legajoIngresado;
    var nacionalidadIngresada;
    var nacionalidad;
    var flagNacionalidad;

    flagNacionalidad = "error ingreso nacionalidad";
    

    edadIngresada=prompt("Ingresar edad:");
    edadIngresada=parseInt(edadIngresada);

    while(edadIngresada < 18 || edadIngresada > 90)
    {
        edadIngresada=prompt("Solo se acepta edades entre 18 y 90 años inclusive. Ingresar edad:");
        edadIngresada=parseInt(edadIngresada);
    }

    sexoIngresado=prompt("Ingresar sexo, “M” para masculino y “F” para femenino:");

    while(sexoIngresado != 'M' && sexoIngresado != 'F')
    {
        sexoIngresado=prompt("Respete las opciones y mayusculas: “M” para masculino y “F” para femenino:");
    }

    if(sexoIngresado == 'F')
    {
        sexoIngresado="Femenino";
    }
    else
    {
        sexoIngresado="Masculino";
    }

    estadoCivilIngresado=prompt("Ingresar el numero que corresponda a su estado civil:\n1-Soltero/a\n2-Casado/a\n3-Divorciado/a\n4-Viudo/a");
    estadoCivilIngresado=parseInt(estadoCivilIngresado);

    while(estadoCivilIngresado < 1 || estadoCivilIngresado > 4)
    {
        estadoCivilIngresado=prompt("Utilice el numero de la opcion que le corresponda a su estado civil:\n1-Soltero/a\n2-Casado/a\n3-Divorciado/a\n4-Viudo/a");
        estadoCivilIngresado=parseInt(estadoCivilIngresado);
    }

    switch(estadoCivilIngresado)
    {
        case 1:
            estadoCivil="Soltero/a";
        break;
        case 2:
            estadoCivil="Casado/a";
        break;
        case 3:
            estadoCivil="Divorciado/a";
        break;
        case 4:
            estadoCivil="Viudo/a";
        break;
    }

    sueldoIngresado=prompt("Ingresar sueldo bruto:");
    sueldoIngresado=parseInt(sueldoIngresado);

    while(sueldoIngresado < 8000)
    {
        sueldoIngresado=prompt("El sueldo minimo es $ 8000. Ingresar sueldo bruto:");
        sueldoIngresado=parseInt(sueldoIngresado);
    }

    legajoIngresado=prompt("Ingresar N° de legajo:");
    legajoIngresado=parseInt(legajoIngresado);

    while(legajoIngresado < 1000 || legajoIngresado > 9999)
    {
        legajoIngresado=prompt("Legajos son de 4 cifras. Ingresar N° de legajo:");
        legajoIngresado=parseInt(legajoIngresado);
    }
    
    nacionalidadIngresada=prompt("Ingresar opcion “A”, “E”, o “N” segun su nacionalidad:\nA- Argentino/a\nE- Extranjero/a\nN- Nacionalizado/a");

    while(flagNacionalidad == "error ingreso nacionalidad")
    {
        switch(nacionalidadIngresada)
        {
            case "A":
                nacionalidad="Argentino/a";
                flagNacionalidad="ok";
            break;
            case "E":
                nacionalidad="Extranjero/a";
                flagNacionalidad="ok";
            break;
            case "N":
                nacionalidad="Nacionalizado/a";
                flagNacionalidad="ok";
            break;
            default:
                nacionalidadIngresada=prompt("Vuelva a intentar! Ingresar opcion “A”, “E”, o “N” segun su nacionalidad:\nA- Argentino/a\nE- Extranjero/a\nN- Nacionalizado/a");
            break;
        }
    }
    
    // Salida
    document.getElementById('txtIdEdad').value=edadIngresada;
    document.getElementById('txtIdSexo').value=sexoIngresado;
    document.getElementById('txtIdEstadoCivil').value=estadoCivil;
    document.getElementById('txtIdSueldo').value="$ "+sueldoIngresado;
    document.getElementById('txtIdLegajo').value=legajoIngresado;
    document.getElementById('txtIdNacionalidad').value=nacionalidad;
    alert("Ficha de datos completada con exito!");
}
