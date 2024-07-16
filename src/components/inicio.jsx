import trainer from '../assets/images/trainer-removebg-preview.png';
import '../assets/styles/inicio.css';
import logo from '../assets/images/trainerLogo-removebg-preview.png';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import ClipLoader from 'react-spinners/ClipLoader'; // Importa el spinner que prefieras

const Inicio = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simula una llamada a una API
    setTimeout(() => {
      setData({ message: 'Datos cargados' });
      setLoading(false);
    }, 3000); // Simula un retraso de 3 segundos
  }, []);

  if (loading) {
    return (
      <div className='spinner-container'>
        <ClipLoader color='white' loading={loading} size={50} />
      </div>
    );
  }
  return (
    <div className='inicio'>
      <img className='logo' src={logo} alt='' />
      <div className='container-img'>
        <img src={trainer} alt='trainer' />
      </div>
      <div className='button-container'>
        <Link className='button-home' to='/trainers'>
          CONTINUAR
        </Link>
      </div>
    </div>
  );
};

export default Inicio;
