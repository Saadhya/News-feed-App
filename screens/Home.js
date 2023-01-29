import { StyleSheet } from "react-native";
// components
import MainContainer from "../components/containers/MainContainers";
import StyledText from "../components/Texts/StyledText";
import NewsSection from "../components/News/NewsSections";
import ExploreSection from "../components/explore/ExploreSection";

// data
import { newsData, exploreData } from "../config/data";
export default function Home() {
  return (
    <MainContainer>
      <StyledText style={styles.sectionTitle} big>
        Trending News
      </StyledText>
      <NewsSection data={newsData} />
      <StyledText style={styles.sectionTitle} big>
        Explore News
      </StyledText>
      <ExploreSection data={exploreData} />
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    marginTop: 25,
    marginLeft: 25,
  },
});
