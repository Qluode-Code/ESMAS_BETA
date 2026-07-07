import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to Home screen on app start
    router.replace("/(tabs)/home");
  }, [router]);

  return null;
}
