import * as React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './src/App';
import { initialState, reducer, StateProvider } from './src/contexts/global';

export default function Main() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
