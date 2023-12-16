import React, { Dispatch, useEffect } from "react";
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import TextInput from '../../../Components/TextInput.tsx'
import Background from '../../../Components/Background.tsx'
import Logo from '../../../Components/Logo.tsx'
import Button from '../../../Components/Button.tsx'

import { theme } from '../../../Core/theme.ts'
import HeaderMain from "../../../Components/HeaderMain.tsx";
import { useForm } from 'react-hook-form'
import { IAuthResult, ILogin } from './types.ts'
import { LoginUserAction, SetUserAction } from "../../../Redux/login/AuthAction.ts";
import { useDispatch, useSelector } from "react-redux";


// Define your Background, BackButton, Logo, Header, TextInput.tsx, and Button components here

interface LoginProps {
  navigation: {
    goBack: () => void;
    reset: (param: { index: number; routes: { name: string }[] }) => void;
    navigate: (screen: string) => void;
    replace: (screen: string) => void;
  };
}

const LoginScreen: React.FC<LoginProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state: any)=> state.auth.isAuth);
  useEffect(() => {
    if(isAuth)
    {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Menu' }],
      });
    }
  }, [isAuth]);


  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: "",
      password: ""
    },
  })

  const onLoginPressed = async (data: any) => {
    try {
      const model: ILogin = {
        email: data.email,
        password: data.password
      }
      console.log("login", model);
      await LoginUserAction(dispatch as Dispatch<any>, model);
    } catch (error:any) {
      console.log("Server error login", error);
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'Menu' }],
    });
  };

  // @ts-ignore
  return (
    <Background>
      <Logo />
      <HeaderMain>З поверненням</HeaderMain>
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
      <View style={styles.forgotPassword}>
        <TouchableOpacity onPress={() => navigation.navigate('ResetPasswordScreen')}>
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={handleSubmit(onLoginPressed)}>
        Login
      </Button>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default LoginScreen;


