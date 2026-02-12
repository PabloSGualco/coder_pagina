document.getElementById("form-guia").addEventListener("submit", function (e) {
    e.preventDefault();

    const dia = document.getElementById("dia").value;
    const tipoComida = document.getElementById("tipo_comida").value;
    const alimentacion = document.getElementById("alimentacion").value;

    const tabla = document.getElementById("tabla-guia");

    const dias = {
        "Lunes": 1,
        "Martes": 2,
        "Miércoles": 3,
        "Jueves": 4,
        "Viernes": 5,
        "Sábado": 6,
        "Domingo": 7
    };

    const comidas = {
        "Desayuno": 0,
        "Almuerzo": 1,
        "Merienda": 2,
        "Cena": 3
    };

    const fila = tabla.tBodies[0].rows[comidas[tipoComida]];
    fila.cells[dias[dia]].textContent = alimentacion;
});


document.getElementById("descargar-guia").addEventListener("click", function () {
    const tabla = document.getElementById("tabla-guia");
    let csv = "";

    for (let fila of tabla.rows) {
        let datos = [];
        for (let celda of fila.cells) {
            datos.push(`"${celda.innerText}"`);
        }
        csv += datos.join(",") + "\n";
    }

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "guia_semanal.csv";
    link.click();
});