import trainer from '../assets/images/trainer-removebg-preview.png';
import '../assets/styles/inicio.css';
import logo from '../assets/images/trainerLogo-removebg-preview.png';
import { Link } from 'react-router-dom';

const Inicio = () => {
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
