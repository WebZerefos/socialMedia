import { View, Text, SafeAreaView, ScrollView, StyleSheet, Pressable, FlatList } from 'react-native'
import React, { useState } from 'react'
import Title from './components/Title'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope'
import UserStory from './components/UserStory'

const App = () => {
	const data = [
		{ id: 1, name: 'John' },
		{ id: 2, name: 'Jane' },
		{ id: 3, name: 'Bob' },
		{ id: 4, name: 'Alice' },
		{ id: 5, name: 'Maria' },
		{ id: 6, name: 'Thaus' },
		{ id: 7, name: 'Tais' },
		{ id: 8, name: 'Julya' },
		{ id: 9, name: 'Patricia' },
		{ id: 10, name: 'Victor' },
	]

	const pageSize = 4
	const [pageNumber, setPageNumber] = useState(1)
	const [isloading, setIsloading] = useState(false)
	const [renderData, setRenderData] = useState([])

	return (
		<SafeAreaView>
			<ScrollView>
				<View style={styles.container}>
					<Title title="Let's Explore" />
					<Pressable style={styles.messageBtn}>
						<FontAwesomeIcon
							icon={faEnvelope}
							size={24}
							color='#8C8C8C'
						/>
						<View style={styles.notification}>
							<Text style={styles.notificationText}>2</Text>
						</View>
					</Pressable>
				</View>
				<View>
					<FlatList
						horizontal
						showsHorizontalScrollIndicator={false}
						data={data}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => <UserStory name={item.name} />}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default App
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 26,
		paddingTop: 30,
	},
	messageBtn: {
		backgroundColor: 'rgba(128, 128, 128, 0.1)',
		padding: 16,
		borderRadius: 100,
	},
	notification: {
		backgroundColor: '#DC5987',
		padding: 2,
		width: 16,
		height: 16,
		borderRadius: 100,
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		right: 8,
		top: 10,
	},
	notificationText: {
		color: '#ffffff',
		fontWeight: '600',
		fontSize: 8,
	},
})
