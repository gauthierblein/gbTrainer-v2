import { useState } from 'react'
import './services.css'

// Images
import { BsDownload} from 'react-icons/bs'
import defaultPic from '../../Assets/Images/workout-5914643__340.jpg'
import personalTrainingPic from '../../Assets/Images/pexels-personalTraining.webp'
import groupTrainingPic from '../../Assets/Images/pexels-groupTraining.webp'
import companyTrainingPic from '../../Assets/Images/heroImage6.jpg'
import nutritionCoachingPic from '../../Assets/Images/nutrition-coaching-min.jpg'

//PDF documents
import personalTrainingPrices from "../../Assets/PDF/Tarifs GBTrainer-PT.pdf"
import groupTrainingPrices from "../../Assets/PDF/Tarifs GBTrainer-GroupTraining.pdf"
import nutritionCoachingPrices from '../../Assets/PDF/Tarifs GBTrainer-Nutrition.pdf'

//Sounds
import sound1 from "../../Assets/Sounds/click-2577.wav"

//Data
const servicesData = [
    {
        "id" : 0,
        "title" : "Personal Training",
        "description" : "La meilleure solution pour un apprentissage rapide et des résultats marquants",
        "subDescription" : "Quels sont vos objectifs ? Travaillons ensemble pour définir un projet et maximiser les chances de succès. Entraînements en direct, selon vos disponibilités et votre proximité géographique.",
        "price" : "A partir de CHF 70.- pour 1 séance d'une heure.",
        "picture" : personalTrainingPic,
        "pdf": personalTrainingPrices
    },
    {
        "id" : 1,
        "title" : "Group Training",
        "description" : "Des résultats et du fun en groupe. Team Building. Bootcamps",
        "subDescription" : "Vivez une expérience de groupe, sous forme de Cross-Training, permettant d'améliorer tous les aspects de la condition physique, mais également de créer du lien entre les participants.",
        "price" : "A partir de CHF 10.-/personne pour 1 séance d'une heure.",
        "picture" : groupTrainingPic,
        "pdf": groupTrainingPrices
    },
    {
        "id" : 2,
        "title" : "Coaching en entreprise",
        "description" : "En fonction des locaux et de la logisitique dont vous disposez",
        "subDescription" :"Veillez au bien être de vos collaborateurs en investissant sur leur santé physique et morale. La pratique d'une activité physique régulière diminue grandement le stress et l'absentéisme, tout en améliorant la cohésion des équipes. Possibilité pour moi de fournir le matériel adéquat.",
        "price" : "Prix à définir selon prestations. Contactez-moi.",
        "picture" : companyTrainingPic
    },
    {
        "id" : 3,
        "title" : "Coaching en nutrition",
        "description" : "Plans alimentaires sur 10 ou 20 semaines, en fonction de vos objectifs",
        "subDescription" : "Changez vos habitudes alimentaires durablement, et comprennez le pouvoir des aliments. Quel que soit votre objectif, maîtriser sa nutrition est un indispensable",
        "price" : "A partir de CHF 100.-/personne pour un plan de 10 semaines.",
        "picture" : nutritionCoachingPic,
        "pdf": nutritionCoachingPrices

    }
]

function Services () {
    const [selected, setSelected] = useState(false)
    const [index, setIndex] = useState(0)

    function changeIndexZero () {
        setSelected(true);
        setIndex(0)
        playClickSound()
    };

    function changeIndexOne () {
        setSelected(true);
        setIndex(1)
        playClickSound()
    };

    function changeIndexTwo () {
        setSelected(true);
        setIndex(2)
        playClickSound()
    };

    function changeIndexThree() {
        setSelected(true);
        setIndex(3)
        playClickSound()
    };

    function playClickSound() {
        new Audio(sound1).play()
      }

    return (

    <div name ="services" className='services-container'>
        <ul className="services-header">
            <li 
                className="services-header-links"
                onClick={changeIndexZero}
            >Personal Training  
            </li>
            <li 
                className="services-header-links"
                onClick={changeIndexOne}
            >Group Training  
            </li>
            <li 
                className="services-header-links"
                onClick={changeIndexTwo}
            >Coaching en entreprise 
            </li>
            <li 
                className="services-header-links"
                onClick={changeIndexThree}
            >Coaching en nutrition 
            </li>
        </ul>

        {!selected ?
        <div className='services-default'>
            <div className='services-img'>
                <img src={defaultPic} alt="trainer in Geneva" />
                <div></div>
                <div></div>
            </div>
            
            <div className='services-text'>
                <h1>Prestations</h1>
                <br />
                <h4>Je m'adapte à vos besoins et vous fais profiter de mon expérience.</h4>
                <br />
                <p>Définissons ensemble un projet wellness, performance, team-building.</p>
                <br />
                <p>Les moyens pour obtenir les résultats attendus.</p>
                <p>L'organisation et la logistique à mettre en place.</p>
            </div>
        </div>
        : <div className='services-main'>
            <div className='services-img'>
                <img src={servicesData[index].picture} alt={servicesData[index].title} />
                <div></div>
                <div></div>
            </div>
            <div className='services-text'>
                <h1>{servicesData[index].title}</h1>
                <br />
                <h2>{servicesData[index].description}</h2>
                <br />
                <h3>{servicesData[index].price}</h3>
                <br />
                <p>{servicesData[index].subDescription}</p>
                <br />
                <div className={servicesData[index].pdf? 'services-download' : "hidden"}>
                    <a
                    href={servicesData[index].pdf}
                    download={true}
                    >Télécharger tarifs
                    <BsDownload className='download-icon' size={15}/>
                    </a>
                </div>
            </div>
        </div>
        }    
    </div>
    )
}

export default Services