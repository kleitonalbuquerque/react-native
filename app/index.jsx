import { Link } from "expo-router";
import { Text, View } from "react-native";
import styles from "../styles/style";

export default function Home() {
  return (
    <View style={[styles.container, { backgroundColor: "#FAEDCB" }]}>
      <Text>Home</Text>
      <Link href="/user">Go to User</Link>
    </View>
  );
}
