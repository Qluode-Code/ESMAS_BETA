import { images } from "@/constants/images";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OnboardingScreen() {
  const router = useRouter();
  const [progress] = useState(0);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <ImageBackground
        source={images.mascotAuth}
        className="flex-1 items-center justify-center"
        resizeMode="cover"
      >
        <View className="flex-1 w-full items-center justify-center px-4">
          <View className="mt-6 w-[92%] max-w-[360px] items-center rounded-2xl bg-black/40 p-4 shadow-lg">
            <Text className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-gray-200">
              ESMAS Homes
            </Text>
            <View className="mb-1 mt-2">
              <Text className="text-center text-3xl font-bold text-white">Welcome</Text>
            </View>
            <Text className="mb-2 text-center text-sm font-medium text-gray-200">
              the OnBoarding Page
            </Text>
            <Text className="mb-2 text-center text-sm text-gray-200">
              Lets continue to get started
            </Text>
            <Text className="mb-2 text-center text-sm text-gray-200">
              Progress: {progress} / 3
            </Text>
            <View className="mt-2">
              <Text className="mt-4 text-center text-xs text-gray-300">
                By continuing, you agree to the Terms of Service and confirm that you have read the Privacy Policy.
              </Text>
            </View>
          </View>
        </View>

        <View className="absolute bottom-7 right-5 z-50">
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => router.push("/signup" as never)}
            className="h-16 w-16 items-center justify-center rounded-full bg-cyan-500 shadow-lg"
            accessibilityLabel="Get Started"
          >
            <Text className="text-base font-bold text-slate-950">Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
