/* Las promesas son un tipo especial objetos de que nos permiten
    realizar tareas asincronas y luego manejar los resultados

    Nospermiten manejar una secuencialidad de acciones

    Utilizados regularmente para el consumo de APIS
*/

let promesa = new Promise((response, reject) => {
    let resp = 'Esta es la respuesta del servicio'
    response(resp)
    reject('Fallo')
});


promesa.then((response) => {
    console.log(response);
}).catch(error => {
    console.error(error);
});