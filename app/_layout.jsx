import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#E94560" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#E94560" },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen name="index" options={{ headerTitle: "Home" }} />
        <Stack.Screen name="settings" options={{ title: "Settings" }} />
        <Stack.Screen name="user" options={{ title: "User" }} />
        <Stack.Screen name="products" options={{ title: "Products" }} />
        <Stack.Screen
          name="products/[id]"
          options={{ title: "Product Detail" }}
        />
        <Stack.Screen name="+not-found" options={{ title: "Not Found" }} />
      </Stack>
    </>
  );
}
