import React, { useState } from "react";
import { Text, SectionList, View } from "react-native";
import UserItem from "../../const-data/UserItems"; // pastikan file path sudah benar

const ExpSectionList = ({ Users }) => {
  const [userData, setUserData] = useState(Users); // Gunakan state untuk menyimpan Users

  // Fungsi untuk handle perubahan status
  const handleFollow = (userId, currentStatus) => {
    const updatedUsers = userData.map((user) => {
      if (user.id === userId) {
        return {
          ...user,
          status: currentStatus === "Followers" ? "Suggested" : "Followers", // Toggle status
        };
      }
      return user;
    });
    setUserData(updatedUsers);
  };

  // Data untuk SectionList
  const data = [
    {
      title: "Suggested",
      data: userData.filter((user) => user.status === "Suggested"),
    },
    {
      title: "Followers",
      data: userData.filter((user) => user.status === "Followers"),
    },
  ];

  return (
    <SectionList
      sections={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <UserItem item={item} onFollow={() => handleFollow(item.id, item.status)} />
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={{ color: "black", fontSize: 18, padding: 10 }}>
          {title}
        </Text>
      )}
      ListEmptyComponent={
        <View style={{ padding: 20 }}>
          <Text style={{ textAlign: "center" }}>No users available.</Text>
        </View>
      }
    />
  );
};

export default ExpSectionList;
