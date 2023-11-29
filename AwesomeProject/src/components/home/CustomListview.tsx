import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import CustomRow from "./CustomRow";
import { ICategoryItem } from "./types";
import { APP_ENV } from "../../env";

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

interface IProps {
  list: ICategoryItem[];
}

const CustomListview: React.FC<IProps> = ({ list }) => (
  <View style={styles.container}>
    <FlatList
      data={list}
      renderItem={({ item }) => (
        <CustomRow
          title={item.name}
          description={item.description}
          image_url={`${APP_ENV.BASE_URL}/images/${item.image}`}
        />
      )}
      contentContainerStyle={{ paddingBottom: 84 }} // Додайте відступ вниз, якщо не вистачає місця для останнього елемента
    />
  </View>
);

export default CustomListview;
