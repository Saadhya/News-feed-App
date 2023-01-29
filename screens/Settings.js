import { StyleSheet, Switch, View } from "react-native";
import { colors } from "../config/theme";

// components
import MainContainer from "../components/containers/MainContainers";
import StyledText from "../components/Texts/StyledText";

// data
import SettingsItem from "../components/settings/SettingsItem";
import { useState } from "react";
import SettingsButton from "../components/settings/SettingsButton";

const Settings = () => {
  let activeColors = colors;
  const [isActive, setIsActive] = useState(false);
  const handleSwitch = () => {
    setIsActive((previousState) => !previousState);
  };
  return (
    <MainContainer style={styles.container}>
      {/* first */}
      <StyledText style={{ color: activeColors.accent }} bold>
        User
      </StyledText>
      <View style={styles.section}>
        <SettingsItem label="Name">
          <StyledText>Krishna Vasudev</StyledText>
        </SettingsItem>
        <SettingsItem label="Joined on">
          <StyledText>30/01/2023</StyledText>
        </SettingsItem>
      </View>

      {/* second */}
      <StyledText style={{ color: activeColors.accent }} bold>
        Theme Switch
      </StyledText>
      <View style={styles.section}>
        <SettingsItem label="Dark Mode">
          <Switch
            value={isActive}
            onValueChange={handleSwitch}
            thumbColor={isActive ? activeColors.accent : activeColors.tertiary}
            ios_backgroundColor={activeColors.primary}
            trackColor={{
              false: activeColors.primary,
              true: activeColors.tertiary,
            }}
          />
        </SettingsItem>
      </View>

      {/* third */}
      <StyledText style={{ color: activeColors.accent }} bold>
        Theme Settings
      </StyledText>
      <View style={styles.section}>
        <SettingsButton label="Light" icon="lightbulb-on" isActive={false}>
          <StyledText>Krishna Vasudev</StyledText>
        </SettingsButton>
        <SettingsButton label="Dark">
          <StyledText>30/01/2023</StyledText>
        </SettingsButton>
        <SettingsButton label="System"></SettingsButton>
      </View>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
  section: {
    borderRadius: 30,
    overflow: "hidden",
    marginTop: 25,
    marginBottom: 25,
  },
});
export default Settings;
