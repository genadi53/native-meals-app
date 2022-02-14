import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Navidator from "./navigation/MealsAppNavigation";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans-bold": require("./assets/fonst/OpenSans-Bold.ttf"),
    "open-sans": require("./assets/fonst/OpenSans-Regular.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState<boolean>(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(e: Error) => console.log(e)}
      />
    );
  }

  return <Navidator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
