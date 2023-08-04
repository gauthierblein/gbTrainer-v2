import HeroDiapo from '../HeroDiapo/heroDiapo'
import { useState } from 'react'
import { Link } from "react-scroll"
import './hero.css'
import sound1 from "../../Assets/Sounds/click-2577.wav"

function Hero () {
    
    const [toggle, setToggle] = useState(false)
    function handleClick () {
        setToggle(!toggle);
    };

    function playClickSound() {
        new Audio(sound1).play()
    }


    return (
        <div className='hero-container'>
            <div className='hero-left'>
                <HeroDiapo />
            </div>
            <div className='hero-right'>
                <h1>GB Trainer</h1>
                <h2>Personal Trainer & Group Trainer à Genève</h2>
                <br />
                <div className='hero-description'>
                    <div className='hero-abilities'>
                        <h3>"L'écoute et l'adaptation sont au fondement même de mon approche du coaching. Je vous propose de travailler ensemble pour définir des objectifs motivants, variés et réalistes. Mettons en place le plan d'action pour y arriver."</h3>
                        <h4 onClick={handleClick}>Connaître ma formation</h4>
                        <div className={toggle ? 'abilities-list-open' : 'abilities-list-close'}>
                            <p>Master en Management du Sport</p>
                            <p>Brevet Professionnel Fitness & Musculation</p>
                            <p>1 an d'étude en diététique</p>
                            <p>Anglais parlé couramment</p>
                            <p>Professionnel du fitness depuis 2011</p>
                        </div>
                        
                    </div>
                    <div className='hero-values'>
                        <p>Effort</p>
                        <p>Exigence</p>
                        <p>Plaisir</p>
                        <p>Santé</p>
                        <p>équilibre</p>
                    </div>
                </div>
                <div className='hero-buttons'>
                    <Link
                        className='hero-buttons-link'
                        to ="services"
                        onClick={playClickSound}
                        >Tarifs
                    </Link>
                    <Link
                        className='hero-buttons-link'
                        to ="contact"
                        onClick={playClickSound}
                        >Travailler avec moi
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero