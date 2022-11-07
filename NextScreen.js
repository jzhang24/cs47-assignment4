import { WebView } from "react-native-webview";

export default function NextScreen({ route }) {
  return <WebView source={{ uri: route.params.webview }}></WebView>
}
