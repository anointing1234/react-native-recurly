import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
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
        href="/(tabs)/subscriptions/spotify"
        className="mt-4 rounded bg-primary p-4 text-white"
      >
        Spotify Subscription
      </Link>

      <Link
        href={{
          pathname: "/(tabs)/subscriptions/[id]",
          params: { id: "claude" },
        }}
        className="mt-4 rounded bg-primary p-4 text-white"
      >
        Claude Subscription
      </Link>
    </View>
  );
}