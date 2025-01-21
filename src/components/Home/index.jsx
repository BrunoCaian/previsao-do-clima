import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from './Home.module.css'
import searchIcon from '../../assets/loupe.png'
import locationIcon from '../../assets/pin.svg'

export default function Home() {
    const [city, setCity] = useState('')
    const navigate = useNavigate()

const handleSubmit = (e) => {
    e.preventDefault()
    if(city) {
        navigate(`/weather?city=${city}`)
    }
}

    return (
        <div className={styles.home}>
            <h1>Previsão do tempo</h1>
            <form onSubmit={handleSubmit} >
                <img className={styles.location} src={locationIcon} alt="icone de localização" />
                <input 
                type="text" 
                placeholder="Digite o nome da cidade" 
                required 
                value={city}
                onChange={(e) => setCity(e.target.value)}
                
                />
                <button type="submit"><img src={searchIcon} alt="" /></button>
            </form>
        </div>
    )
}