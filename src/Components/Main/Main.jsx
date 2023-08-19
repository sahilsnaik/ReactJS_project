import React,{useEffect} from 'react'
import './main.css'

import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'

import img from '../../assets/img(1).jpg'
import img2  from '../../assets/img(2).jpg'
import img3 from '../../assets/img(3).jpg'
import img4 from '../../assets/img(4).jpg'
import img5 from '../../assets/img(5).jpg'
import img6 from '../../assets/img(6).jpg'
import img7 from '../../assets/img(7).jpg'
import img8 from '../../assets/img(8).jpg'
import img9 from '../../assets/img(9).jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
    {
        id:1,
        imgSrc: img,
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade:'CULTURAL RELAX',
        fees:'$700',
        description:'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.'
    },

    {
        id:2,
        imgSrc: img2,
        destTitle: 'Macha Picchu',
        location: 'Peru',
        grade:'CULTURAL RELAX',
        fees:'$600',
        description:'Huayna Picchu is a mountain in Peru, rising over Machu Picchu , the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the sun gate is simply spectacular'
    },

    {
        id:3,
        imgSrc: img3,
        destTitle: 'Great Barrier Reef',
        location: 'Australia',
        grade:'CULTURAL RELAX',
        fees:'$700',
        description:'One of the most remarkable Australian natural gifts is the Great Barrier Reef. the hallmark of this place is lavish and beauty, Always interesting to be in this place '

    },

    {
        id:4,
        imgSrc: img4,
        destTitle: 'Cappadocia',
        location: 'Turkey',
        grade:'CULTURAL RELAX',
        fees:'$800',
        description:'Cappadocia, located in central Turkey, is renowned for its extraordinary landscapes characterized by unique rock formations, cave dwellings, and fairy chimneys, creating a breathtaking and otherworldly environment. This place is known for its luxurious stays and adventurous activities'
    },

    {
        id:5,
        imgSrc: img5,
        destTitle: 'Guanajuato',
        location: 'Mexico',
        grade:'CULTURAL RELAX',
        fees:'$1100',
        description:'Guanajuato, Mexico, beckons with its vibrant and colorful colonial architecture, winding alleys, and a lively atmosphere that captures the essence of Mexican culture.'
    },

    {
        id:6,
        imgSrc: img6,
        destTitle: 'Cinque Terre',
        location: 'Italy',
        grade:'CULTURAL RELAX',
        fees:'$840',
        description:'Cinque Terre, a picturesque region on the Italian Riviera, boasts a series of five charming coastal villages nestled against stunning cliffs and overlooking the azure Mediterranean Sea. '
    },

    {
        id:7,
        imgSrc: img7,
        destTitle: 'Angkor Wat',
        location: 'Cambodia',
        grade:'CULTURAL RELAX',
        fees:'$790',
        description:'Angkor Wat, located in Cambodia, stands as one of the most remarkable archaeological sites in the world. This ancient temple complex, originally built as a Hindu temple and later transformed into a Buddhist monument, features intricate carvings, towering spires, and expansive courtyards that reflect the grandeur of the Khmer Empire.'
    },

    {
        id:8,
        imgSrc: img8,
        destTitle: 'Taj Mahal',
        location: 'India',
        grade:'CULTURAL RELAX',
        fees:'$900',
        description:'The Taj Mahal, situated in Agra, India, is an iconic symbol of love and architectural brilliance. This pristine white marble mausoleum, built by Emperor Shah Jahan in memory of his beloved wife, features intricate inlays, symmetric gardens, and a reflection pool that creates a breathtaking mirage.'
    },

    {
        id:9,
        imgSrc: img9,
        destTitle: 'Bali',
        location: 'Indonesia',
        grade:'CULTURAL RELAX',
        fees:'$500',
        description:'Bali, Indonesia, is a paradise that captivates travelers with its lush landscapes, vibrant cultural traditions, and stunning beaches. From ancient temples like Uluwatu and Tanah Lot to the terraced rice paddies of Ubud, the island offers a diverse range of experiences. '
    },
]

const Main = () => {


    useEffect (()=>{
        Aos.init({duration:2000})
    },[])

    return (
       <section className='main container section'>
        <div className='secTitle'>
            <h3 data-aos='fade-right' className='title'>
                Most visited destinations
            </h3>
        </div>

        <div className='secContent grid'>
        
        {
            Data.map(({id,imgSrc, destTitle, location, grade, fees,
                description}) => {
                return (
                    <div key={id} 
                    data-aos = 'fade-up' 
                    className='singleDestination'>
                    
                    <div className='imageDiv'>
                    <img src={imgSrc} alt={destTitle}/>
                    </div>

                    <div className="cardInfo">
                        <h4 className='destTitle'>
                            {destTitle}</h4>
                            <span className='continent flex'>
                                <HiOutlineLocationMarker className='icon'/>
                            
                            <span className='name'>{location}</span>
                            </span>
                            
                            <div className='fees flex'>
                                <div className='grade'>
                                <span>{grade}<small>+1</small></span>    
                                    </div>
                                    <div className='price'>
                                        <h5>{fees}</h5>
                                    </div>
                            </div>

                            <div className='desc'>
                                <p>{description}</p>
                            </div>

                            <button className='btn flex'>
                                DETAILS <HiOutlineClipboardCheck className='icon'/>
                            </button>

                    </div>
                    </div>
                    

                )
            })
        }

        </div>

       </section>
    )
}

export default Main