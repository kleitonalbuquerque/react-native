import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import styles from "../styles/styles";

export default function Settings() {
  const goToHome = () => {
    router.push("/"); // use push, replace, or navigate as needed
  };
  return (
    <View style={[styles.container, { backgroundColor: "#FAEDCB" }]}>
      <Text>Settings</Text>
      <Pressable onPress={goToHome}>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
        >
          <Text>Go to Home</Text>{" "}
          <FontAwesome6
            name="house"
            size={24}
            color="black"
            style={{ marginLeft: 8 }}
          />
        </View>
      </Pressable>
    </View>
  );
}
