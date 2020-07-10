import React from 'react';
import { Text, Button } from 'react-native';
import DefaultView from '../components/DefaultView';
import { useGlobals } from '../contexts/global';

const HomeScreen = () => {
  const [{ session }, dispatch] = useGlobals();

  const handlePress = () => {
    dispatch({
      type: 'setSession',
      session: { name: 'Alex' },
    });
  };

  const handleClear = () => {
    dispatch({
      type: 'deleteSession',
    });
  };

  return (
    <DefaultView>
      <Text>Home</Text>
      <Text>Current Session: {JSON.stringify(session)}</Text>
      <Button title="DEMO" onPress={handlePress} />
      <Button title="CLEAR" onPress={handleClear} />
    </DefaultView>
  );
};

export default HomeScreen;
