
//Ap_key obtenida de https://home.openweathermap.org/api_keys

let api_key = '50445f101f49d13cb077990ba7500cbd'
let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let difKelvin = 273.15

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if (ciudad){
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(data => data.json())
    .then(data => mostarDatosClima(data))
}

function mostarDatosClima(data) {
    //Lee lo que se envia en la etiqueta ciudad
    const divDatosClima = document.getElementById('datosClima')
    //Borra la etiqueta
    divDatosClima.innerHTML = ''

    //console.log(data)

    //Craar valores que se quiern mostar
    const ciudadNombre = data.name
    const pais = data.sys.country
    const ciudadTemperatura = data.main.temp
    const humedad = data.main.humidity
    const descripcion = data.weather[0].description
    const latitud = data.coord.lat
    const longitud = data.coord.lon
    const icon = data.weather[0].icon

    //Crear elementos a mostrar en la pagina
    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre}, ${pais}`

    const ciudadTemp = document.createElement('h4')
    ciudadTemp.textContent = `La temperatura actual: ${Math.floor(ciudadTemperatura - difKelvin)}°C`

    const ciudadHumedad = document.createElement('h4')
    ciudadHumedad.textContent = `La humedad actual: ${humedad}%`

    const ciudadLatitudLongitud = document.createElement('p')
    ciudadLatitudLongitud.textContent = `Latitud: ${latitud}, Longitud: ${longitud}`

    const ico = document.createElement('img')
    ico.src = `http://openweathermap.org/img/wn/${icon}@2x.png`

    const ciudadDescripcion = document.createElement('p')
    ciudadDescripcion.textContent = `La descripcion meteorológica es: ${descripcion}`

    //Agregar elementos creados al div padre
    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(ciudadTemp)
    divDatosClima.appendChild(ciudadHumedad)
    divDatosClima.appendChild(ciudadLatitudLongitud)
    divDatosClima.appendChild(ico)
    divDatosClima.appendChild(ciudadDescripcion)
}
