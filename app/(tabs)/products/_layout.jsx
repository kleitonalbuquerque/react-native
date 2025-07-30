import { Stack } from "expo-router";

export default function ProductsLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#E94560" },
        headerTintColor: "#FFFFFF",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Products" }} />
      <Stack.Screen
        name="products/[id]"
        options={{ title: "Product Details" }}
      />
    </Stack>
  );
}
