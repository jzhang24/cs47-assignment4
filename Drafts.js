// App.js
export default function App() {
  
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
  
  
    const Content = ({navigation}) => {
  
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
  
            {/* testing pressable on spotify button*/}
            <Pressable 
              onPress = {() => {
                navigation.navigate('Song preview')
              }}>
  
              <Image style={styles.image} source={Images.spotify} />
            </Pressable>
  
  
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
    function ReturnContent() {
      if (token) {
        contentDisplayed = <Content />
      } else {
        contentDisplayed = <SpotifyAuthToken />
      }
      return contentDisplayed;
    }
  
    // blocker: can't get contentDisplayed to show up
  
    /* STACK NAVIGATOR */
  
    const Stack = createStackNavigator();
  
    return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
              cardStyle: {
                backgroundColor: Themes.colors.background
              },
              headerStyle: {
                backgroundColor: Themes.colors.background,
              },
              headerTitleStyle: {
                color: Themes.colors.white
              }
              }}>
            <Stack.Screen name="SongList" options={{headerShown: false}} component={Content} /> 
            <Stack.Screen name="Song details" component={SongScreen} />
            <Stack.Screen name="Song preview" component={SongPreview} />
          </Stack.Navigator>
        </NavigationContainer>
    );
  }

  