import { Image, StyleSheet, SafeAreaView, Text, Pressable, Button, FlatList, View } from "react-native";
import React, { useState} from "react";

export default function Song({ name }) {
    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>pls load</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'black',
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    }, 
    paragraph: {
      color: 'white',
      fontWeight: 'bold'
    }
});