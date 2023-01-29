import { Text } from "react-native";
import { colors } from "../../config/theme";

const StyledText = ({ children, style, big, small, bold, ...props }) => {
  let activeColors = colors;
  return (
    <Text
      style={[
        {
          fontSize: small ? 14 : big ? 24 : 16,
          fontWeight: bold || big ? "bold" : "normal",
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

export default StyledText;
