import { Text, View } from "react-native";

export default function TestScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <View className="size-24 bg-accent" />
      <View className="tabs-pill tabs-active mt-4" />
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
    </View>
  );
}