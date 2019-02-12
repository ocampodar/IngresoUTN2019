/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperaturaF;
    var temperaturaC;

    temperaturaF = parseFloat(document.getElementById("Temperatura").value);
    temperaturaC = (temperaturaF -32) *5/9;
    alert(temperaturaF + "º Fahrenheit son "+ temperaturaC.toFixed(2) + "º Centigrados");
    



}

function CentigradosFahrenheit () 
{
	var temperaturaC;
    var temperaturaF;

    temperaturaC = parseFloat(document.getElementById("Temperatura").value);

temperaturaF = (temperaturaC * 9/5) +32;

alert(temperaturaC + "º Centigrados son "+ temperaturaF.toFixed(2) + "º Fahrenheit");





}
