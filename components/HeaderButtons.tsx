import React from "react";
import { Platform } from "react-native";
import {
  HeaderButton,
  HeaderButtonProps,
} from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/customColors";

const CustomHeaderButton = (props: HeaderButtonProps) => {
  // console.log(props);
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === "android" ? "white" : Colors.primary_color}
    />
  );
};

export default CustomHeaderButton;
