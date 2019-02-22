function Mostrar() {

    var contador = 0;
    var acumulador = 0;
    var num;


    while (contador < 5) {

        num = parseInt(prompt("Ingrese un numeros"))

        acumulador = acumulador + num
        contador = contador + 1
    }

    promedio = acumulador / 5
    document.getElementById("suma").value = acumulador;
    document.getElementById("promedio").value = promedio;

}//FIN DE LA FUNCIÓN