import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { mockData } from './data/mockData';
import { styles } from './styles/styles';
import { Card } from './components/shared/Card';

const Feed = () => {

	const [arr, setArr] = useState(mockData);

	useEffect(() => {
		setArr(arr);
	}, [arr])

	return (
		<View style={styles.center}>
			{arr.map((source) => {
				return (
					<View style={styles.cardContainer} >
						<Card id={source.id} key={source.id} title={source.title} imageUrl={source.imageUrl} navId={source.id} />
					</View>
				)
			})}
		</View>
	);
}

export default Feed;