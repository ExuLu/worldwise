import { useContext } from 'react';
import { AuthContext } from '../contexts/FakeAuthContext';

const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error(
      'Authentication context was used outside of Authentication provider'
    );

  return context;
};

export { useAuth };
