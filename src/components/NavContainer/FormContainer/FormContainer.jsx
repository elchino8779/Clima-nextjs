'use client';

import Image from 'next/image';
import style from './FormContainer.module.css';
import localizacion from '../../../../public/nav/localizacion.png';
import { useEffect, useState } from 'react';
import { useDataContext } from '@/context/DataContext';

const FormContainer = () => {
  const [query, setQuery] = useState('');
  const [lastQuery, setLastQuery] = useState('');
  const { getData, getDataGeolocation, error } = useDataContext();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLastQuery(query);
    if (query && query !== lastQuery) {
      setQuery('');
      getData(query);
    }
  };

  const handleSubmitGeolocation = (e) => {
    e.preventDefault();
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        if (position.coords.latitude && position.coords.longitude) {
          getDataGeolocation(
            position.coords.latitude,
            position.coords.longitude
          );
        }
      },
      (error) => {
        console.log(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  };

  return (
    <form
      className={style.container}
      style={error ? { filter: 'drop-shadow(0px 0px 3px #ff8000)' } : {}}
      onSubmit={handleSubmit}
    >
      <Image
        className={style.search}
        style={error ? { opacity: 0 } : { opacity: 1 }}
        placeholder="empty"
        priority={true}
        src="/nav/lupa.png"
        alt="Lupa"
        width={30}
        height={30}
        onClick={handleSubmit}
      />
      <Image
        className={style.error}
        style={
          error
            ? { opacity: 1, visibility: 'visible' }
            : { opacity: 0, visibility: 'hidden' }
        }
        placeholder="empty"
        priority={true}
        src="/nav/error.png"
        alt="Error"
        width={30}
        height={30}
        onClick={handleSubmit}
      />
      <input
        className={style.input}
        type="text"
        name="text"
        id="text"
        value={query}
        onChange={handleChange}
        autoComplete="off"
      />
      <Image
        className={style.location}
        placeholder="empty"
        priority={true}
        src={localizacion}
        alt="Lupa"
        width={30}
        height={30}
        onClick={handleSubmitGeolocation}
      />
    </form>
  );
};

export default FormContainer;
