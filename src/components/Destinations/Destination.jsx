import React from 'react'
import './Destinations.css'
import som1 from '../../assets/Somnath1.webp'
import som2 from '../../assets/Somnath2.webp'
import tm1 from '../../assets/tm1.webp'
import tm2 from '../../assets/tm2.webp'

const Destination = () => {
  return (
    <div className="destinations">
        <h1>Popular Destinations</h1>
        <p>Tours give you the opportunity to see a lot, within a time frame</p>
        <div className="first-des">
            <div className="des-text">
                <h2>Shree Somnath Jyotirling Temple</h2>
                <p>The Somnath temple, also called Somanātha temple or Deo Patan, is a Hindu temple located in Prabhas Patan, Veraval in Gujarat, India. It is one of the most sacred pilgrimage sites for Hindus and is believed to be first among the twelve jyotirlinga shrines of Shiva. It is unclear when the first version of the Somnath temple was built with estimates varying between the early centuries of the 1st-millennium to about the 9th-century CE.</p>
            </div>
            <div className="image">
                <img src={som1} alt="img" />
                <img src={som2} alt="img" />
            </div>
        </div>
        <div className="second-des">
            <div className="image2">
                <img src={tm1} alt="img" />
                <img src={tm2} alt="img" />
            </div>
            <div className="des-text">
                <h2>Taj Mahal</h2>
                <p>The Taj Mahal was commissioned by Shah Jahan in 1631, to be built in the memory of his wife Mumtaz Mahal, who died on 17 June that year, while giving birth to their 14th child, Gauhara Begum. Construction started in 1632,and the mausoleum was completed in 1648, while the surrounding buildings and garden were finished five years later. The imperial court documenting Shah Jahan's grief after the death of Mumtaz Mahal illustrates the love story held as the inspiration for the Taj Mahal.</p>
            </div>
        </div>

    </div>
  )
}

export default Destination
