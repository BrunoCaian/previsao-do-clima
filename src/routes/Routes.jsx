import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../components/Home';
import CurrentWeather from '../components/CurrentWeather';
import AirQuality from '../components/AirQuality';
import Forecast from '../components/Forecast';
import { fetchCoordinates, fetchWeatherData, fetchAirQualityData, fetchForecastData } from '../api';
import LoadingGif from '../assets/loading.gif';

const RoutesComponent = ({ apiKey }) => {
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState({
        weather: null,
        airQuality: null,
        forecast: [],
    });
    const loc = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(loc.search);
        const cityParam = params.get('city');
        if (cityParam) {
            setLoading(true);
            setError(false);
            fetchCoordinates(apiKey, cityParam).then((coords) => {
                if (coords) {
                    setCity(cityParam);
                    Promise.all([
                        fetchWeatherData(apiKey, coords.lon, coords.lat),
                        fetchAirQualityData(apiKey, coords.lon, coords.lat),
                        fetchForecastData(apiKey, coords.lon, coords.lat)
                    ]).then(([weatherData, airQualityData, forecastData]) => {
                        setData({
                            weather: weatherData,
                            airQuality: airQualityData,
                            forecast: forecastData.filter(item => item.dt_txt.includes('12:00:00'))
                        });
                        setLoading(false);
                    });
                } else {
                    setError(true);
                    setLoading(false);
                }
            }).catch(() => {
                setError(true);
                setLoading(false);
            });
        }
    }, [loc.search, apiKey]);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route
                path="/weather"
                element={
                    loading ? (
                        <div className="loading-message">
                            <img src={LoadingGif} alt="Carregando" />
                            <p>Carregando...</p>
                        </div>
                    ) : error ? (
                        <div className="error-message">
                            <span style={{ fontSize: '200px' }}>😕</span>
                            <p>Ops, cidade não encontrada!</p>
                        </div>
                    ) : (
                        data.weather && data.airQuality && data.forecast.length > 0 ? (
                            <main>
                                <CurrentWeather data={data.weather} city={city} />
                                <AirQuality data={data.airQuality} />
                                <Forecast data={data.forecast} />
                            </main>
                        ) : (
                            <p>Nenhum dado disponível</p>
                        )
                    )
                }
            />
        </Routes>
    );
};

export default RoutesComponent;
