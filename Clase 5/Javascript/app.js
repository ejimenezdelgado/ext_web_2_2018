//alert("Un mensaje de prueba");
/*var color = "";
while (color != "rojo") {
    color = prompt("Deme un color" +
        "(Escriba rojo para salir)");
    document.write("<p>" + color + "</p>");
}*/

function Imprimir() {
    var miArray = new Array(3);
    miArray[0] = 155;
    miArray[1] = 4;
    miArray[2] = 499;

    for (i = 0; i < 3; i++) {
        document.write("<p>Posición " + i +
            " valor " + miArray[i] + "</p>");
        document.write("<br>");
    }
}

//Imprimir();

function Saludar(evt) {
    console.log("Hola mundo");
}

function CambiarColor() {
    var x = 30;
    window.alert(x);
    window.document.bgColor = "red";
}

function ObtenerDatos() {
    personas = new Array();
    var persona1 = {
        nombre: "Carlos",
        apellido: "Herrera",
        edad: 30,
        curso: {
            nombre: "WEB",
            semestre: 2,
            DarSemestre: function () {
                window.alert(this.semestre);
            }
        },
        Imprimir: function () {
            document.write("<p>" + this.nombre + "</p>");
            document.write("<p>" + this.apellido + "</p>");
            document.write("<p>" + this.edad + "</p>");
        }
    }

    var persona2 = {
        nombre: "Ana",
        apellido: "Perez",
        edad: 25,
        Imprimir: function () {
            document.write("<p>" + this.nombre + "</p>");
            document.write("<p>" + this.apellido + "</p>");
            document.write("<p>" + this.edad + "</p>");
        }
    }

    personas.push(persona1);
    personas.push(persona2);

    for (var index = 0; index < personas.length; index++) {
        personas[index].Imprimir();
        console.log(personas[index].nombre);
    }

}