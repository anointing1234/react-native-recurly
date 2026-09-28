import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";
const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <View className="flex-1 p-5">
      <Text className="text-xl font-bold text-success">
        Welcome to NativeWind!
      </Text>

      <Link
        href="/onboading"
        className="mt-4 rounded bg-primary p-4 text-white"
      >
        Onboarding
      </Link>

      <Link
        href="/(auth)/sign-in"
        className="mt-4 rounded bg-primary p-4 text-white"
      >
        Sign In
      </Link>

      <Link
        href="/(auth)/sign-up"
        className="mt-4 rounded bg-primary p-4 text-white"
      >
        Sign Up
      </Link>

      <Link
        href="/subscriptions/spotify"
        className="mt-4 rounded bg-primary p-4 text-white"
      >
        Spotify Subscription
      </Link>

      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "claude" },
        }}
        className="mt-4 rounded bg-primary p-4 text-white"
      >
        Claude Subscription
      </Link>
      </View>
    </SafeAreaView>
  );
}