import { StyleSheet, Text, View } from "react-native";

const Header = ({ title = "Student App" }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3E3D0",
    padding: 15,
  },
  title: {
    fontSize: 20,
    color: "#81A6C6",
    textAlign: "center",
  },
});

export default Header;