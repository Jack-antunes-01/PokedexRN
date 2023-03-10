import React from 'react';
import { ThemeProvider } from 'styled-components';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import themes from './src/global/themes/themes';
import { NavigationStack } from './src/routes';
import { navigationRef } from './src/navigator';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <ThemeProvider theme={themes}>
        <SafeAreaView style={backgroundStyle}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <NavigationStack />
        </SafeAreaView>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
