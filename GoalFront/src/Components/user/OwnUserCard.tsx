import React, { FC } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { theme } from "../../Core/theme.ts";
import Icon from "../icon/Icon.tsx";

interface IProps {
  id: number,
  name: string,
  description: string,
  image_url: string
}

const OwnUserCard: FC<IProps> = ({ id, name, description, image_url }) => {

  return (
    <View style={styles.container}>
      <View style={[styles.headerRow]}>
        <Text style={styles.name}>
          {name}
        </Text>
        <Icon
          type={"admin"}
          size={30}
          focused={false}
          isDark={true}
        />
      </View>
      <View style={styles.headerRow}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: image_url }} style={styles.photo} />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoTextContainer}>
            <Text style={styles.text}>9999</Text>
            <Text style={styles.secondary}>Підписників</Text>
          </View>
          <View style={styles.infoTextContainer}>
            <Text style={styles.text}>9999</Text>
            <Text style={styles.secondary}>Підписок</Text>
          </View>
          <View style={styles.infoTextContainer}>
            <Text style={styles.text}>9</Text>
            <Text style={styles.secondary}>Цілей</Text>
          </View>
        </View>
      </View>
      <View style={styles.headerRow}>
        <Text style={styles.description}>
          {description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 10,
    backgroundColor: theme.colors.goalBackground,
    borderColor: theme.colors.primary,
    borderWidth: 1,
    alignSelf: "stretch"

  },
  infoContainer: {
    flex: 1,
    flexDirection: "row"
  },
  imageContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",
    maxWidth: 140
  },
  infoTextContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column"
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  headerCol: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between"
  },
  text: {
    color: theme.colors.text,
    fontWeight: "bold"
  },
  name: {
    fontSize: 20,
    color: theme.colors.text,
    fontWeight: "bold",
  },
  description: {
    fontSize: 10,
    color: "#666666"
  },
  secondary: {
    fontSize: 10,
    color: "#666666"
  },
  photo: {
    height: 120,
    width: 120,
    borderRadius: 90,
  }
});
export default OwnUserCard;
