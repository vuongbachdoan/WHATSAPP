import { ImageBackground, StyleSheet, FlatList, KeyboardAvoidingView } from "react-native";
import bg from "../../assets/images/BG.png";
import Message from "../components/Message";
import messages from "../../assets/data/messages.json";
import InputBox from "../components/InputBox";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";

const ChatScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    useEffect(() => {
        navigation.setOptions({ title: route.params.name });
    }, [route.params]);

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.bg}>
            <ImageBackground source={bg} style={styles.bg}>
                <FlatList
                    data={messages}
                    renderItem={({ item }) => <Message message={item} />}
                    style={styles.list}
                    inverted
                />
                <InputBox />
            </ImageBackground>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    bg: {
        flex: 1,
    },
});

export default ChatScreen;