import React, { FC, useState } from 'react';
import { View, Text, StyleSheet, Image, Button, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../styles/styles';

interface CardProps {
	title: string;
	imageUrl: string;
	navId: number;
	id: number;
}

export const Card: FC<CardProps> = ({ title, imageUrl, navId, id }) => {
	const [active, setActive] = useState(0);

	const navigation = useNavigation();

	return (

		<>
			{active == id ?
				<Pressable style={styles.card} onPress={() => setActive(id)}>
					<View style={styles.card}>
						<Text>{title}</Text>
						<Image style={styles.image} source={imageUrl as any} />
						<Button
							title="Learn More"
							color="#841584"
							onPress={() => navigation.navigate(`${navId}`)}
						/>
					</View>
				</Pressable >
				:
				<Pressable style={styles.card} onPress={() => setActive(id)}>
					<View>
						<Text>Press to see location</Text>
					</View>
				</Pressable >
			}
		</>
	)
}