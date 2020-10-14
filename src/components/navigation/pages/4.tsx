import React from 'react';
import { View, Text } from 'react-native';
import { mockData } from '../../../data/mockData';
import { styles } from '../../../styles/styles';

const Four = () => {

	return (
		<View style={styles.card}>
			<Text style={styles.title}>{mockData[3].title}</Text>
			<Text style={styles.description}>{mockData[3].description}</Text>
		</View>
	);
}

export default Four;