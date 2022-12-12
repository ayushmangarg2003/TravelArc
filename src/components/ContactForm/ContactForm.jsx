import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div className='form-container'>
      <h1>Send us a message! </h1>
      <form action="">
        <input placeholder='Name' type="text" />
        <input placeholder='Email' type="email" />
        <input placeholder='Subject' type="text" />
        <textarea placeholder='Message' rows="4"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  )
}

export default ContactForm
