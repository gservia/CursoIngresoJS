/*
Autor: Gabriel Servia
TP Ejercicio 4 con SWITCH/IF
Enunciado:
4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio
de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un
descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas”
se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es
del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra
marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10%
de ingresos brutos e informar del impuesto con el siguiente mensaje:
 "Usted pago X de IIBB.", siendo X el impuesto que se pagó.
 */
function CalcularPrecio ()
{

    var cantidadDeLamparas;
    var marca;
    var porcentajeDeDescuento;
    var descuento;
    var precioPorLampara;
    var precioSubtotal;
    var precioFinal;
    var porcentajeIiBb;
    var impuestoIiBb;

    // VERSION CON SWITCH

    // Entrada
    cantidadDeLamparas=document.getElementById('txtIdCantidad').value;
    cantidadDeLamparas=parseInt(cantidadDeLamparas);

    marca=document.getElementById('Marca').value;

    precioPorLampara=35;
    porcentajeIiBb=10;

    // Logica
    switch(cantidadDeLamparas)
    {
        case 5:
            switch(marca)
            {
                case 'ArgentinaLuz':
                    porcentajeDeDescuento=40;
                break;
                default:
                    porcentajeDeDescuento=30;
                break;
            }
        break;
        case 4:
            switch(marca)
            {
                case 'ArgentinaLuz':
                case 'FelipeLamparas':
                    porcentajeDeDescuento=25;
                break;
                default:
                    porcentajeDeDescuento=20;
                break;
            }
        break;
        case 3:
            switch(marca)
            {
                case 'ArgentinaLuz':
                    porcentajeDeDescuento=15;
                break;
                case 'FelipeLamparas':
                    porcentajeDeDescuento=10;
                break;
                default:
                    porcentajeDeDescuento=5;
                break;
            }
        break;
        case 2:
        case 1:
            porcentajeDeDescuento=0;
        break;
        default:
            porcentajeDeDescuento=50;
        break;
    }


    precioSubtotal=precioPorLampara*cantidadDeLamparas;

    descuento=precioSubtotal*porcentajeDeDescuento/100;

    precioFinal=precioSubtotal-descuento;

    if(precioFinal > 120)
    {
        impuestoIiBb=precioFinal*porcentajeIiBb/100;

        precioFinal=precioFinal+impuestoIiBb;

        mensaje="Precio final: $ "+precioFinal+". Usted pagó $ "+impuestoIiBb+" de IIBB.";
    }
    else
    {
        mensaje="Precio final: $ "+precioFinal;
    }


    // Salida
    document.getElementById('txtIdprecioDescuento').value=mensaje;


/* VERSION CON IF
    // Entrada
    cantidadDeLamparas=document.getElementById('txtIdCantidad').value;
    cantidadDeLamparas=parseInt(cantidadDeLamparas);

    marca=document.getElementById('Marca').value;

    precioPorLampara=35;
    porcentajeIiBb=10;

    // Logica
    if(cantidadDeLamparas > 5)
    {
        porcentajeDeDescuento=50;
    }
    else
    {
        if(cantidadDeLamparas == 5)
        {
            if(marca == "ArgentinaLuz")
            {
                porcentajeDeDescuento=40;
            }
            else
            {
                porcentajeDeDescuento=30;
            }
        }
        else
        {
            if(cantidadDeLamparas == 4)
            {
                if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
                {
                    porcentajeDeDescuento=25;
                }
                else
                {
                    porcentajeDeDescuento=20;
                }
            }
            else
            {
                if(cantidadDeLamparas == 3)
                {
                    if(marca == "ArgentinaLuz")
                    {
                        porcentajeDeDescuento=15;
                    }
                    else
                    {
                        if(marca == "FelipeLamparas")
                        {
                            porcentajeDeDescuento=10;
                        }
                        else
                        {
                            porcentajeDeDescuento=5;
                        }
                    }
                }
                else
                {
                    porcentajeDeDescuento=0;
                }
            }
        }
    }

    precioSubtotal=precioPorLampara*cantidadDeLamparas;

    descuento=precioSubtotal*porcentajeDeDescuento/100;

    precioFinal=precioSubtotal-descuento;

    if(precioFinal > 120)
    {
        impuestoIiBb=precioFinal*porcentajeIiBb/100;

        precioFinal=precioFinal+impuestoIiBb;

        mensaje="Precio final: $ "+precioFinal+". Usted pagó $ "+impuestoIiBb+" de IIBB.";
    }
    else
    {
        mensaje="Precio final: $ "+precioFinal;
    }


    // Salida
    document.getElementById('txtIdprecioDescuento').value=mensaje;

*/
    
}
