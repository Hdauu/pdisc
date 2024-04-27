// Ultimo ejercicio Recorrer ARRAYs y agregar elementos al div
let objetosRetirados = [
    {"tipo": "celular", "codigo": 15, "retirada": true},
    {"tipo": "netbook", "codigo": 1, "retirada": false}
];
let miHtml = "";
document.querySelector("#contenido").innerHTML = "";

objetosRetirados.forEach(elem => {
    miHtml += `<div>
                   <span>Tipo: ${elem.tipo}</span>
                   <span>Código: ${elem.codigo}</span>
                   <span>Retirada: ${elem.retirada}</span>
               </div>`;
});
document.querySelector("#contenido").innerHTML = miHtml;