import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

function ComponentScreen() {
	const name = 'Jamie';
	return (
		<View>
			<Text style={styles.headerStyle}>Getting Started with React Native!</Text>
			<Text style={styles.subheaderStyle}>My name is {name}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	headerStyle: {
		color: 'blue',
		fontSize: 45,
	},
	subheaderStyle: {
		fontSize: 20,
	},
});

export default ComponentScreen;
