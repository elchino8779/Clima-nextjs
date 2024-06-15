'use client';
import Image from 'next/image';
import style from './CardSecondContainer.module.css';
import moment from 'moment';
import { motion } from 'framer-motion';
require('moment/locale/es');

const CardSecondContainer = ({ forecast, variants, index }) => {
  return (
    <motion.div
      custom={index}
      animate="visible"
      variants={variants}
      initial="hidden"
      className={style.container}
    >
      <p className={style.dia}>{`${moment(forecast.dt_txt)
        .calendar()
        .charAt(0)
        .toUpperCase()}${moment(forecast.dt_txt).calendar().slice(1)}hs`}</p>
      <p className={style.descripcion}>{`${forecast.weather[0].description
        .charAt(0)
        .toUpperCase()}${forecast.weather[0].description.slice(1)}`}</p>
      <div className={style.top}>
        <div className={style.topLeft}>
          <Image
            className={style.iconClima}
            src={`/iconsClima/${forecast.weather[0].icon}.png`}
            alt="Icono clima"
            width={60}
            height={60}
          />
        </div>
        <div className={style.topRight}>
          <p className={style.actual}>{`${forecast.main.temp.toFixed(0)}°`}</p>
          <Image
            className={style.termometro}
            src={`/iconsClima/temperatura.png`}
            alt="Icono clima"
            width={40}
            height={40}
          />
          <div className={style.temperaturas}>
            <p>{`Max: ${forecast.main.temp_max.toFixed(1)}°`}</p>
            <p>{`Min: ${forecast.main.temp_min.toFixed(1)}°`}</p>
          </div>
        </div>
      </div>
      <div className={style.bottom}>
        <div className={style.bottomContainer}>
          <div className={style.bottomContainerIcons}>
            <Image
              className={style.iconClima}
              src={`/iconsClima/termica.png`}
              alt="Icono clima"
              width={23}
              height={23}
            />
            <p>{`${forecast.main.feels_like.toFixed(1)}°`}</p>
          </div>
          <div className={style.bottomContainerIcons}>
            <Image
              className={style.iconClima}
              src={`/iconsClima/humedad.png`}
              alt="Icono clima"
              width={23}
              height={23}
            />
            <p>{`${forecast.main.humidity} %`}</p>
          </div>
        </div>
        <div className={style.bottomContainer}>
          <div className={style.bottomContainerIcons}>
            <Image
              className={style.iconClima}
              src={`/iconsClima/presion.png`}
              alt="Icono clima"
              width={23}
              height={23}
            />
            <p>{`${forecast.main.pressure} hPa`}</p>
          </div>
          <div className={style.bottomContainerIcons}>
            <Image
              className={style.iconClima}
              src={`/iconsClima/viento.png`}
              alt="Icono clima"
              width={23}
              height={23}
            />
            <p>{`${forecast.wind.speed.toFixed(1)} km/h`}</p>
          </div>
        </div>
        <div className={style.bottomContainer}>
          <div className={style.bottomContainerIcons}>
            <Image
              className={style.iconClima}
              src={`/iconsClima/visibilidad.png`}
              alt="Icono clima"
              width={23}
              height={23}
            />
            <p>{`${forecast.visibility} m`}</p>
          </div>
          <div className={style.bottomContainerIcons}>
            <Image
              className={style.iconClima}
              src={`/iconsClima/03d.png`}
              alt="Icono clima"
              width={23}
              height={23}
            />
            <p>{`${forecast.clouds.all} %`}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CardSecondContainer;
