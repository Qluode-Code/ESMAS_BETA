import { images } from "@/constants/images";
import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OnboardingScreen() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.replace("/(tabs)/home");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 40 }}>
        {/* Header */}
        <View className="px-6 py-8">
          <Text className="text-center text-3xl font-bold text-slate-900">Welcome</Text>
          <Text className="mt-2 text-center text-sm text-slate-500">
            Start your learning journey with Esmas Homes
          </Text>
        </View>

        {/* Mascot Section */}
        <View className="items-center justify-center py-8">
          <Image
            source={images.esmasHome}
            className="h-64 w-72"
            resizeMode="contain"
          />
        </View>

        {/* Content Cards */}
        <View className="px-6">
          {/* Card 1 */}
          <View className="mb-4 rounded-2xl bg-blue-50 p-6 shadow-sm shadow-blue-200/50">
            <Text className="text-lg font-semibold text-blue-900">Welcome Back!</Text>
            <Text className="mt-2 text-sm leading-6 text-blue-700">
              Start your learning journey today. Complete lessons to earn rewards and unlock new content.
            </Text>
          </View>

          {/* Card 2 */}
          <View className="mb-4 rounded-2xl bg-purple-50 p-6 shadow-sm shadow-purple-200/50">
            <Text className="text-lg font-semibold text-purple-900">Your Streak</Text>
            <Text className="mt-2 text-3xl font-bold text-purple-600">7 Days 🔥</Text>
            <Text className="mt-1 text-xs text-purple-600">Keep it going!</Text>
          </View>

          {/* Card 3 */}
          <View className="rounded-2xl bg-green-50 p-6 shadow-sm shadow-green-200/50">
            <Text className="text-lg font-semibold text-green-900">Today&apos;s Goal</Text>
            <Text className="mt-2 text-sm text-green-700">Complete 3 lessons to maintain your streak</Text>
            <View className="mt-4 h-2 overflow-hidden rounded-full bg-green-200">
              <View className="h-full w-2/3 bg-green-500" />
            </View>
          </View>
        </View>

        {/* CTA Button */}
        <View className="mt-8 px-6">
          <TouchableOpacity
            onPress={handleGetStarted}
            className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 py-4"
            activeOpacity={0.8}
          >
            <Text className="text-center text-lg font-bold text-white">Get Started</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
