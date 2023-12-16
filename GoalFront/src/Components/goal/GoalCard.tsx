import React, { FC } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { theme } from "../../Core/theme.ts";
import Icon from "../icon/Icon.tsx";

interface IProps {
  id: number,
  title: string,
  description: string,
  image_url: string
}

const GoalCard: FC<IProps> = ({ id, title, description, image_url }) => {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: image_url }} style={styles.photo} />
        <View style={styles.headerText}>
          <Text style={styles.name}>Анатолій</Text>
          <Text style={styles.date}>25.01.2022</Text>
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.bottomIconsContainer}>
        <TouchableOpacity style={styles.icon}>
          <Icon
            type={"like"}
            size={30}
            focused={false}
            isDark={true}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Icon
            type={"comment"}
            size={30}
            focused={false}
            isDark={true}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Icon
            type={"send"}
            size={27}
            focused={false}
            isDark={true}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: theme.colors.goalBackground,
    borderColor: theme.colors.primary,
    borderWidth: 1,
    width: "100%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: theme.colors.goalBackground,
    elevation: 2
  },
  headerText: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: 10
  },
  title: {
    fontSize: 21,
    color: theme.colors.text,
    fontWeight: "bold",
    paddingVertical: 12
  },
  name: {
    color: theme.colors.text,
    fontWeight: "bold"
  },
  date: {
    fontSize: 10,
    color: "#666666"
  },
  titleContainer: {
    marginTop: 5,
    backgroundColor: theme.colors.goalBackground,
    borderBottomWidth: 1, // тут ви можете вибрати бажану товщину лінії
    borderBottomColor: theme.colors.primary, // колір підкреслення
  },
  description: {
    fontSize: 16,
    color: theme.colors.secondary,
    paddingVertical: 12
  },
  photo: {
    height: 50,
    width: 50,
    borderRadius: 25,
    margin:5
  },
  bottomIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
  },
  icon: {
    paddingRight: 5
  },
});
export default GoalCard;
