import { StyleSheet, Text, View } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { useEffect, useState } from "react";
import { db } from "../firebase";

const CustomListItem = ({ id, ChatName, enterChat }) => {
  const [chatMessage, setChatMessage] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection("chats")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setChatMessage(snapshot.docs.map((doc) => doc.data()))
      );
    return unsubscribe;
  }, []);
  return (
    <ListItem
      key={id}
      onPress={() => {
        enterChat(id, ChatName);
      }}
      bottomDivider
    >
      <Avatar
        rounded
        source={{
          uri:
            chatMessage?.[0]?.photoURL ||
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>
          {ChatName}
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          {chatMessage[0]?.display}:{chatMessage?.[0]?.message}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
