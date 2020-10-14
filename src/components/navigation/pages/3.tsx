import React from 'react';
import { View, Text } from 'react-native';
import { mockData } from '../../../data/mockData';
import { styles } from '../../../styles/styles';

const Three = () => {

	return (
		<View style={styles.card}>
			<Text style={styles.title}>{mockData[2].title}</Text>
			<Text style={styles.description}>{mockData[2].description}</Text>
		</View>
	);
}

export default Three;