import { useContext, useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

const BASE_URL = 'http://localhost:8000';

const CitiesContext = createContext();

const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert('There was an error while loading data...');
      } finally {
        setIsLoading(false);
      }
    };
    fetchCities();
  }, []);

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
};

const useCities = () => {
  const context = useContext(CitiesContext);

  if (context === undefined)
    throw new Error('Cities context was used outside of Cities provider');

  return context;
};

CitiesProvider.propTypes = {
  children: PropTypes.element,
};

export { CitiesProvider, useCities };
