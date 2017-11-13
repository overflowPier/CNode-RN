import React from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


	
export default class CommentItem extends React.Component {
	render () {
		return (
			<View style={styles.comItem}>
				<View style={styles.comItemTop}>
					<View style={styles.comNickName}>
						<Text>sssssss</Text>
					</View>
					<View style={styles.comBaseInfo}>
						<View style={styles.thumbsUp}>
							<Ionicons
								name="md-thumbs-up"
								color="#900"
								size={15}
							/>	
						</View>
						<View style={styles.dateTime}>
							<Text>
								6个月前
							</Text>
						</View>
					</View>
				</View>

				<View style={styles.comCon}>
					<Text>
						ffffffffffffff
					</Text>
				</View>
			</View>	
		)
	}
}

const styles = StyleSheet.create({
	comItem: {
		borderTopColor: '#e9e8f0',
		borderTopWidth: 1,
		paddingBottom: 10,
		paddingTop: 10,
		marginLeft: 12,
		marginRight: 12
	},
	comItemTop: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'		
	},
	comNickName: {
		flex: 1,
		color: '#333'
	},
	comItemBtm: {

	},
	comBaseInfo: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		color: '#666'
	},
	thumbsUp: {
		marginRight: 10
	},
	dateTime: {

	},
	comCon: {

	}
})