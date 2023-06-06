import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserStory = ({ name }) => {
	return (
		<View>
			<Text>{name}</Text>
		</View>
	)
}

export default UserStory

const styles = StyleSheet.create({})
