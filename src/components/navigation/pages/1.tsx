import React from 'react';
import { View, Text } from 'react-native';
import { mockData } from '../../../data/mockData';
import { styles } from '../../../styles/styles';

const One = () => {

	return (
		<View style={styles.card}>
			<Text style={styles.title}>{mockData[0].title}</Text>
			<Text style={styles.description}>{mockData[0].description}</Text>
		</View>
	);
}

export default One;