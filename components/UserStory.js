import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'

const UserStory = ({ name }) => {
	return (
		<View style={styles.container}>
			<View style={styles.profileContainer}>
				<Image
					source={{ uri: 'https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg' }}
					style={styles.profileImg}
				/>
			</View>
			<Text style={styles.nameText}>{name}</Text>
		</View>
	)
}

UserStory.propTypes = {
	name: PropTypes.string.isRequired,
}

export default UserStory

const styles = StyleSheet.create({
	container: {
		marginRight: 20,
	},
	profileContainer: {
		alignItems: 'center',
		borderWidth: 2,
		borderColor: 'pink',
		borderRadius: 100,
	},
	profileImg: {
		width: 65,
		height: 65,
		borderRadius: 100,
	},
	nameText: {
		fontFamily: 'Roboto-Medium',
		fontSize: 14,
		textAlign: 'center',
		marginTop: 8,
	},
})
