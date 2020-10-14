import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	center: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	cardContainer: {
		margin: 10,
		width: '80%',
		padding: 6,
	},
	card: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff',
		borderRadius: 8,
		padding: 16,
		cursor: 'pointer',
	},
	title: {
		fontSize: 36,
		marginBottom: 16
	},
	description: {
		fontSize: 16,
	},
	image: {
		width: '60%',
		height: '60%',
		marginTop: '10px',
		marginBottom: '10px',
		backgroundColor: 'grey',
	}
});