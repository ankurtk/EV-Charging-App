import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Color from "../../Utils/Color";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./../../assets/images/icons8-electric-vehicle-60.png")}
        style={styles.logoImage}
      />
      <Image
        source={require("./../../assets/images/bg_image.png")}
        style={styles.bgImage}
      />
      <View style={{ padding: 20 }}>
        <Text style={styles.heading}>
          Your Ultimate EV charging Station App
        </Text>
        <Text style={styles.desc}>
          Find EV charging station near you in once click
        </Text>
        <View style={styles.button}>
          <Text
            style={{
              color: Color.WHITE,
              textAlign: "center",
              fontFamily: "outfit",
              fontSize: 17,
            }}
          >
            Login With Google
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
  },
  logoImage: {
    width: 80,
    height: 80,
    objectFit: "container",
  },
  bgImage: {
    width: 300,
    height: 300,
    objectFit: "contain",
  },
  heading: {
    fontSize: 25,
    fontFamily: "outfit-bold",
    textAlign: "center",
    marginTop: "20",
  },
  desc: {
    fontSize: 18,
    fontFamily: "outfit",
    textAlign: "center",
    color: Color.GRAY,
  },
  button: {
    backgroundColor: Color.PRIMARY,
    padding: 16,
    display: "flex",
    borderRadius: 99,
    marginTop: 50,
  },
});
