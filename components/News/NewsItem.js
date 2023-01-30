import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { colors } from "../../config/theme";
import { ThemeContext } from "../../contexts/ThemeContext";
import StyledText from "../Texts/StyledText";

const NewsItem = ({
  image,
  title,
  avatar,
  author,
  date,
  content,
  small,
  ...props
}) => {
  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[{ backgroundColor: activeColors.secondary }, styles.container]}
      {...props}
      onPress={() => {
        navigation.navigate("Details", {
          image,
          title,
          avatar,
          content,
          author,
          date,
        });
      }}
    >
      <Image source={image} style={styles.image} />
      <View style={styles.bottomSection}>
        <StyledText
          numberOfLines={3}
          style={[{ color: activeColors.accent }, styles.title]}
          bold
        >
          {title}
        </StyledText>
        <View style={styles.authorRow}>
          <View style={styles.author}>
            <Image source={avatar} style={styles.avatar} />
            <StyledText numberOfLines={2} bold >
              {author}
            </StyledText>
          </View>
          <StyledText
            style={[{ color: activeColors.tertiary }, styles.date]}
            small
          >
            {date}
          </StyledText>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 370,
    width: 300,
    borderRadius: 25,
    marginRight: 20,
  },
  image: {
    width: 300,
    height: 190,
    borderRadius: 25,
  },
  title: {
    fontSize: 19,
  },
  bottomSection: {
    padding: 25,
    flex: 1,
    justifyContent: "space-between",
  },
  authorRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  author: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 25,
    flex: 3,
  },
  avatar: {
    borderRadius: 15,
    width: 30,
    height: 30,
    marginRight: 10,
  },
  date: {
    textAlign: "right",
    flex: 2,
  },
});

export default NewsItem;
