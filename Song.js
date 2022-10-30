import { Image, StyleSheet, SafeAreaView, Text, Pressable, Button, FlatList, View } from "react-native";
import { Themes, Images } from "./assets/Themes";
import React, { useState } from "react";

export default function Song({ name, index, url, artists, album, time}) {
    return (
        <View style={styles.container}>
            <Text style={styles.index}>{index}</Text>
            <Image style={styles.image} source={{uri:url}} />

            <View style={styles.titleSection}>
              <Text style={styles.name} numberofLines={1}>{name}</Text>
              <Text style={styles.artists} numberofLines={1} >{artists}</Text>
            </View>
            <Text style={styles.album} numberofLines={1}>{album}</Text>
            
            <Text style={styles.time}>{time}</Text> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'space-around',
      alignItems: "center",
      flexDirection: 'row',
      width: '100%',
      padding: '1%',
    }, 
    index: {
      paddingLeft: '1%',
      color: Themes.colors.gray,
      flex: 1
    },
    image: {
      width: 75,
      height: 75,
      resizeMode: 'contain',
      flex: 3
    },
    titleSection: {
      flexDirection: 'column',
      justifyContent: 'center',
      flex: 6,
      padding: '2%'
    },
    name: {
      fontSize: 18,
      color: Themes.colors.white,
      justifyContent: 'flex-start'
    },
    artists: {
      color: Themes.colors.gray
    },
    album: {
      color: Themes.colors.white,
      flex: 4
    },
    time: {
      color: Themes.colors.white,
      flex: 2,
      paddingRight: '5%'
    }
});