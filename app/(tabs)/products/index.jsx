import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import styles from "../../../styles/styles";
export default function Products() {
  return (
    <View style={[styles.container, { backgroundColor: "#DBCDF0" }]}>
      <Text>Products</Text>
      <Link push href="/products/1" style={{ marginTop: 10 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>Product 1</Text>
          <FontAwesome
            name="arrow-right"
            size={24}
            color="black"
            style={{ marginLeft: 8 }}
          />
        </View>
      </Link>

      <Link push href="/products/2" style={{ marginTop: 10 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>Product 2</Text>
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
