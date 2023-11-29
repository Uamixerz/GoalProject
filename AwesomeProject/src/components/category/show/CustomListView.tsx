import React from 'react';
import { FlatList, StyleSheet, View } from "react-native";
import CustomRow from './CustomRow';
import { ICategoryItem } from "../../home/types";
import {useTheme} from "../../../context/ThemeContext";

const {colors} = useTheme();

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1
  },
});
interface CustomRowProps {
  list: ICategoryItem[];
}

const CustomListView: React.FC<CustomRowProps> = ({ list }) => (
  <View style={styles.container} >
    <FlatList
      data={list}
      renderItem= {({ item }) => <CustomRow
        title={item.name}
        description={item.description}
        image_url={'https://slon.itstep.click/images/'+item.image}
      />}
    />
  </View>
);

export default CustomListView;
