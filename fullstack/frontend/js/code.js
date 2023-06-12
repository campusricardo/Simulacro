
url = "http://localhost/Simulacro/apirest/api.php?cot=all";

(async function fetch_cotizaciones(){
    try {
        const response = await fetch(url);
        const result = await response.json();
        show_cotizaciones(result);
    } catch (error) {
        console.log(error);
    }

})();

function show_cotizaciones(result) {

    result.forEach(e => {
        const {id_cotizacion, id_empleado, id_constructora, id_producto, fecha, duracion, cantidad} = e;
        const tr = document.createElement('tr');
        tr.innerHTML += `
        <tr>
        <td> ${id_cotizacion}</td>
        <td>${id_empleado}</td>
        <td>${id_constructora}</td>
        <td>${id_producto}</td>
        <td>${fecha}</td>
        <td>${duracion}</td>
        <td>${cantidad}</td>
        </tr>
        `
        TrContainer.appendChild(tr);
    });

}