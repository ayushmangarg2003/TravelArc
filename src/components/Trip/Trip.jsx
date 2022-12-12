import React from 'react'
import './Trip.css'
import TripData from './TripData'
import Assam from "../../assets/Assam.jpg"
import Varanasi from "../../assets/Varanasi.jpg"
import Srinagar from "../../assets/Srinagar.jpg"

const Trip = () => {
  return (
    <div className='trip'>
        <h1>Recent Trips</h1>
        <p>The previous Destinations we visited</p>
        <div className='tripcard'>
            <TripData
            image ={Assam} 
            heading = "Trip to Assam"
            text = "Assam is a state in northeastern India known for its wildlife, archeological sites and tea plantations. In the west, Guwahati, Assam’s largest city, features silk bazaars and the hilltop Kamakhya Temple. Umananda Temple sits on Peacock Island in the Brahmaputra river."
            />
            <TripData
            image ={Varanasi} 
            heading = "Trip to Varanasi"
            text = "Assam is a state in northeastern India known for its wildlife, archeological sites and tea plantations. In the west, Guwahati, Assam’s largest city, features silk bazaars and the hilltop Kamakhya Temple. Umananda Temple sits on Peacock Island in the Brahmaputra river."
            />
            <TripData
            image ={Srinagar} 
            heading = "Trip to Srinagar"
            text = "Srinagar is called the city of lakes and the Venice of the East, fascinating tourists from centuries with its beautiful picturesque Himalayan backdrop, glittering lakes that are surrounded by houseboats and Shikaras and the majesty of Mughal architecture."
            />
        </div>
    </div>
  )
}


export default Trip
