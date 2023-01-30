import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useContext } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { colors } from "../../config/theme";
import { ThemeContext } from "../../contexts/ThemeContext";
import StyledText from "../Texts/StyledText";

const SettingsButton = ({ icon, isActive, label, ...props }) => {
    // const theme = {mode:"dark"}
  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];
  
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: activeColors.secondary,
        },
        styles.settingsItem,
      ]}
      {...props}
    >
      <View style={styles.labelGroup}>
        <MaterialCommunityIcons
          name={icon}
          size={24}
          style={styles.icon}
          color={activeColors.tertiary}
        />
        <StyledText style={[{ color: activeColors.tertiary }, styles.label]}>
          {label}
        </StyledText>
      </View>
      <MaterialCommunityIcons
        name={
          isActive ? "checkbox-marked-circle" : "checkbox-blank-circle-outline"
        }
        size={24}
        style={styles.icon}
        color={isActive ? activeColors.accent : activeColors.tertiary}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  settingsItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    paddingHorizontal: 25,
    marginBottom: 2,
  },
  label: {
    fontStyle: "italic",
  },
  labelGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 15,
  },
});

export default SettingsButton;
