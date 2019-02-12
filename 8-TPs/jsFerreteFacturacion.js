/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
var precio1;
var precio2;
var precio3;
var suma;
precio1 = parseFloat(document.getElementById("PrecioUno".value));
precio2 = parseFloat(document.getElementById("PrecioDos").value);
precio3 = parseFloat(document.getElementById("PrecioTres").value);

suma = precio1 + precio2 + precio3;

alert("la suma es de :" + suma.toFixed(2));

	
}
function Promedio () 
{   var precio1;
    var precio2;
    var precio3;
    var promedio;
    precio1 = parseFloat(document.getElementById("PrecioUno".value));
    precio2 = parseFloat(document.getElementById("PrecioDos").value);
    precio3 = parseFloat(document.getElementById("PrecioTres").value);
    
    promedio = precio1 + precio2 + precio3 / 3;
    
    alert("El promedio es de :" + promedio.toFixed(2));
	
}
function PrecioFinal () 
{
    
    var precio1;
    var precio2;
    var precio3;
    var suma;
    var precioconIva;
    var iva;
    
    
    precio1 = parseFloat(document.getElementById("PrecioUno".value));
    precio2 = parseFloat(document.getElementById("PrecioDos").value);
    precio3 = parseFloat(document.getElementById("PrecioTres").value);

    suma = precio1 + precio2 + precio3;
    iva = suma* 21 / 100;
    precioconIva = suma + iva;



    alert("El precio final es de  : $" + precioconIva.toFixed(2));







}