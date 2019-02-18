function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	switch(mesDelAño){
case"Febrero":
alert("Este mes no tiene mas de 29 dias");
break;
case"Enero":
case"Marzo":
case"Abril":
case"Mayo":
case"Junio":
case"Julio":
case"Agosto":
case"Septiembre":
case"Octubre":
case"Noviembre":
case"diciembre":
alert("Este mes tiene 30 o mas dias");
break;
}
/*
	ESTA ES OTRA FORMA DE HACERLO; MEJOR
    
    switch(mesDelAño){
case"Febrero":
alert("Este mes no tiene mas de 29 dias");
break;

default:
alert("Este mes tiene 39 o mas dias"); */




}//FIN DE LA FUNCIÓN