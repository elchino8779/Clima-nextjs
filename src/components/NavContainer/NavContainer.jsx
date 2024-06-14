import { useEffect, useState } from 'react';
import FormContainer from './FormContainer/FormContainer';
import style from './NavContainer.module.css';
import { motion } from 'framer-motion';
import { useDataContext } from '@/context/DataContext';

const NavContainer = () => {
  const { loader, currentData } = useDataContext();
  const [ubicacionActual, setUbicacionActual] = useState('');

  useEffect(() => {
    if (currentData.name) {
      const newUbicacion = currentData.name;
      const pais = currentData.sys.country;
      setUbicacionActual(`${pais} - ${newUbicacion}`);
    }
  }, [currentData]);

  return (
    <nav className={style.container}>
      <FormContainer />
      <div className={[style.loader, loader ? style.loaderNone : ''].join(' ')}>
        <l-tail-chase
          size="27"
          stroke="1"
          bg-opacity="0"
          speed="2"
          color="#c5d1d8"
        ></l-tail-chase>
      </div>
      {currentData.name && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={style.posicionActual}
        >
          {ubicacionActual}
        </motion.p>
      )}
    </nav>
  );
};

export default NavContainer;
