import { StyleSheet, Text, View } from "react-native";
import React from "react";

const DefaultText = (props: any) => {
  return <Text style={styles.text}>{props.children}</Text>;
};

export default DefaultText;

const styles = StyleSheet.create({
  text: { fontFamily: "open-sans" },
});
