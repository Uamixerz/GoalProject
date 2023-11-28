import React, { useEffect, useState } from "react";
import axios from "axios/index";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { ICategoryItem } from "./types";
import CustomListView from "../category/show/CustomListView";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
const HomeScreen = () => {
  const [myItems, setMyItems] = useState<ICategoryItem[]>([]);

  useEffect(() => {
    axios.get<ICategoryItem[]>("https://slon.itstep.click/api/categories/list").then(resp => {
      console.log("---server resp---", resp.data);
      setMyItems(resp.data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <CustomListView list={myItems} />
    </View>
  );
};
export default HomeScreen;
