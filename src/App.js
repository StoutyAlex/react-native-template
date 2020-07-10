import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useGlobals } from './contexts/global';
import storage from './utils/storage';
import { SESSION_KEY } from './constants/session';

import MainNavigation from './navigation/MainNavigation';
import SplashScreen from './screens/SplashScreen';

const App = () => {
  const [{ session }, dispatch] = useGlobals();
  const [isLoading, setIsLoading] = useState(true);

  // Load session from local storage and assign it to global state
  useEffect(() => {
    (async () => {
      const storedSession = await storage.get(SESSION_KEY);
      if (storedSession) {
        dispatch({
          type: 'setState',
          state: storedSession,
        });
      }
    })();
  }, []);

  if (isLoading) return <SplashScreen onLoaded={() => setIsLoading(false)} />;

  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
