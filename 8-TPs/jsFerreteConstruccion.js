/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

var largo;
var ancho;
var perimetro;
var alambre;

largo = parseInt(document.getElementById("Largo").value);
ancho = parseInt(document.getElementById("Ancho").value);
perimetro = (largo + ancho) * 2;
alambre = perimetro * 3;

alert("La cantidad necesaria de alambre es : " + alambre);







}
function Circulo () 
{
    
    var radio;
     var perimetro;
     var alambre;

     radio = parseInt(document.getElementById("Radio").value);
     perimetro = Math.PI * radio * 2;
     alambre = perimetro * 3;

     alert("La cantidad necesaria de alambre es : " + alambre.toFixed(2));













}
function Materiales () 
{
    var largo;
    var ancho;
    var cal;
    var cemento;
    var superficie;

    largo = parseInt(document.getElementById("Largo").value);
    ancho = parseInt(document.getElementById("Ancho").value);
    superficie = largo + ancho;
    cemento = superficie * 2;
    cal = superficie * 3;

   alert("Necesito comprar "+cemento+" bolsas de cemento y "+cal+" bolsas de cal");











    
}