/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{
    var importe;
var descuento;
var resultado;

importe = parseFloat(document.getElementById("importe").value);
descuento= importe * 10 /100;
resultado = importe - descuento;

alert("El descuento es : $" + descuento.toFixed(2));

document.getElementById("resultado").value = resultado.toFixed(2);
    










}
