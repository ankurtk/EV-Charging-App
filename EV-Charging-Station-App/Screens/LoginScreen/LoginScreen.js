import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import * as WebBrowser from "expo-web-browser";
import Color from "../../Utils/Color";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const login = async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  };
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
        <TouchableOpacity style={styles.button} onPress={login}>
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
        </TouchableOpacity>
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
    objectFit: "contain",
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
