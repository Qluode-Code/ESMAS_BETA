import { images } from "@/constants/images";
import { useRouter } from "expo-router";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <ImageBackground
        source={images.mascotAuth}
        style={{ flex: 1, width: '100%', height: '100%', alignSelf: 'stretch', backgroundColor: '#000' }}
        resizeMode="contain"
      >
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
          <View style={{ height: 24 }} />

          {/* Pagination dots */}
          <View style={{ flexDirection: 'row', marginTop: 12, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#6d28d9', marginHorizontal: 5 }} />
            <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.6)', marginHorizontal: 5 }} />
            <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.6)', marginHorizontal: 5 }} />
            <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.6)', marginHorizontal: 5 }} />
          </View>

          <View style={{ flex: 1 }} />
        </View>

        {/* Small Start Onboarding button positioned below the hero content without covering it */}
        <View style={{ position: 'absolute', right: '30%', bottom: '24%', zIndex: 1000 }} pointerEvents="auto">
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => router.push('/(auth)/signup')}
            style={{ backgroundColor: '#6d28d9', minWidth: 96, height: 28, borderRadius: 14, paddingHorizontal: 10, alignItems: 'center', justifyContent: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.18, shadowRadius: 5, elevation: 4 }}
          >
            <Text style={{ color: '#fff', fontSize: 11, fontWeight: '700' }}>Start Onboarding</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
