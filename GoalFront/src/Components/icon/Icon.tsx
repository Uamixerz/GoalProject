import React from "react";
import { SvgXml } from "react-native-svg";
import { StyleSheet, View } from "react-native";

import { addIcon, adminIcon, commentIcon, homeIcon, likeIcon, sendIcon, userIcon } from "./Icons";

export default function Icon({ type, focused, size = 30, inversia, isDark }: { type: any, focused: any, size?: number, inversia?: any, isDark: boolean }) {
  let xml: any;
  switch (type) {
    case "add":
      xml = addIcon(focused);
      break;
    case "comment":
      xml = commentIcon(focused);
      break;
    case "user":
      xml = userIcon(focused);
      break;
    case "home":
      xml = homeIcon(focused);
      break;
    case "like":
      xml = likeIcon(focused);
      break;
    case "send":
      xml = sendIcon(focused);
      break;
    case "admin":
      xml = adminIcon();
      break;
  }

  const PlusIcon = ({ focused, size = 30, inversia, isDark }: { focused: any, size?: number, inversia?: any, isDark: boolean }) => {
    return (
      <View style={styles.btnPlus}>
        <SvgXml xml={xml} width={size} height={size} />
      </View>
    );
  };

  return (
    <>
      <SvgXml xml={xml} width={size} height={size} />
    </>
  );
}

const styles = StyleSheet.create({
  btnPlus: {
    backgroundColor: "#FF6C00",
    borderRadius: 20,
    width: 70,
    maxHeight: 40,
  },
});
