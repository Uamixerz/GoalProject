import React from 'react';
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from 'react-native-paper';
import Background from "../../../Components/Background.tsx";
import BackButton from "../../../Components/BackButton.tsx";
import Logo from "../../../Components/Logo.tsx";
import Button from "../../../Components/Button.tsx";
import TextInput from "../../../Components/TextInput.tsx";
import { theme } from "../../../Core/theme.ts";
import HeaderMain from "../../../Components/HeaderMain.tsx";
import { useForm } from "react-hook-form";
import { IAuthResult, ILogin } from "../Login/types.ts";
import http_common from "../../../http_common.ts";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IRegister } from "./types.ts";
import Toast from "react-native-toast-message";


interface Props {
  navigation: {
    goBack: () => void;
    reset: (arg0: { index: number; routes: { name: string }[] }) => void;
    replace: (screenName: string) => void;
  };
}

const RegisterScreen: React.FC<Props> = ({ navigation }) => {

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      nickname: "",
      email: "",
      password: ""
    },
  })

  const onSignUpPressed = async (data: any) => {
    try {
      const model: IRegister = {
        nickname: data.nickname,
        email: data.email,
        password: data.password
      }
      console.log("login", model);
      const result = await http_common.post<IAuthResult>("/api/auth/register", model);
      console.log("Register result", result.data);
      Toast.show({
        type: 'success',
        position: 'top',
        text1: 'Успіх',
        text2: 'Вітаю ви успішно зареєструвались!'
      })
      navigation.reset({
        index: 0,
        routes: [{ name: 'LoginScreen' }],
      });
    } catch (error: any) {
      console.log("Server error login", error);
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Упс...',
        text2: 'Виникла якась помилка!'
      })
    }
  };
  const showToast = () => {
    console.log('Toast');
    Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'This is some something 👋'
    });
  }
  return (
    <Background>
      <Toast></Toast>
      <Logo />
      <HeaderMain>Реєстрація</HeaderMain>
      <TextInput
        label="NickName"
        name={'nickname'}
        returnKeyType="next"
        error={!!errors.nickname}
        errorText={errors.nickname?.message}
        control={control}
        rules= {{
          required: 'NickName is required',
          minLength: {
            value: 6,
            message: 'Minimum length is 6 characters',
          },
        }}
      />
      <TextInput
        label="Email"
        name={'email'}
        returnKeyType="next"
        error={!!errors.email}
        errorText={errors.email?.message}
        autoCapitalize="none"
        textContentType="emailAddress"
        keyboardType="email-address"
        control={control}
        rules= {{
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',
          },
        }}
      />
      <TextInput
        label="Password"
        name={'password'}
        returnKeyType="done"
        error={!!errors.password}
        errorText={errors.password?.message}
        secureTextEntry
        control={control}
        rules= {{
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Minimum length is 6 characters',
          },
        }}
      />
      <Button mode="contained" onPress={handleSubmit(onSignUpPressed)} style={{ marginTop: 24 }}>
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
      <Button
        onPress={showToast}
        mode="contained"
      >Toast open</Button>
    </Background>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default RegisterScreen;
