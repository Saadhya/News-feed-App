import { useEffect, useState } from "react";
import { Appearance } from "react-native";
import { getData, storeData } from "./config/asyncStorage";
import { ThemeContext } from "./contexts/ThemeContext";
import RootStack from "./navigators/RootStack";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [theme, setTheme] = useState({ mode: "light" });

  const handleTheme = (newTheme) => {
    let mode;
    if (!newTheme) {
      mode = theme.mode === "dark" ? "light" : "dark";
      newTheme = { mode, system: false };
    } else {
      if (newTheme.system) {
        const systemcolorScheme = Appearance.getColorScheme();
        // alert(systemcolorScheme)
        mode = systemcolorScheme === "dark" ? "dark" : "light";
        newTheme = { ...newTheme, mode };
      } else {
        newTheme = { ...newTheme, system: false };
      }
    }
    setTheme(newTheme);
    storeData("newsFeedTheme", newTheme);
  };

  // monitor for system theme change
  if (theme.system) {
    Appearance.addChangeListener(({ colorScheme }) => {
      handleTheme({ system: true, mode: colorScheme });
    });
  }
  const fetchStoredTheme = async () => {
    try {
      const themeData = await getData("newsFeedTheme");

      if (themeData) {
        handleTheme(themeData);
      }
    } catch ({ message }) {
      alert(message);
    } finally {
      await setTimeout(() => {
        SplashScreen.hideAsync();
      }, 1000);
    }
  };

  useEffect(() => {
    fetchStoredTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      <RootStack />
    </ThemeContext.Provider>
  );
}
