import React from 'react';

import { Route } from '@enum/route';
import { RootStackParamList } from '@navigator/types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from './home';
import { Details } from './details';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const NavigationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={Route.Home}>
      <Stack.Screen name={Route.Home} component={Home} />
      <Stack.Screen name={Route.Details} component={Details} />
    </Stack.Navigator>
  );
};
