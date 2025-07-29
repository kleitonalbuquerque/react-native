import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import styles from "../styles/style";

export default function Settings() {
  const goToHome = () => {
    router.push("/"); // use push, replace, or navigate as needed
  };
  return (
    <View style={[styles.container, { backgroundColor: "#FAEDCB" }]}>
      <Text>Settings</Text>
      <Pressable onPress={goToHome}>
        <Text>Go to Home</Text>
      </Pressable>
    </View>
  );
}
