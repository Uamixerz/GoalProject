import React from 'react';
import { StyleSheet, TextProps } from "react-native";
import { Text } from 'react-native-paper';
import { theme } from "../Core/theme.ts";

interface HeaderProps extends TextProps {
  children: React.ReactNode;
}

const HeaderMain: React.FC<HeaderProps> = ({ children, ...props }) => {
  return <Text style={styles.header} {...props}>{children}</Text>;
};

const styles = StyleSheet.create({
  header: {
    fontSize: 21,
    color: theme.colors.primary,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
});

export default HeaderMain;
