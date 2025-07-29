import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import styles from "../styles/styles";

export default function NotFound() {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: "#F7D9C4",
        },
      ]}
    >
      <Text>This page does not exist</Text>
      <Link replace href="/" style={{ marginTop: 10 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>Go to Home</Text>
          <FontAwesome6
            name="house"
            size={24}
            color="black"
            style={{ marginLeft: 8 }}
          />
        </View>
      </Link>
    </View>
  );
}
