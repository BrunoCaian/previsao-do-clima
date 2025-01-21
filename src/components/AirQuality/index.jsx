import airImg from '../../assets/leaf.svg';

export default function AirQuality({ data }) {
    const getStatus = (aqi) => { 
        if (aqi <= 50) return "Boa"; 
        if (aqi <= 100) return "Moderada"; 
        if (aqi <= 150) return "Não saudável para grupos sensíveis"; 
        if (aqi <= 200) return "Não saudável"; 
        if (aqi <= 300) return "Muito não saudável"; 
        return "Perigosa"; 
    };

    return (
        <>
            <section className='air-quality'>
                <h2 className='title'>
                    <img src={airImg} alt="icone de folha de árvore" />
                    Qualidade do ar
                </h2>
                <p className='good'>{getStatus(data.main.aqi)}</p>
                <p className='number'>{data.main.aqi}</p>
                <div className='info'>
                    <div className='number'>
                        <p>{(data.components.pm2_5).toFixed(0)}</p>
                        <small>PM2.5</small>
                    </div>
                    <div className='number'>
                        <p>{(data.components.pm10).toFixed(0)}</p>
                        <small>PM10</small>
                    </div>
                    <div className='number'>
                        <p>{(data.components.so2).toFixed(0)}</p>
                        <small>SO₂</small>
                    </div>
                    <div className='number'>
                        <p>{(data.components.no2).toFixed(0)}</p>
                        <small>NO₂</small>
                    </div>
                    <div className='number'>
                        <p>{(data.components.o3).toFixed(0)}</p>
                        <small>O₃</small>
                    </div>
                    <div className='number'>
                        <p>{(data.components.co).toFixed(0)}</p>
                        <small>CO</small>
                    </div>
                </div>
            </section>
        </>
    );
}
