import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Button } from "react-native";  


import Header from "../components/header";
import StudentCard from "../components/studentCard";
import { students } from "../data/students";
import { FlatList } from "react-native";
import CustomButton from "../components/customButton";

const HomeScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1 }}>
  <Header />

   <CustomButton
    title="Go to Profile"
    onPress={() => 
      navigation.navigate('Profile',{
        name: 'John Doe',
        course: 'Computer Science'
      })
    }
  />
  
  <FlatList
    data={students}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => (
      <StudentCard
        name={
item.name
}
        course={item.course}
      />
    )}
  />
 
</View>
);
};

export default HomeScreen;