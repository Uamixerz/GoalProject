// LoginScreen.tsx
import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
  TouchableOpacity, Animated, ActivityIndicator
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { useTheme } from "../../../contexts/ThemeContext";
import DocumentPicker, { DirectoryPickerResponse } from "react-native-document-picker";
import ScrollView = Animated.ScrollView;
import http_common from "../../../http_common";
import { CategoryActionType, ICategoryCreate } from "../types";
import { useDispatch } from "react-redux";
import { CreateCategoryAction } from "../CategoryActions";


const CategoryCreateScreen = () => {
  const navigation = useNavigation();
  const [pickedImage, setPickedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1
    },
    tinyLogo: {
      height: 100,
      width: 100,
      borderRadius: 30

    },
    logo: {
      width: 66,
      height: 58
    },
    contentContainer: {
      height: "100%",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      backgroundColor: colors.containerBackground,
      width: "100%",
      padding: 30,
      paddingBottom: 60,
      gap: 30,
      marginBottom: 0

    },
    logoContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      alignContent: "center",
      textAlign: "center",
      padding: 50
    },
    loginText: {
      color: colors.mainText,
      fontSize: 26,
      fontWeight: "bold",
      fontFamily: "Avenir"

    },
    input: {
      fontWeight: "400",
      fontFamily: "Avenir",
      color: colors.mainText,
      borderColor: colors.primary,
      borderWidth: 2,
      borderRadius: 15,
      padding: 10,
      fontSize: 16
    },
    label: {
      color: colors.label,
      fontSize: 16,
      marginBottom: 5,
      fontWeight: "500",
      fontFamily: "Avenir"
    },
    loginBtn: {
      backgroundColor: colors.primary,
      width: "100%",
      alignContent: "center",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 15,
      padding: 15

    },
    loginBtnText: {
      color: "#DEDEDE",
      fontWeight: "bold",
      fontSize: 16
    },
    rememberBlock: {
      alignItems: "center",
      marginTop: 15
    },
    forgotText: {
      color: colors.primary,
      fontWeight: "bold",
      fontSize: 14
    }
  });
  const dispatch = useDispatch();

  const pickImage = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.images]
      });
      if (result != null) {
        if (result.length > 0) {
          const selectImage = result[0];
          if (selectImage != null) {
            setPickedImage(selectImage.uri);
            console.log("Select image", selectImage);
          }
        }
      }
      // Handle the picked image, for example, set it in state
      //setPickedImage(result.uri);

    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker
        console.log("User cancelled the image picker");
      } else {
        // Handle other errors
        console.error("Error picking image:", err);
      }
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: "",
      description: ""
    }
  });
  const onSubmit = async (data: any) => {
    try {
      setIsLoading(true);
      const model: ICategoryCreate = {
        name: data.name,
        image: pickedImage ? pickedImage : "",
        description: data.description
      };
      await CreateCategoryAction(dispatch, model);
      setIsLoading(false);
      // @ts-ignore
      navigation.navigate("Home");
    } catch (error) {
      setIsLoading(false);
      console.log("Server error", error);
    }
  };


  // @ts-ignore
  return (
    // <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex: 1}}>
    <ScrollView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.tinyLogo} resizeMode={"contain"} source={require("../../../assets/logo.png")} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.loginText}>Створити категорію</Text>
        <View style={{}}>
          <Text style={styles.label}>Назва</Text>
          <Controller
            control={control}
            rules={{
              required: true
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                multiline={false}
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="name"
          />
          {errors.name && <Text style={{ color: "red" }}>Назва є обов'язковою!</Text>}
        </View>

        <View style={{}}>
          <Text style={styles.label}>Опис</Text>
          <Controller
            control={control}
            rules={{
              maxLength: 100
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                multiline={false}
                onBlur={onBlur}
                style={styles.input}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="description"
          />
        </View>

        {pickedImage && (
          <View>
            <Image source={{ uri: pickedImage }} style={{ width: 150, height: 150 }} />
          </View>
        )}
        <View style={{ marginBottom: 25 }}>

          <TouchableOpacity onPress={pickImage} style={styles.loginBtn}>
            <Text style={styles.loginBtnText}>Обрати фото</Text>
          </TouchableOpacity>

        </View>

        <View style={{ marginBottom: 50 }}>
          {isLoading ? (
            <ActivityIndicator size="large" color="#0000ff" /> // Прогрес-бар показується поки завантажуються дані
          ) : (
            <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.loginBtn}>
              <Text style={styles.loginBtnText}>Створити</Text>
            </TouchableOpacity>)}
          {/* <Button title='fdsfs' onPress={handleSubmit}></Button> */}
          <TouchableOpacity style={styles.rememberBlock} onPress={() => navigation.navigate("Home")}>
            <Text style={styles.forgotText}>До списку</Text>
          </TouchableOpacity>
        </View>

        {/* <Button title='Login' style={styles.loginBtn} /> */}
      </View>

      {/*<Button title="Create" onPress={handleSubmit(onSubmit)}/>*/}
      {/*    <Button*/}
      {/*        color="#233A6F"*/}
      {/*        title="Реєстрація"*/}
      {/*        onPress={() => navigation.navigate('Home')}*/}
      {/*    />*/}
    </ScrollView>
    // </KeyboardAvoidingView>
  );
};

export default CategoryCreateScreen;


