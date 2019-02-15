function Mostrar() {
    //tomo la edad  

    var edad;
    edad = parseInt(document.getElementById("edad").value);


    if (edad >= 18) {
        alert("Adulto");
    }
    else {

        if (edad < 13) {
            alert("Niño");
        }
        else {
            alert("Adolecente");
        }


    }









}//FIN DE LA FUNCIÓN
