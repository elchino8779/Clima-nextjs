import { createContext, useContext, useState } from 'react';

const DataContext = createContext();
const useDataContext = () => useContext(DataContext);

const DataContextProvider = ({ children }) => {
  const [currentData, setCurrentData] = useState({});
  const [forecastData, setForecastData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const getData = async (query) => {
    try {
      setCurrentData({});
      setForecastData([]);
      setLoader(true);
      const response = await fetch(`/api/location/${query}`, {
        method: 'GET',
      });
      const newData = await response.json();
      setCurrentData(newData.actualyDay);
      setForecastData(newData.forecasts.list);
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } finally {
      setLoader(false);
    }
  };

  const getDataGeolocation = async (lat, lon) => {
    try {
      setCurrentData({});
      setForecastData([]);
      setLoader(true);
      const response = await fetch(`/api/geolocation?lat=${lat}&lon=${lon}`, {
        method: 'GET',
      });
      const newData = await response.json();
      setCurrentData(newData.actualyDay);
      setForecastData(newData.forecasts.list);
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } finally {
      setLoader(false);
    }
  };

  const value = {
    currentData,
    forecastData,
    getData,
    getDataGeolocation,
    loader,
    error,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export { DataContextProvider, useDataContext };
