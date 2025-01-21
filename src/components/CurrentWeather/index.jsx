import locationImg from '../../assets/pin.svg';
import windImg from '../../assets/temp-wind.svg';
import rainImg from '../../assets/temp-rain.svg';
import humidityImg from '../../assets/temp-humidity.svg';

export default function CurrentWeather({ data, city }) {
    return (
        <>
            <section className="temperature-now">
                <div className="location">
                    <img src={locationImg} alt="" />
                    <strong>{city}</strong>
                </div>
                <div className="temp">
                    <div className="number">
                        {(data.main.temp - 273.15).toFixed()}
                        <div className="maxmin">
                            {(data.main.temp_max - 273.15).toFixed()}°
                            <span>{(data.main.temp_min - 273.15).toFixed()}°</span>
                        </div>
                    </div>
                    <div className="celsius">°C</div>
                </div>
                <div className="statistics">
                    <div className="stats">
                        <img src={windImg} alt="Icone do vento" />
                        <div className="info">
                            <p>Vento</p>
                            <h5>{(data.wind.speed * 3.6).toFixed(0)}<span>km/h</span></h5>
                        </div>
                    </div>
                    <div className="stats">
                        <img src={humidityImg} alt="Icone da umidade" />
                        <div className="info">
                            <p>Umidade</p>
                            <h5>{data.main.humidity}<span>%</span></h5>
                        </div>
                    </div>
                    <div className="stats">
                        <img src={rainImg} alt="Icone da chuva" />
                        <div className="info">
                            <p>Chuva</p>
                            <h5>{(data.pop * 100).toFixed(0)}<span>%</span></h5>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
