import { useContext } from 'react';
import { CitiesContext } from '../contexts/CitiesContext';

const useCities = () => {
  const context = useContext(CitiesContext);

  if (context === undefined)
    throw new Error('Cities context was used outside of Cities provider');

  return context;
};

export { useCities };
