import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

export default function Listview() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  //SetURLAPI i set limit data 10 ! 
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>Loading ...</Text>
      ) : (
        <View>
          <Text style={{ fontSize: 18, color: "green", textAlign: "center" }}>
            {data.title}
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: "green",
              textAlign: "center",
              paddingBottom: 10,
            }}
          >
            Listview :
          </Text>
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View>
                <Text style={{fontSize:18,fontWeight:'bold'}}>{item.title}</Text>
                <Image
                  source={{ uri: item.thumbnailUrl }}
                  style={styles.imageView}
                />
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  imageView: {
    width: "50%",
    height: 100,
    margin: 7,
    borderRadius: 7,
  },
});
