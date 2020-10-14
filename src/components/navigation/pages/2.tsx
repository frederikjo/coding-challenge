import React from 'react';
import { View, Text } from 'react-native';
import { mockData } from '../../../data/mockData';
import { styles } from '../../../styles/styles';

const Two = () => {

	return (
		<View style={styles.card}>
			<Text style={styles.title}>{mockData[1].title}</Text>
			<Text style={styles.description}>{mockData[1].description}</Text>
		</View>
	);
}

export default Two;