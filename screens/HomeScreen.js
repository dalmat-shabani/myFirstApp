import React from "react"
import {View} from "react-native";
import { Button}  from "react-native";

import Header from "../components/header";
import StudentCard from "../components/studentCard";

const HomeScreen = () =>{
    return(
        <View>
            <CostumButton title="Click Me" onPress={() => console.log("CostumButton Pressed")}>

            </CostumButton>
            
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