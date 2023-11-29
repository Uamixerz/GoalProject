import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { ICategoryItem } from "./types";
import CustomListview from "./CustomListview";
import http_common from "../../http_common";
import { useRoute } from "@react-navigation/native";

const HomeScreen = () => {
  const [list, setList] = useState<ICategoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const route = useRoute();

  const updateDataBase = () => {
    http_common.get<ICategoryItem[]>("/api/categories/list")
      .then(resp => {
        const { data } = resp;
        setList(data);
        setIsLoading(false);
        //console.log("Response data ---- ", data);
      })
      .catch(error => {
        setIsLoading(false);
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    // @ts-ignore
    if (route.params?.shouldUpdateDatabase) {
      setIsLoading(true);
      updateDataBase();
    }
  }, [route.params]);

  useEffect(() => {
    setIsLoading(true);
    updateDataBase();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text style={{ fontSize: 25, textAlign: "center", fontWeight: "700" }}>Категорії</Text>
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" /> // Прогрес-бар показується поки завантажуються дані
        ) : (
          <CustomListview
            list={list}
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
