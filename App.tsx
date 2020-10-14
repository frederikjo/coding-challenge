import React from "react";
import { StyleSheet, View } from "react-native";
import Feed from "./src/feed";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import One from "./src/components/navigation/pages/1";
import Two from "./src/components/navigation/pages/2";
import Three from "./src/components/navigation/pages/3";
import Four from "./src/components/navigation/pages/4";
import Five from "./src/components/navigation/pages/5";

export default function App() {
	const Stack = createStackNavigator();

	return (
		<View style={styles.container}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="Feed" component={Feed} />
					<Stack.Screen name="1" component={One} />
					<Stack.Screen name="2" component={Two} />
					<Stack.Screen name="3" component={Three} />
					<Stack.Screen name="4" component={Four} />
					<Stack.Screen name="5" component={Five} />
				</Stack.Navigator>
			</NavigationContainer>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})
