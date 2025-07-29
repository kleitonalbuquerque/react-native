import { FontAwesome } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { Pressable, Text, View } from "react-native";
import styles from "../../styles/styles";
export default function ProductsDetail() {
  const { id } = useLocalSearchParams();
  const goBack = () => {
    router.back(); // Navigate back to the previous page
  };

  return (
    <View style={[styles.container, { backgroundColor: "#F2C6DE" }]}>
      <Text>Product id {id} </Text>
      <Pressable onPress={goBack}>
        <View
          style={{ marginTop: 10, flexDirection: "row", alignItems: "center" }}
        >
          <FontAwesome name="arrow-left" size={24} style={{ marginRight: 8 }} />
          <Text>Go Back</Text>
        </View>
      </Pressable>
    </View>
  );
}
