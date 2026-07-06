import { images } from "@/constants/images";
import { Stack } from "expo-router";
import { ImageBackground, StyleSheet, View } from "react-native";
import "../../global.css";

export default function RootLayout() {
  return (
    <ImageBackground source={images.backgroundTheme} style={styles.background} resizeMode="cover">
      <View style={styles.overlay} />
      <Stack
        screenOptions={{
          headerShown: false,
          animationEnabled: true,
        }}
      >
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255,255,255,0.55)",
  },
});
