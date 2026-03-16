import React from "react"
import {View} from "react-native";

import Header from "../components/header";
import StudentCard from "../components/studentCard";

const HomeScreen = () =>{
    return(
        <View>
            <Header/>
            <StudentCard
                name="John Doe"
                course = "ReactNative"
            />
            <StudentCard
            name = "Ana Smith"
            course = "Mobile Development"
            />
        </View>
    );
};

export default HomeScreen