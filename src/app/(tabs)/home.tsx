import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f8fafc" }}>
      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 20 }}>
        {/* Header */}
        <View className="bg-gradient-to-b from-blue-600 to-blue-500 px-6 py-8">
          <Text className="text-2xl font-bold text-white">Dashboard</Text>
          <Text className="mt-1 text-blue-100">Welcome back</Text>
        </View>

        {/* Profile Card */}
        <View className="mx-6 -mt-10 mb-6 rounded-2xl bg-white p-6 shadow-lg shadow-slate-200/50">
          <View className="flex-row items-center">
            <View className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
            <View className="ml-4 flex-1">
              <Text className="text-lg font-bold text-slate-900">Adejoke Mojibolanle</Text>
              <Text className="mt-1 text-sm text-slate-500">Premium Member</Text>
            </View>
          </View>

          {/* Stats */}
          <View className="mt-6 flex-row justify-between border-t border-slate-100 pt-4">
            <View className="flex-1 items-center">
              <Text className="text-2xl font-bold text-blue-600">1,250</Text>
              <Text className="mt-1 text-xs text-slate-500">Total XP</Text>
            </View>
            <View className="flex-1 items-center border-l border-slate-100">
              <Text className="text-2xl font-bold text-purple-600">42</Text>
              <Text className="mt-1 text-xs text-slate-500">Lessons Done</Text>
            </View>
            <View className="flex-1 items-center border-l border-slate-100">
              <Text className="text-2xl font-bold text-green-600">7</Text>
              <Text className="mt-1 text-xs text-slate-500">Day Streak</Text>
            </View>
          </View>
        </View>

        {/* Quick Actions */}
        <View className="px-6">
          <Text className="text-lg font-semibold text-slate-900">Quick Actions</Text>

          <TouchableOpacity activeOpacity={0.7} className="mt-3 flex-row items-center rounded-xl bg-white p-4 shadow-sm shadow-slate-100/50">
            <View className="h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
              <Text className="text-lg">📚</Text>
            </View>
            <View className="ml-3 flex-1">
              <Text className="font-semibold text-slate-900">Start Lesson</Text>
              <Text className="text-xs text-slate-500">Continue learning</Text>
            </View>
            <Text className="text-slate-400">›</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7} className="mt-3 flex-row items-center rounded-xl bg-white p-4 shadow-sm shadow-slate-100/50">
            <View className="h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
              <Text className="text-lg">🎯</Text>
            </View>
            <View className="ml-3 flex-1">
              <Text className="font-semibold text-slate-900">Today&apos;s Goal</Text>
              <Text className="text-xs text-slate-500">Complete 3 lessons</Text>
            </View>
            <Text className="text-slate-400">›</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7} className="mt-3 flex-row items-center rounded-xl bg-white p-4 shadow-sm shadow-slate-100/50">
            <View className="h-10 w-10 items-center justify-center rounded-lg bg-green-100">
              <Text className="text-lg">🏆</Text>
            </View>
            <View className="ml-3 flex-1">
              <Text className="font-semibold text-slate-900">Achievements</Text>
              <Text className="text-xs text-slate-500">View your badges</Text>
            </View>
            <Text className="text-slate-400">›</Text>
          </TouchableOpacity>
        </View>

        {/* Progress Section */}
        <View className="mt-6 px-6">
          <Text className="text-lg font-semibold text-slate-900">Today&apos;s Progress</Text>

          <View className="mt-4 rounded-2xl bg-white p-6 shadow-sm shadow-slate-100/50">
            <View className="flex-row items-center justify-between">
              <Text className="font-semibold text-slate-900">Lessons Completed</Text>
              <Text className="text-sm font-bold text-blue-600">2/3</Text>
            </View>
            <View className="mt-3 h-3 overflow-hidden rounded-full bg-slate-100">
              <View className="h-full w-2/3 bg-blue-500" />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
