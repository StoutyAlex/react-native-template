import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreeen';

const Tab = createBottomTabNavigator();

const TabBarIcon = ({ focused, name }) => {
  const style = {
    color: focused ? '#0af' : '#000',
  };

  return (
    <View>
      <Text style={style}>Icon</Text>
    </View>
  );
};

const TabBarLabel = ({ focused, children }) => {
  const style = {
    color: focused ? '#ff0000' : '#000',
  };

  return <Text style={style}>{children}</Text>;
};

const MainNavigation = () => (
  <React.Fragment>
    <Tab.Navigator initialRouteName="Home" tabBarOptions={{ showLabel: true }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: (props) => <TabBarLabel {...props}>Home</TabBarLabel>,
          tabBarIcon: (props) => <TabBarIcon {...props} name="home" />,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarLabel: (props) => <TabBarLabel {...props}>Setting</TabBarLabel>,
          tabBarIcon: (props) => <TabBarIcon {...props} name="setting" />,
        }}
      />
    </Tab.Navigator>
  </React.Fragment>
);

export default MainNavigation;
