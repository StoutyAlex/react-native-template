import React from 'react';
import { Text, Button } from 'react-native';
import DefaultView from '../components/DefaultView';
import { useGlobals } from '../contexts/global';

const SettingScreen = () => {
  const [{ message }, dispatch] = useGlobals();

  const handlePress = () => {
    dispatch({
      type: 'setMessage',
      message: 'hello',
    });
  };

  const handleClear = () => {
    dispatch({
      type: 'setMessage',
      message: '',
    });
  };

  return (
    <DefaultView>
      <Text>Home</Text>
      <Text>Current Message: {JSON.stringify(message)}</Text>
      <Button title="DEMO" onPress={handlePress} />
      <Button title="CLEAR" onPress={handleClear} />
    </DefaultView>
  );
};

export default SettingScreen;
