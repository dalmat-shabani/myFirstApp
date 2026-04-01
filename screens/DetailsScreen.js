import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/header";

const DetailsScreen = ({ route }) => {
  const student = route?.params?.student;

  return (
    <View style={styles.container}>
      <Header title="Student Details" />

      {!student ? (
        <View style={styles.card}>
          <Text style={styles.title}>No student selected</Text>
          <Text>Please go back and tap a student.</Text>
        </View>
      ) : (
        <View style={styles.card}>
          <Text style={styles.title}>{student.name}</Text>
          <Text>Course: {student.course}</Text>
          {"year" in student ? <Text>Year: {student.year}</Text> : null}
          {"age" in student ? <Text>Age: {student.age}</Text> : null}
          {"email" in student ? <Text>Email: {student.email}</Text> : null}
          {"gpa" in student ? <Text>GPA: {student.gpa}</Text> : null}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  card: {
    margin: 12,
    padding: 16,
    backgroundColor: "#E5E7EB",
    borderRadius: 10,
  },
  title: { fontSize: 18, fontWeight: "600", marginBottom: 8 },
});

export default DetailsScreen;

