/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	

    var num1;
    var num2;
    var suma;
    num1 = parseInt(document.getElementById("numeroUno").value);
    num2 = parseInt(document.getElementById("numeroDos").value);
    
    suma = num1 + num2;
    
    alert("La suma es :" + suma);


	
}

function restar()
{
    
    var num1;
    var num2;
    var resta;
    num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;

    resta = num1 - num2;

    alert("La resta es :" + resta);



}

function multiplicar()
{ 
    var num1;
    var num2;
    var multiplicacion;
    num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;

    multiplicacion = num1 * num2;

    alert("La multiplicacion es :" + multiplicacion);


	
}

function dividir()
{
    
    
    var num1;
    var num2;
    var divicion;
    num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;

    divicion = num1 / num2;

    alert("La divicion es :" + divicion);


}

