import { Image, StyleSheet, View } from "react-native";
import { colors } from "../config/theme";

// components
import MainContainer from "../components/containers/MainContainers";
import StyledText from "../components/Texts/StyledText";

// data
import { newsData } from "../config/data";

const Details = () => {
  let activeColors = colors;
  return (
    <MainContainer style={[{ backgroundColor: activeColors.secondary }]}>
      <Image source={newsData[0].image} style={styles.image} />

      <View
        style={[
          { backgroundColor: activeColors.secondary },
          styles.bottomSection,
        ]}
      >
        <StyledText
          numberOfLines={3}
          style={[{ color: activeColors.accent }, styles.title]}
          big
        >
          {newsData[0].title}
        </StyledText>
        <View style={styles.authorRow}>
          <View style={styles.author}>
            <Image source={newsData[0].avatar} style={styles.avatar} />
            <StyledText numberOfLines={2} bold>
              {newsData[0].author}
            </StyledText>
          </View>
          <StyledText
            style={[{ color: activeColors.tertiary }, styles.date]}
            small
          >
            {newsData[0].date}
          </StyledText>
        </View>
        <StyledText style={styles.content}>{newsData[0].content}</StyledText>
      </View>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  bottomSection: {
    padding: 25,
    top: -30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  title: {
    marginBottom: 20,
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
    borderRadius: 25,
    width: 50,
    height: 50,
    marginRight: 25,
  },
  date: {
    textAlign: "right",
    flex: 2,
  },
  content: {
    marginTop: 15,
  },
});
export default Details;
