import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import {
    KeyboardAvoidingView,
    Modal,
    Platform,
    Pressable,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type AuthFormProps = {
  mode: "signup" | "signin";
};

export default function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter();
  const inputRef = useRef<TextInput>(null);
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerificationVisible, setIsVerificationVisible] = useState(false);

  const isSignUp = mode === "signup";
  const title = isSignUp ? "Create your account" : "Welcome back";
  const subtitle = isSignUp
    ? "Start your language journey with email or social sign-in."
    : "Pick up your lessons where you left off.";
  const buttonLabel = isSignUp ? "Create account" : "Sign in";
  const footerQuestion = isSignUp ? "Already have an account?" : "Need an account?";
  const footerAction = isSignUp ? "Sign in" : "Sign up";
  const footerTarget = isSignUp ? "/(auth)/login" : "/(auth)/signup";

  const handleCodeChange = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 6);
    setVerificationCode(digits);

    if (digits.length === 6) {
      setTimeout(() => {
        setIsVerificationVisible(false);
        router.replace("/");
      }, 180);
    }
  };

  const openVerification = () => {
    setVerificationCode("");
    setIsVerificationVisible(true);
    setTimeout(() => inputRef.current?.focus(), 200);
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-950">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <View className="flex-1 justify-center px-6 py-8">
          <View className="mb-8 items-center">
            <View className="mb-4 h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/40 bg-cyan-400/10">
              <Text className="text-2xl font-semibold text-cyan-300">✦</Text>
            </View>
            <Text className="text-3xl font-semibold text-white">{title}</Text>
            <Text className="mt-2 text-center text-sm text-slate-400">{subtitle}</Text>
          </View>

          <View className="rounded-[28px] border border-white/10 bg-slate-900/80 p-5 shadow-2xl shadow-black/40">
            <Text className="mb-3 text-sm font-medium text-slate-300">Email address</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="name@example.com"
              placeholderTextColor="#64748b"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              className="mb-4 rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-base text-white"
            />

            <TouchableOpacity
              activeOpacity={0.9}
              onPress={openVerification}
              className="items-center rounded-2xl bg-cyan-400 px-4 py-3"
            >
              <Text className="text-base font-semibold text-slate-950">{buttonLabel}</Text>
            </TouchableOpacity>

            <View className="my-5 flex-row items-center">
              <View className="h-px flex-1 bg-slate-700" />
              <Text className="mx-3 text-[11px] uppercase tracking-[0.24em] text-slate-500">
                or continue with
              </Text>
              <View className="h-px flex-1 bg-slate-700" />
            </View>

            <View className="gap-3">
              <TouchableOpacity
                activeOpacity={0.9}
                className="flex-row items-center justify-center rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3"
              >
                <Text className="mr-2 text-base">G</Text>
                <Text className="text-sm font-medium text-white">Continue with Google</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.9}
                className="flex-row items-center justify-center rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3"
              >
                <Text className="mr-2 text-base"></Text>
                <Text className="text-sm font-medium text-white">Continue with Apple</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => router.push(footerTarget as any)}
            className="mt-6 items-center"
          >
            <Text className="text-sm text-slate-400">
              {footerQuestion}{" "}
              <Text className="font-semibold text-cyan-300">{footerAction}</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

      <Modal
        visible={isVerificationVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setIsVerificationVisible(false)}
      >
        <Pressable
          className="flex-1 justify-end bg-black/70"
          onPress={() => setIsVerificationVisible(false)}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            className="rounded-t-[28px] border-t border-white/10 bg-slate-950 px-6 pb-8 pt-6"
          >
            <View className="mb-5 items-start">
              <Text className="text-2xl font-semibold text-white">Check your email</Text>
              <Text className="mt-2 text-sm leading-6 text-slate-400">
                We sent a 6-digit code to {email || "your inbox"}. Enter it below to continue.
              </Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => inputRef.current?.focus()}
              className="mb-5 flex-row items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-4"
            >
              <View className="flex-row gap-2">
                {Array.from({ length: 6 }).map((_, index) => (
                  <View
                    key={index}
                    className={`h-12 w-10 items-center justify-center rounded-xl border ${
                      verificationCode[index] ? "border-cyan-400 bg-cyan-400/10" : "border-slate-700 bg-slate-950"
                    }`}
                  >
                    <Text className="text-lg font-semibold text-white">
                      {verificationCode[index] ?? ""}
                    </Text>
                  </View>
                ))}
              </View>
              <Text className="text-sm font-medium text-cyan-300">Enter</Text>
            </TouchableOpacity>

            <TextInput
              ref={inputRef}
              value={verificationCode}
              onChangeText={handleCodeChange}
              keyboardType="number-pad"
              maxLength={6}
              autoFocus
              className="h-0 w-0 opacity-0"
            />

            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => setIsVerificationVisible(false)}
              className="items-center rounded-2xl border border-slate-700 px-4 py-3"
            >
              <Text className="text-sm font-semibold text-slate-300">Cancel</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
}
