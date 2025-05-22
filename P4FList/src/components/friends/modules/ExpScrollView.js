import React from "react";
import { ScrollView } from "react-native";
import UserItem from "../../const-data/UserItems"; // Path sudah sesuai

const ExpScrollView = ({ Users }) => {
  return (
    <ScrollView>
      {Users.map((v, index) => (
        <UserItem item={v} key={index} />
      ))}
    </ScrollView>
  );
};

export default ExpScrollView;
