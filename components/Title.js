import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'

const Title = (props) => {
	return (
		<View>
			<Text style={styles.title}>{props.title}</Text>
		</View>
	)
}

// Types
Title.propTypes = {
	title: PropTypes.string.isRequired,
}

export default Title

const styles = StyleSheet.create({
	title: {
		fontFamily: 'Roboto-Bold',
		fontSize: 24,
		lineHeight: 29,
	},
})
