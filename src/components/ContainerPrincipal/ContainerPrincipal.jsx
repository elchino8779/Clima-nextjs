import style from './ContainerPrincipal.module.css';
import CardPrincipalContainer from '../CardPrincipalContainer/CardPrincipalContainer';
import { useEffect, useState } from 'react';

const ImgFondo = () => {
  const [hours, setHours] = useState('day');

  const getHours = () => {
    const date = new Date();
    const hours = date.getHours();
    hours > 6 && hours < 18 ? setHours('day') : setHours('night');
  };

  useEffect(() => {
    getHours();
  }, []);

  return (
    <div className={hours === 'day' ? style.container : style.containerNight}>
      <img
        className={hours === 'day' ? style.image : style.imageNight}
        src={
          hours === 'day'
            ? './imgFondo/img-fondo-dia.png'
            : './imgFondo/img-fondo-noche.png'
        }
        alt="fondo"
      />
      <CardPrincipalContainer />
    </div>
  );
};

export default ImgFondo;
