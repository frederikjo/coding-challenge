import React from 'react';
import { View, Text } from 'react-native';
import { mockData } from '../../../data/mockData';
import { styles } from '../../../styles/styles';

const Five = () => {

	return (
		<View style={styles.card}>
			<Text style={styles.title}>{mockData[5].title}</Text>
			<Text style={styles.description}>{mockData[5].description}</Text>
		</View>
	);
}

export default Five;