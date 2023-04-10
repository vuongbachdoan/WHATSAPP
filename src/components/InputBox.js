import { View, TextInput, StyleSheet, SafeAreaView, KeyboardAvoidingView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const InputBox = () => {
    const onSend = () => {
        console.log("send", newMessage);
        setNewMessage("");
    }
    const [newMessage, setNewMessage] = useState('');
    const insets = useSafeAreaInsets();

    return (
        <SafeAreaView edges={["bottom"]} style={styles.container}>
            <AntDesign name="plus" size={24} color="royalblue" />
            <TextInput
                style={styles.input}
                value={newMessage}
                onChangeText={setNewMessage}
                multiline
            />
            <MaterialIcons onPress={onSend} style={styles.send} name="send" size={24} color="white" />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: 'whitesmoke',
      padding: 5,
      paddingHorizontal: 10,
      alignItems: 'center',
    },
    input: {
      flex: 1,
      backgroundColor: 'white',
      padding: 5,
      paddingHorizontal: 10,
      marginHorizontal: 10,
  
      borderRadius: 50,
      borderColor: 'lightgray',
      borderWidth: StyleSheet.hairlineWidth,
    },
    send: {
      backgroundColor: 'royalblue',
      padding: 7,
      borderRadius: 15,
      overflow: 'hidden',
    },
  });

export default InputBox;