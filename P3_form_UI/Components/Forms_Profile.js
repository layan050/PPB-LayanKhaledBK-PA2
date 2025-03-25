import React from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";

function Forms_profile() {
  return (
    <View
      style={{ alignItems: "center", justifyContent: "center", marginTop: 20 }}
    >
      <Image
        source={{
          uri: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1742441142~exp=1742444742~hmac=c2acf79ea8a9aac320f3fcf43c7c4eb4f3fefa003da8810730a1c7af14f03280&w=740",
        }}
        style={{ width: 150, height: 150, borderRadius: 75 }}
      />

      <View>
        <Text>NPM:</Text>
        <TextInput
          style={styles.inputText}
          placeholder="Enter your npm"
          keyboardType="numeric"
        />
      </View>

      <View>
        <Text>Fullname:</Text>
        <TextInput style={styles.inputText} placeholder="Enter your name" />
      </View>

      <View>
        <Text>Address:</Text>
        <TextInput
          style={styles.inputTextAddress}
          placeholder="Enter your address"
          editable
          multiline
          numberOfLines={5}
          maxLength={50}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Button form OS" color="pink" />
      </View>

      {/* TouchableOpacity */}
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => alert("TouchableOpacity pressed!")}
      >
        {buttonAct("Touchable Opacity")}
      </TouchableOpacity>

      {/* TouchableHighlight */}
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="lightpink"
        onPress={() => alert("TouchableHighlight pressed!")}
      >
        {buttonAct("Touchable Highlight")}
      </TouchableHighlight>

      {/* TouchableWithoutFeedback (harus membungkus View) */}
      <TouchableWithoutFeedback
        onPress={() => alert("TouchableWithoutFeedback pressed!")}
      >
        <View>{buttonAct("Touchable Without Feedback")}</View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const buttonAct = (title) => {
  return (
    <View style={styles.button}>
      <Text style={{ color: "white" }}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inputText: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "lightgrey",
    marginTop: 10,
    marginBottom: 10,
  },
  inputTextAddress: {
    width: 300,
    height: 100,
    textAlignVertical: "top",
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "lightgrey",
    marginTop: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    width: 200,
    height: 50,
    backgroundColor: "pink",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: "pink",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
});

export default Forms_profile;