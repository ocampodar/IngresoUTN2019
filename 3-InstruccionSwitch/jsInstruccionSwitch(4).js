function Mostrar() {
    //tomo el mes 
    var mesDelAnio = document.getElementById('mes').value;

    //alert (mesDelAño);
    //NUNCA USAR LA Ñ EN UN NOMBRE DE VARIABLE, SE USA "ANIO"
    switch (mesDelAnio) {
        case "Febrero":
            alert("Tiene 28 dias")
            break;
        case "Enero":
        case "Marzo":
        case "diciembre":
        case "Mayo":
        case "Julio":
        case "Agosto":
        case "Octubre":
            alert("Tiene 31 dias");
            break;
        default:
            alert("Tiene 30 dias")
            break;
    }



    }//FIN DE LA FUNCIÓN