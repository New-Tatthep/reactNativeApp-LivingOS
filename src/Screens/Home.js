import React from "react";
import {
  Text,
  Dimensions,
  StyleSheet,
  View,
  Linking,
  Image,
  TouchableOpacity,
  Button,
  ScrollView,
  Modal,
} from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import Lightbox from "react-native-lightbox";

const colors = ["tomato", "thistle", "skyblue", "teal"];
const imagesZoom = [
  {
    url: "https://localyse.eu/wp-content/uploads/2020/06/google_maps_featured_image.jpg",
  },
];

export default function Home({ navigation, navigator }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
          backgroundColor:'#3333'
        }}
      >
        <TouchableOpacity
          style={styles.ButtonBackCarouselPage}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.textInnerButtonLogout}>Log Out</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ButtonListViewCarouselPage}
          onPress={() => navigation.navigate("ListView")}
        >
          <Text style={styles.textInnerButtonListView}>ListView</Text>
        </TouchableOpacity>
      </View>

      <SwiperFlatList showPagination>
        <View style={[styles.child, { backgroundColor: "tomato" }]}>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://www.thelivingos.com/")}
            style={styles.tinyLogo}
          >
            <Image
              style={styles.tinyLogo}
              source={{
                uri: "https://www.thelivingos.com/wp-content/uploads/2018/05/fav.png",
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.child, { backgroundColor: "thistle" }]}>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://www.google.co.th/maps")}
            style={styles.tinyLogo}
          >
            <Image
              style={styles.tinyLogo}
              source={{
                uri: "https://localyse.eu/wp-content/uploads/2020/06/google_maps_featured_image.jpg",
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.child, { backgroundColor: "skyblue" }]}>
          <Lightbox navigator={navigator}>
            <Image
              style={styles.ImageZoom}
              resizeMode="contain"
              source={{
                uri: "https://camo.githubusercontent.com/eae0c64510649119dc5562741ecfb9fa137c7f79f40d61648fad843479da2225/68747470733a2f2f7777772e73696d706c696c6561726e2e636f6d2f696365392f667265655f7265736f75726365735f61727469636c655f7468756d622f52656163745f4e61746976655f5475746f7269616c2e6a7067",
              }}
            />
          </Lightbox>
        </View>
      </SwiperFlatList>
    </View>
  );
}
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  child: { width, justifyContent: "center" },
  text: { fontSize: 50, textAlign: "center" },
  tinyLogo: {
    width: 280,
    height: 200,
    margin: 7,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 45,
  },
  ImageZoom: {
    width: 350,
    height: 250,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 30,
    borderRadius: 7,
  },
  ButtonBackCarouselPage: {
    backgroundColor: "blue",
    borderWidth: 1,
    width: 100,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },
  ButtonListViewCarouselPage: {
    backgroundColor: "transparent",
    borderWidth: 1,
    width: 100,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },
  textInnerButtonLogout: {
    color: "#fff",
  },
  textInnerButtonListView: {
    color: "blue",
  },
});
