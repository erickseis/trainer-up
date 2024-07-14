import trainer from '../assets/images/trainer-removebg-preview.png';
import '../assets/styles/inicio.css';
import logo from '../assets/images/trainerLogo-removebg-preview.png';
const Inicio = () => {
  return (
    <div className='inicio'>
      <img className='logo' src={logo} alt='' />
      <div className='container-img'>
        <img src={trainer} alt='trainer' />
      </div>
      <div className='button-container'>
        <button className='button-home'>CONTINUAR</button>
      </div>
    </div>
  );
};

export default Inicio;
