import React from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from "react-native";
import Icon from "../../icon/Icon";
import { useDispatch } from "react-redux";
import { DeleteCategoryAction } from "../CategoryActions";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 5,
    backgroundColor: "#FFF",
    elevation: 2
  },
  title: {
    fontSize: 16,
    color: "#000"
  },
  container_text: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 12,
    justifyContent: "center"
  },
  description: {
    fontSize: 11,
    fontStyle: "italic"
  },
  photo: {
    height: 50,
    width: 50
  },
  container_buttons: {
    flex: 0,
    flexDirection: "column",
    justifyContent: "flex-end"
  },
  buttonsEditDelete: {
    width: "100%",
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 5
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

interface CustomRowProps {
  id:number,
  title: string;
  description: string;
  image_url: string;
}

const CategoryRow: React.FC<CustomRowProps> = ({id, title, description, image_url }) => {
  const dispatch = useDispatch();

  const deleteItem=(id:number)=>{
    DeleteCategoryAction(dispatch,id);
  }
  const navigation = useNavigation();

  return (
  <View style={styles.container}>
    <Image source={{ uri: image_url }} style={styles.photo} />
    <View style={styles.container_text}>
      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.description}>
        {description}
      </Text>
    </View>
    <View style={styles.container_buttons}>
      <Text style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buttonsEditDelete} onPress={()=>{
          console.log('Edit');
          // @ts-ignore
          navigation.navigate('CategoryEditScreen');
        }}>
          <Icon
            type={"editIcon"}
            size={35}
            focused={false}
            isDark={false}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonsEditDelete} onPress={() => deleteItem(id)}>
          <Icon
            type={"delete"}
            size={35}
            focused={false}
            isDark={false}
          />
        </TouchableOpacity>
      </Text>
    </View>
  </View>);
};

export default CategoryRow;
