import { StyleSheet, Text, View } from "react-native";

export default function Header({ title = "My First App" }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 48,
    paddingBottom: 12,
    paddingHorizontal: 16,
    backgroundColor: "#111827",
  },
  title: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
});
