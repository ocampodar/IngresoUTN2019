function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';
	var num;
	do {
		num = parseInt(prompt("Ingrese un numeros"))
		respuesta = prompt("Quiere ingresar otro numero?")
		



	} while (respuesta == "si");

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN