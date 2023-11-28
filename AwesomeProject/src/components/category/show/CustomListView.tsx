import React from 'react';
import { FlatList, StyleSheet, ScrollView } from "react-native";
import CustomRow from './CustomRow';
import { ICategoryItem } from "../../home/types";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
interface CustomRowProps {
  list: ICategoryItem[];

}

const CustomListView: React.FC<CustomRowProps> = ({ list }) => (
  <ScrollView style={styles.container}>
    <FlatList
      data={list}
      renderItem= {({ item }) => <CustomRow
        title={item.name}
        description={item.description}
        image_url={'https://slon.itstep.click/images/'+item.image}
      />}
    />
  </ScrollView>
);

export default CustomListView;
