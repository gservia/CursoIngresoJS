/*
Autor: Gabriel Servia
Parcial 2019 - Ejercicio 5
Enunciado:
Bienvenidos (con IF).
Una empresa de viajes le solicita ingresar que continente le gustaria
visitar y la cantidad de días, la oferta dice que por día se cobra $100,
que se puede pagar de todas las maneras
Si es América tiene un 50% de descuento y si ademas paga por débito se le
agrega un 10% mas de descuento
Si es África tiene un 60% de descuento y si además paga por mercadoPago o
efectivo se le agrega un 15% mas de descuento
Si es Europa tiene un 20% de descuento y si ademas paga por débito se le
agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5%
cualquier otro continente tiene un recargo del 20%
*/
function mostrar()
{

	var continente;
	var cantidadDeDias;
	var precioPorDia;
	var porcentajeDeDescuento;
	var descuento;
	var porcentajeDeRecargo;
	var recargo;
	var medioDePago;
	var precioSubtotal;
	var precioFinal;

	// Entrada
	continente=document.getElementById('Marca').value;
	
	cantidadDeDias=prompt("¿Cuantos dias quiere viajar a "+continente+" ?");
	cantidadDeDias=parseInt(cantidadDeDias);

	medioDePago=prompt("Ingrese el numero del medio de pago que desea usar:\n1- Efectivo\n2- Tarjeta de debito\n3- Mercado Pago");	

	precioPorDia=100;

	porcentajeDeDescuento=0;

	porcentajeDeRecargo=20;


	// Logica
	if(continente == "América")
	{
		porcentajeDeDescuento=50;

		if(medioDePago == 2)
		{
			porcentajeDeDescuento=porcentajeDeDescuento+10;
		}
	}
	else
	{
		if(continente == "África")
		{
			porcentajeDeDescuento=60;

			if(medioDePago == 1 || medioDePago == 3)
			{
				porcentajeDeDescuento=porcentajeDeDescuento+15;
			}
		}
		else
		{
			if(continente == "Europa")
			{
				porcentajeDeDescuento=20;

				if(medioDePago == 2)
				{
					porcentajeDeDescuento=porcentajeDeDescuento+15;
				}
				else
				{
					if(medioDePago == 3)
					{
						porcentajeDeDescuento=porcentajeDeDescuento+10;
					}
					else
					{
						porcentajeDeDescuento=porcentajeDeDescuento+5;
					}
				}
			}
			else
			{
				recargo=precioPorDia*porcentajeDeRecargo/100;
				precioPorDia=precioPorDia+recargo;
			}
		}
	}

	precioSubtotal=cantidadDeDias*precioPorDia;

	descuento=precioSubtotal*(porcentajeDeDescuento/100);

	precioFinal=precioSubtotal-descuento;

	// Salida
	alert("El precio del viaje es: $ "+precioFinal);
}
