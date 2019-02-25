function Mostrar() {

	var contador = 0;
	var acumulador = 0;
	var respuesta = 'si';
	var num;
	do {
		num = parseInt(prompt("Ingrese un numeros"))
		respuesta = prompt("Quiere ingresar otro numero?")
		acumulador = acumulador + num
		contador = contador + 1



	} while (respuesta == "si");

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;

}//FIN DE LA FUNCIÓN