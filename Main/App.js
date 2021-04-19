import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Platform, Dimensions} from 'react-native';
import {useDimensions} from "@react-native-community/hooks";

export default function App() {
  console.log(useDimension())

  const handlePress = () => console.log("Text pressed");
  
  return (
    // view is like div
    <SafeAreaView style={containerStyle}>
      <View style={{
        backgroundColor: "dodgerblue",
        width: '100%',
        height: 70
      }}>
      </View>
    </SafeAreaView>
  );
}

const containerStyle = {backgroundColor: "orange"}

const styles = StyleSheet.create({
  container: {
    // can grow horizontally and vertically 
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? 20 : StatusBar.currentHeight 
  },
});
