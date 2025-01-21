export const fetchCoordinates = async (apiKey, city) => { 
try { 
    const response = await fetch( `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`); 
    const data = await response.json(); 
    if (data.length > 0) { 
        return { lat: data[0].lat, lon: data[0].lon }; 
    } else { 
        console.error('Cidade não encontrada'); return null; 
    } 
} catch (error) { 
    console.error('Erro ao buscar as coordenadas:', error); 
    return null; 
} 
};

export const fetchWeatherData = async (apiKey, lon, lat) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        const data = await response.json()
        return data.list[0]
    }catch(error) {
        console.error('Erro ao buscar dados do clima:', error)
        return null
    }
}

export const fetchForecastData = async (apiKey, lon, lat) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        const data = await response.json()
        return data.list
    } catch(error) {
        console.error('Erro ao buscar dados da previsão:', error)
        return []
    }
}

export const fetchAirQualityData = async (apiKey, lon, lat) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        const data = await response.json()
        return data.list[0]
    } catch(error) {
        console.error('Erro ao buscar dados sobre a qualidade do ar:', error)
        return null
    }
}