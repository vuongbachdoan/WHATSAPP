import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
// 👇 Import our component
import ChatListItem from "./src/components/ChatListItem";
import ChatScreen from "./src/screens/ChatScreen";
import ChatsScreen from "./src/screens/ChatsScreen";
import Navigator from "./src/shared/layout/Navigator";
const chat = {
  id: "1",
  user: {
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg",
    name: "Lukas",
  },
  lastMessage: {
    text: "Oke",
    createdAt: "07:30",
  },
};
export default function App() {
  return (
    <View style={styles.container}>
      {/* 👇 Render a ChatListItem */}
      {/* <ChatListItem chat={chat}/> */}
      {/* <ChatScreen/> */}
      {/* <ChatsScreen/>  */}
      <Navigator/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    // paddingVertical: 50,
  },
});