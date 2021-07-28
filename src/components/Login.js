import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

export default function Login({ navigation }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const checkInputNotNull = () => {
    if (!user.trim()) {
      alert("Please Enter Username !");
      return;
    }
    if (!password.trim()) {
      alert("Please Enter Password");
      return;
    }
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <View style={styles.contentLogin}>
        <View>
          <Image
            style={styles.imageLogoLogin}
            source={{
              uri: "https://www.thelivingos.com/wp-content/uploads/2018/05/fav.png",
            }}
          />
        </View>
        <View>
          <TextInput
            style={styles.loginTextInput}
            placeholder="username"
            onChangeText={(user) => setUser(user)}
          />
          <TextInput
            style={styles.loginTextInput}
            placeholder="password"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={checkInputNotNull}
          >
            <Text style={{ textAlign: "center" }}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  contentLogin: {
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center',
  },
  loginTextInput: {
    borderRadius: 25,
    backgroundColor: "#3333",
    margin: 12,
    borderWidth: 1,
    height: 40,
    width: 200,
    textAlign: "center",
  },
  buttonLogin: {
    borderRadius: 12,
    backgroundColor: "#3333",
    alignItems:'center',
    justifyContent:'center',
    height: 40,
    width: 200,
    margin: 12,
  },
  imageLogoLogin: {
    width: 250,
    height: 200,
    margin: 7,
    borderRadius: 7,
  },
});
