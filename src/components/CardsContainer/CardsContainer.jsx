'use client';
import { useEffect, useState } from 'react';
import CardSecondContainer from '../CardSecondContainer/CardSecondContainer';
import style from './CardsContainer.module.css';
import { useDataContext } from '@/context/DataContext';

const CardsContainer = () => {
  const [hours, setHours] = useState('day');
  const { forecastData } = useDataContext();

  const getHours = () => {
    const date = new Date();
    const hours = date.getHours();
    hours > 6 && hours < 18 ? setHours('day') : setHours('night');
  };

  const variants = {
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.2,
      },
    }),
    hidden: { opacity: 0 },
  };

  useEffect(() => {
    getHours();
  }, []);

  return (
    <div className={hours === 'day' ? style.container : style.containerNight}>
      {forecastData.map((forecast, index) => (
        <CardSecondContainer
          key={index}
          forecast={forecast}
          variants={variants}
          index={index}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
