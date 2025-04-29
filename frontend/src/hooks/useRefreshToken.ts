import { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthContextProvider';

export const useRefreshToken = () => {
  const [pending, setPending] = useState(true);
  const location = useLocation();
  const { refreshAccessToken } = useContext(AuthContext);

  useEffect(() => {
    const refreshToken = async () => {
      await refreshAccessToken(true);
      setPending(false);
    }

    refreshToken();
  }, [location]);

  return { pending };
};
