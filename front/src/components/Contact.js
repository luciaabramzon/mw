

import React, { useState } from 'react';
import axios from 'axios';
import contactImg from '../images/contactImg.svg';
import '../styles/contact.css';

const api = axios.create({
  baseURL: 'http://localhost:8000',
});

const Contact = () => {
  const [nombre,setNombre]=useState('')
  const [apellido,setApellido]=useState('')
  const [telefono,setTelefono]=useState('')
  const [mensaje,setMensaje]=useState('')
  const [mensajeEnviado,setMensajeEnviado]=useState(true)
  const [loading,setLoading]=useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true) 
      await api.post('/contact', {nombre,apellido,telefono,mensaje});
      setLoading(false)
     setMensajeEnviado(false)
    } catch (error) {
      alert('Error al enviar el mensaje');
    }
  };

  const messageSent=()=>{
    setNombre('')
    setApellido('')
    setTelefono('')
    setMensaje('')
    setMensajeEnviado(true)
  }


  return (
    <div className="contact" id="contacto">
      <div className="contactImg">
        <img src={contactImg} alt="Contact" />
      </div>
      { mensajeEnviado && !loading? (
        <div className="contactForm">
        <form onSubmit={handleSubmit}>
          <h5>Contacto</h5>
          <div className="first">
            <div className="name">
              <label>Name</label>
              <input
                name="nombre"
                value={nombre}
                placeholder="Nombre"
                className="nombre"
                onChange={e=>setNombre(e.target.value)}
              />
            </div>
            <div className="surname">
              <label>Apellido</label>
              <input
                name="apellido"
                value={apellido}
                placeholder="Apellido"
                className="apellido"
                onChange={e=>setApellido(e.target.value)}
              />
            </div>
          </div>
          <div className="telefono">
            <label>Telefono</label>
            <input
              name="asunto"
              value={telefono}
              placeholder="Telefono"
              className="asuntoText"
              onChange={e=>setTelefono(e.target.value)}
            />
          </div>
          <div className="message">
            <label>Mensaje</label>
            <input
              name="mensaje"
              value={mensaje}
              placeholder="Escriba su mensaje"
              className="messageLabel"
              onChange={e=>setMensaje(e.target.value)}
            />
          </div>
          <div className="buttonForm">
            <button type="submit" className="sendMessage"  >
              Enviar Mensaje

            </button>
          </div>
        </form>
      </div>
      ):(
        <div className='sending'>
          {loading ? (
            <div className='enviando'>
          <h1 >ENVIANDO...</h1>
          </div>
          ):
          ( 
        <div className='recibed'>
          <p className='recibedMessage'>Recibimos tu mensaje correctamente, a la brevedad te contactaremos</p>
        <button onClick={messageSent} className='sendOther'>Enviar otro mensaje</button>
        </div>
      )}
      
    </div>
  )};
  </div>
  )
};

export default Contact;
