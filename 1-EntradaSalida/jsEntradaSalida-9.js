/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
var sueldo;
var aumento;
var nuevosueldo;

sueldo = parseFloat(document.getElementById("sueldo").value);
aumento = sueldo * 10 /100;
nuevosueldo = sueldo + aumento;

alert("El nuevo sueldo es :" + aumento.toFixed(2));


document.getElementById("resultado").value = nuevosueldo.toFixed(2);
    





}
