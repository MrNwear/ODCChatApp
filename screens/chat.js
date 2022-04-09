import React, { useState, useCallback, useLayoutEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { auth, db } from "../firebase";
import { GiftedChat } from 'react-native-gifted-chat'



export const ChatScreen = ({ navigation }) => {
    const [messages, setMessages] = useState([]);
    // useEffect(() => {
    //     setMessages([
    //         {
    //             _id: 1,
    //             text: 'Hello developer',
    //             createdAt: new Date(),
    //             user: {
    //                 _id: 2,
    //                 name: 'React Native',
    //                 avatar: 'https://placeimg.com/140/140/any',
    //             },
    //         },
    //     ])
    // }, [])

    useLayoutEffect(() => {
        const unsubscribe = db.collection('chat').orderBy('createdAt', 'desc').
            onSnapshot(snapshot =>
                setMessages(
                    snapshot.docs.map(doc => ({
                        _id: doc.data()._id
                        , createdAt: doc.data().createdAt.toDate()
                        , text: doc.data().text
                        , user: doc.data().user
                    }))
                ))
        return unsubscribe;
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
        const { _id, createdAt, text, user } = messages[0];
        db.collection('chat').add({ _id, createdAt, text, user });
    }, [])
    signout = () => {
        auth.signOut().then(() => {
            navigation.replace('Login');
        })
    }

    return (
        <GiftedChat
            messages={messages}
            showAvatarForEveryMessage={true}
            onSend={messages => onSend(messages)}
            user={{
                _id: auth?.currentUser?.email,

            }}
        />
    )
}
