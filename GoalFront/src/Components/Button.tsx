import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import { theme } from '../Core/theme.ts';

interface ButtonProps {
  mode: 'text' | 'outlined' | 'contained';
  style?: any;
  children?: React.ReactNode;
  onPress?: any;
  // Define other props as needed based on usage
  // For example, onPress: () => void; or any other specific props
}

const Button: React.FC<ButtonProps> = ({ mode, style, ...props }) => {
  return (
    <PaperButton
      children={undefined} style={[
      styles.button,
      mode === "outlined" && { backgroundColor: theme.colors.surface },
      style
    ]}
      labelStyle={styles.text}
      mode={mode}
      {...props}    />
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 2,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
});

export default Button;
