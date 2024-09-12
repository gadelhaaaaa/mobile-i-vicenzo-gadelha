import { Stack } from "expo-router";
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';


import { View } from "react-native";

export default function RootLayout() {
  return (
    <ThemeProvider value={DarkTheme} >

      <View style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "hidden",
        width: "100%",
        backgroundColor: "black"
      }}>

      <Stack screenOptions={{ headerShown: false }} />


      </View>
    </ ThemeProvider >
  );
}