import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const SplashScreen = ({ onLoaded }) => {
  useEffect(() => {
    setTimeout(() => {
      onLoaded();
    }, 1000);
  }, [onLoaded]);

  return (
    <View style={styles.container}>
      <Text>Splash Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
});

export default SplashScreen;
