import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Title from './components/Title'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope'

const App = () => {
	return (
		<SafeAreaView>
			<ScrollView>
				<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 26, paddingTop: 30 }}>
					<Title title="Let's Explore" />
					<FontAwesomeIcon
						icon={faEnvelope}
						size={24}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default App
const styles = StyleSheet.create({})
