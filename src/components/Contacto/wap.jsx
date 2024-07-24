import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppButton = () => {
  const phoneNumber = '1164884136'; // Reemplazo con el número de teléfono al que deseo enviar mensajes

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <button onClick={handleClick} className='fixed right-9 bottom-6'>
      <div>
      <div className='bg-transparent p-2 rounded-3xl hover:shadow-2xl hover:bg-green-500'>  {/* Elimina el fondo del icono */}
      <FontAwesomeIcon icon={faWhatsapp} className='text-green-500 text-9xl transition-colors duration-300 hover:text-white '/>
      </div>
      </div>
    </button>
  );
};

export default WhatsAppButton;


