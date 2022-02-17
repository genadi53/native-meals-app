import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { enableScreens } from "react-native-screens";
import { Provider } from "react-redux";
import Navidator from "./navigation/MealsAppNavigation";
import store from "./store/reduxStore";

enableScreens(); // performance optimize

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

  return (
    <Provider store={store}>
      <Navidator />;
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
