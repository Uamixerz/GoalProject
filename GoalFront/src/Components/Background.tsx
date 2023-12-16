import React, { ReactNode } from 'react';
import { ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { theme } from '../Core/theme.ts';

import { ViewStyle } from 'react-native';

interface BackgroundProps {
  children: React.ReactNode;
  containerStyle?: ViewStyle; // Додаємо опційний параметр для стилю контейнера
}

const Background: React.FC<BackgroundProps> = ({ children, containerStyle }) => {
  return (
    <ImageBackground
      source={require('../Assets/background_dot.png')}
      resizeMode="repeat"
      style={styles.background}
    >
      <KeyboardAvoidingView style={[styles.container, containerStyle]} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.surface,
  },
  container: {
    flex: 1,
    width: '100%',
    padding: 20,
    maxWidth: 320,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Background;

