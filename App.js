import { Image, StyleSheet, SafeAreaView, Text, Pressable, Button, FlatList, View } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes, Images } from "./assets/Themes";
import millisToMinutesAndSeconds from './utils/millisToMinutesAndSeconds';
import Song from "./Song"

export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  var { token, tracks, getSpotifyAuth } = useSpotifyAuth(true);
  let contentDisplayed = null;

  const SpotifyAuthToken = () => {
    return (
      <Pressable style={styles.connectButton} onPress={getSpotifyAuth}>
        <Image style={styles.image} source={Images.spotify} />
        <Text style={styles.paragraph}>CONNECT WITH SPOTIFY</Text>
      </Pressable>
    );
  }


  const Content = () => {

    console.log(tracks);

    const renderSongItem = ({ item, index }) => (
      <Song
        index={index+1}
        name={item.name}
        url={item.album.images[0].url}
        artists={item.artists[0].name}
        album={item.album.name}
        time={millisToMinutesAndSeconds(item.duration_ms)}
      />
    );

    return (
      <View style={styles.topTracks}>
        <View style={styles.header}>
          <Image style={styles.image} source={Images.spotify} />
          <Text style={styles.headerTitle}>My Top Tracks</Text>
        </View>

        <FlatList
          data={tracks}
          renderItem={(item) => renderSongItem(item)}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }

  /* DISPLAY 1 OF 2 SCREENS */

  if (token) {
    contentDisplayed = <Content />
  } else {
    contentDisplayed = <SpotifyAuthToken />
  }

  return (
    <SafeAreaView style={styles.container}>
      {contentDisplayed}   
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  }, 
  paragraph: {
    color: 'white',
    fontWeight: 'bold'
  },
  topTracks: {
    width: "100%",
    height: "100%",
    alignItems: 'center'
  },
  connectButton: {
    flexDirection: 'row',
    backgroundColor: Themes.colors.spotify,
    padding: 20,
    alignItems: 'center',
    borderRadius: 99999
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  header: {
    flexDirection: 'row',
    padding: '2%'
  },
  headerTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 28,
    color: 'white'
  }
});
