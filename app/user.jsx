import { Link } from "expo-router";
import { Text, View } from "react-native";
import styles from "../styles/style";
export default function User() {
  return (
    <View style={[styles.container, { backgroundColor: "#C9E4DE" }]}>
      <Text>User</Text>
      <Link push href="/settings">
        Go to Settings
      </Link>
    </View>
  );
}
