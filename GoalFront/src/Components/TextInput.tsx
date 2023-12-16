import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput as Input, TextInputProps } from "react-native-paper";
import { theme } from "../Core/theme.ts";
import { Control, Controller, FieldValues, RegisterOptions } from "react-hook-form";

interface TextProps extends TextInputProps {
  errorText: any;
  description?: string;
  control: any;
  name: string;
  rules?: Omit<RegisterOptions<FieldValues, "email">, "disabled" | "setValueAs" | "valueAsNumber" | "valueAsDate"> | undefined;
}

const TextInput: React.FC<TextProps> = ({rules, control, errorText, description,name, ...props }) => {
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            selectionColor={theme.colors.primary}
            underlineColor="transparent"
            mode="outlined"
            {...props}
          />

        )}
        name={name}
      />
      {
        description && !errorText ? (
          <Text style={styles.description}>{description}</Text>
        ) : null
      }
      {
        errorText ? <Text style={styles.error}>{errorText}</Text> : null
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 12
  },
  input: {
    backgroundColor: theme.colors.surface
  },
  description: {
    fontSize: 13,
    color: theme.colors.secondary,
    paddingTop: 8
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8
  }
});

export default TextInput;
