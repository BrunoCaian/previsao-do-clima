export default function Forecast({ data }) {
    const getDayName = (dateString) => { 
        const date = new Date(dateString); 
        const options = { weekday: 'long' }; 
        const dayName = date.toLocaleDateString('pt-BR', options); 
        return dayName.replace('-feira', '');
    }

    return (
        <>
            <section className='week-weather'>
                {data.map((item, index) => (
                    <div className='day' key={index}>
                        <h4 className='title'>{getDayName(item.dt_txt)}</h4>
                        <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} 
                        alt={item.weather[0].description} 
                        />
                        <p className='maxmin'>{(item.main.temp - 273.15).toFixed(0)}°</p>
                    </div>
                ))}
            </section>
        </>
    );
}
