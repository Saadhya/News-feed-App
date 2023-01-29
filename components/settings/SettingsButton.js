import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { colors } from "../../config/theme";
import StyledText from "../Texts/StyledText";

const SettingsButton = ({ icon, isActive, label, ...props }) => {
  let activeColors = colors;

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
          color={activeColors.tertiary}
        />
        <StyledText style={[{ color: activeColors.tertiary }, styles.label]}>
          {label}
        </StyledText>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  settingsItem: {
    padding: 25,
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
});

export default SettingsButton;
