import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Start } from "./screens/Start";
import { Services } from "./screens/Services";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Roadmap } from "./screens/Roadmap";
import { Downloads } from "./screens/Downloads";
import { Contact } from "./screens/Contact";

const { Navigator, Screen } = createBottomTabNavigator();

function MyTabs() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: "below-icon",
        tabBarLabelStyle: {
          marginBottom: 10,
        },
        tabBarActiveTintColor: "darkblue",
        tabBarInactiveTintColor: "black",
        tabBarStyle: {
          // position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bottom: 0,
          height: 62,
          borderTopWidth: 0,
          backgroundColor: "white",
        },
      }}
    >
      <Screen
        name="Start"
        component={Start}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="play" size={18} color={color} />
          ),
          tabBarLabel: "Início",
        }}
      />
      <Screen
        name="Services"
        component={Services}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home-repair-service" size={18} color={color} />
          ),
          tabBarLabel: "Serviços",
        }}
      />

      <Screen
        name="Roadmap"
        component={Roadmap}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="typewriter" size={18} color={color} />
          ),
          tabBarLabel: "Roteiro",
        }}
      />

      <Screen
        name="Downloads"
        component={Downloads}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="download" size={18} color={color} />
          ),
          tabBarLabel: "Downloads",
        }}
      />

      <Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="contact-support" size={24} color={color} />
          ),
          tabBarLabel: "Contato",
        }}
      />
    </Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
