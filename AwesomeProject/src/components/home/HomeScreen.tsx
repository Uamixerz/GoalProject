import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { ICategoryItem } from "./types";
import CustomListview from "../category/show/CategoryListview";
import http_common from "../../http_common";
import { useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { CategoryActionType } from "../category/types";
import { SetCategoryAction } from "../category/CategoryActions";

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const myList = useSelector((state : any) => state.category.list);

  useEffect(() => {
    setIsLoading(true);
    SetCategoryAction(dispatch);
    setIsLoading(false);
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text style={{ fontSize: 25, textAlign: "center", fontWeight: "700" }}>Категорії</Text>
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" /> // Прогрес-бар показується поки завантажуються дані
        ) : (
          <CustomListview
            list={myList}
          />)}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFCFC"
  }
});
export default HomeScreen;
