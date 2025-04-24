import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ItemTyphograp = () => {
	return (
		<View style={{ padding: 20 }}>
			<Text
				style={{
					fontSize: 20,
					fontWeight: "bold",
					backgroundColor: "pink",
					color: "white",
					textAlign: "center",
					textDecorationLine: "underline",
					padding: 10,
					marginBottom: 10,
				}}
			>
				History of Bicycle
			</Text>
			<Text style={styles.paragraf}>
				A bicycle, also called a
				<Text style={{ ...styles.paragraf, color: "red" }}> pedal cycle </Text>,
				<Text style={{ ...styles.paragraf, fontWeight: "bold" }}> bike </Text>,
				<Text style={{ ...styles.paragraf, fontStyle: "italic" }}>
					push-bike or cycle
				</Text>
				, is a human-powered or motor-powered assisted, pedal-driven,
				single-track vehicle, having two wheels attached to a frame, one behind
				the other. A bicycle rider is called a cyclist, or bicyclist
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	paragraf: {
		fontSize: 16,
		textAlign: "justify",
	},
});

export default ItemTyphograp;