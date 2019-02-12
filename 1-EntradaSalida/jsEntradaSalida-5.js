/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostrar()
{	
	var nombre;
    var edad;
    nombre = document.getElementById("elNombre").value;
    edad = document.getByElementById("laEdad").value;

    alert ("usted se llama " + nombre "y tiene " + edad "años");

}

