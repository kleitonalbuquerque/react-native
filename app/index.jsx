import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import styles from "../styles/styles";

export default function Home() {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: "#FAEDCB",
        },
      ]}
    >
      <Text>Home</Text>
      <Link push href="/user" style={{ marginTop: 10 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>Go to User</Text>
          <FontAwesome
            name="arrow-right"
            size={24}
            color="black"
            style={{ marginLeft: 8 }}
          />
        </View>
      </Link>

      <Link push href="/products" style={{ marginTop: 10 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>Go to Products</Text>
          <FontAwesome
            name="arrow-right"
            size={24}
            color="black"
            style={{ marginLeft: 8 }}
          />
        </View>
      </Link>

      <Link push href="/not-found" style={{ marginTop: 10 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>Go to Not Found</Text>
          <FontAwesome
            name="arrow-right"
            size={24}
            color="black"
            style={{ marginLeft: 8 }}
          />
        </View>
      </Link>
    </View>
  );
}
