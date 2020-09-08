import React from 'react';
import { Button, Text, StyleSheet, View } from 'react-native';

const HomeScreen = () => {
	return (
		<View>
			<Text style={styles.text}>Hi there</Text>
			<Button title="Go to Components Demo" onPress={() => {}} />
			<Button title="Go to List Demo" />
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
	},
});

export default HomeScreen;
