import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const StudentCard = (props) =>{
    return(
        <Pressable onPress={props.onPress} disabled={!props.onPress}>
            <View style ={styles.card}>
                <Text>Name: {props.name} </Text>
                <Text>Course: {props.course}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 15,
        margin: 10,
        backgroundColor: "#AACDDC",
        borderRadius: 10
    }
});

export default StudentCard;