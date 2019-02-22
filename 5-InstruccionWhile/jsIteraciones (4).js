function Mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));
while (numero <0 || numero > 10 ||isNaN(numero)) {
     numero = prompt("El numero es incorrecto. Intentelo nuevamente");

    }
    alert("Numero correcto");
document.getElementById("Numero").value = numero;
}//FIN DE LA FUNCIÓN