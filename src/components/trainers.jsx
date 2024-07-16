import '../assets/styles/trainers.css';
import logo from '../assets/images/trainerLogo-removebg-preview.png';
import salad from '../assets/images/Nueva carpeta/alimentos-saludables.png';
import trainer from '../assets/images/Nueva carpeta/png-clipart-illustration-of-person-weight-lifting-weight-training-olympic-weightlifting-scalable-graphics-cartoon-lifting-weights-physical-fitness-arm.png';
import heart from '../assets/images/Nueva carpeta/depositphotos_338579948-stock-illustration-love-gym-weight-lift-barbel.png';
import balance from '../assets/images/Nueva carpeta/gratis-png-balanza-de-dibujos-animados-escala-de-peso-de-dibujos-animados-azul.png';
import camilo from '../assets/images/Nueva carpeta/camilo.png';
import camiloLetters from '../assets/images/Nueva carpeta/camilo-letras.png';

const Trainers = () => {
  return (
    <div className='general-container-trainer'>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='video'>
        <iframe
          width='400'
          height='255'
          src='https://www.youtube.com/embed/GQBvvA1HtTE?si=9D8mJaiPr7hvdYm3'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerpolicy='strict-origin-when-cross-origin'
          allowfullscreen
        ></iframe>
        <img className='camilo-letter' src={camiloLetters} alt='' />
      </div>
      <div className='skils-general'>
        <div className='list-skils'>
          <ul>
            <li>Asesoramiento</li>
            <li>Nutricion</li>
            <li>Rutinas</li>
            <li>Atencion 24h</li>
            <li>Cordial</li>
          </ul>
        </div>
        <div className='img-skils'>
          <ul>
            <li>
              <img src={salad} alt='' />
            </li>
            <li>
              <img src={trainer} alt='' />
            </li>
            <li>
              <img src={heart} alt='' />
            </li>
            <li>
              <img src={balance} alt='' />
            </li>
          </ul>
        </div>
        <div className='background-camilo'>
          <img src={camilo} alt='' />
        </div>
      </div>
      <div className='button-container'>
        <button className='button-home'>SUSCRIBIRME</button>
      </div>
    </div>
  );
};

export default Trainers;
