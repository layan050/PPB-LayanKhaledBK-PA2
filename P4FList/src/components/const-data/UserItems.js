import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";

const UserItem = ({ item, onFollow }) => {
  // Status follow berdasarkan status user
  const [isFollowing, setIsFollowing] = useState(item.status === "Followers");

  // URL gambar profil berdasarkan gender
  const imageUrl =
    item.gender === "M"
      ? "https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
      : "https://www.pngall.com/wp-content/uploads/5/Profile-Female-PNG.png";

  // Fungsi untuk handle follow/unfollow
  const handleFollow = () => {
    if (!isFollowing) {
      // Notifikasi saat follow
      Alert.alert("Followed", `You are now following ${item.name}`);
      setIsFollowing(true);
    } else {
      // Notifikasi saat unfollow
      Alert.alert("Unfollowed", `You have unfollowed ${item.name}`);
      setIsFollowing(false);
    }
    onFollow(); // Panggil fungsi onFollow dari parent untuk update status
  };

  return (
    <View style={styles.search_container}>
      <View style={styles.search_account}>
        <Image source={{ uri: imageUrl }} style={styles.story_ava} />
        <View>
          <Text style={{ ...styles.story_name, fontWeight: "bold", color: "black" }}>
            {item.name}
          </Text>
          <Text style={{ ...styles.story_name, color: "black" }}>
            {item.fullname}
          </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          activeOpacity={0.6}
          style={[
            styles.btn_follow,
            { backgroundColor: isFollowing ? "gray" : "purple" },
          ]}
          onPress={handleFollow}
        >
          <Text style={{ ...styles.story_name, color: "white" }}>
            {isFollowing ? "Following" : "Follow"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  search_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  search_account: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  story_ava: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: "#f0f8ff",
    marginRight: 15,
  },
  story_name: {
    fontSize: 16,
    textAlign: "left",
  },
  btn_follow: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
});

export default UserItem;
