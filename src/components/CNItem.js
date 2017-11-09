import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default class extends React.Component {
	render() {
		let pic = {
			url: 'http://pic2.ooopic.com/12/13/96/44bOOOPIC55_1024.jpg'
		}

		return (
			<View style={styles.item}>
				<View style={styles.itemWrapper}>
					<Image source={pic} style={styles.img} />
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	item: {		
		borderBottomColor: '#000',
		borderBottomWidth: 1,
		paddingBottom: 10,
		paddingTop: 10,
		marginLeft: 12,
		marginRight: 12
	},
	itemWrapper: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginLeft: 5,
		marginRight: 5	
	},
	img: {
		width: 60,
		height: 60,
		borderRadius: 4
	}
})