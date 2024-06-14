'use client';

import { useState } from 'react';
import style from './CardPrincipalContainer.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useDataContext } from '@/context/DataContext';
require('moment/locale/es');

const CardPrincipalContainer = () => {
  const [cardOpen, setCardOpen] = useState(false);
  const { currentData } = useDataContext();

  const handleCardOpen = () => {
    setCardOpen(!cardOpen);
  };

  return (
    <>
      {Object.keys(currentData).length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={style.container}
          style={cardOpen ? { width: '490px' } : {}}
        >
          <Image
            className={style.flecha}
            style={cardOpen ? { rotate: '-180deg' } : {}}
            src={`/iconsClima/flecha.png`}
            alt="Card"
            width={30}
            height={30}
            priority={true}
            onClick={handleCardOpen}
          />
          <div className={style.leftContainer}>
            <p className={style.dia}>Ahora</p>
            <img
              className={style.climaIcon}
              src={`/iconsClima/${currentData.weather[0].icon}.png`}
              alt="Card"
              width={120}
              height={120}
            />
            <p className={style.estado}>
              {`${currentData.weather[0].description
                .charAt(0)
                .toUpperCase()}${currentData.weather[0].description.slice(1)}`}
            </p>
            <div className={style.temperatura}>
              <div className={style.temperaturaLeft}>
                {`${currentData.main.temp.toFixed(0)}°`}
              </div>
              <Image
                src={`/iconsClima/temperatura.png`}
                alt="Card"
                width={55}
                height={55}
                priority={true}
              />
              <div className={style.temperaturaRight}>
                <p>{`Max: ${currentData.main.temp_max.toFixed(0)}°`}</p>
                <p>{`Min: ${currentData.main.temp_min.toFixed(0)}°`}</p>
              </div>
            </div>
          </div>
          <div
            className={style.rightContainer}
            style={
              cardOpen
                ? { opacity: '1', visibility: 'visible', left: '300px' }
                : {}
            }
          >
            <div className={style.informationCard}>
              <Image
                className={style.informationIcon}
                src={`/iconsClima/termica.png`}
                alt="Card"
                width={35}
                height={35}
                priority={true}
              />
              <p>{`${currentData.main.feels_like.toFixed(1)}°`}</p>
              <div className={style.popup}>
                <p>Sensación térmica</p>
              </div>
            </div>
            <div className={style.informationCard}>
              <Image
                className={style.informationIcon}
                src={`/iconsClima/humedad.png`}
                alt="Card"
                width={35}
                height={35}
                priority={true}
              />
              <p>{`${currentData.main.humidity} %`}</p>
              <div className={style.popup}>
                <p>Humedad</p>
              </div>
            </div>
            <div className={style.informationCard}>
              <Image
                className={style.informationIcon}
                src={`/iconsClima/presion.png`}
                alt="Card"
                width={35}
                height={35}
                priority={true}
              />
              <p>{`${currentData.main.pressure} hPa`}</p>
              <div className={style.popup}>
                <p>Presión Atmosférica</p>
              </div>
            </div>
            <div className={style.informationCard}>
              <Image
                className={style.informationIcon}
                src={`/iconsClima/viento.png`}
                alt="Card"
                width={35}
                height={35}
                priority={true}
              />
              <p>{`${currentData.wind.speed.toFixed(1)} km/h`}</p>
              <div className={style.popup}>
                <p>Viento</p>
              </div>
            </div>
            <div className={style.informationCard}>
              <Image
                className={style.informationIcon}
                src={`/iconsClima/visibilidad.png`}
                alt="Card"
                width={35}
                height={35}
                priority={true}
              />
              <p>{`${currentData.visibility} m`}</p>
              <div className={style.popup}>
                <p>Visibilidad</p>
              </div>
            </div>
            <div className={style.informationCard}>
              <Image
                className={style.informationIcon}
                src={`/iconsClima/03d.png`}
                alt="Card"
                width={35}
                height={35}
                priority={true}
              />
              <p>{`${currentData.clouds.all} %`}</p>
              <div className={style.popup}>
                <p>Nubocidad</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default CardPrincipalContainer;
